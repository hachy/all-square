import { data } from './data';
import { Global } from './global';
import { Info } from './info';
import { wait } from './util';

export class Game {
  static board: number[][] = [];
  static stage: number[][];
  static xLen: number;
  static yLen: number;
  static blockMax: number;
  static arrow: HTMLDivElement[];

  constructor() {
    Game.arrow = [
      document.getElementsByClassName('top')[0] as HTMLDivElement,
      document.getElementsByClassName('right')[0] as HTMLDivElement,
      document.getElementsByClassName('bottom')[0] as HTMLDivElement,
      document.getElementsByClassName('left')[0] as HTMLDivElement
    ];
  }

  static createNav(i: number): void {
    const btns = document.getElementById('stage-btns') as HTMLDivElement;
    const template = document.getElementById('stage-btn-template') as HTMLTemplateElement;

    while (btns.firstChild) {
      btns.removeChild(btns.firstChild);
    }

    for (let j = 0; j < data.length; j++) {
      const clone = document.importNode(template.content, true);
      const btn = clone.querySelector('button') as HTMLButtonElement;

      btn.textContent = `${j + 1}`;
      btn.addEventListener('click', Game.start.bind(this, j));

      if (i === j) {
        btn.classList.add('current');
        btn.style.border = `2px solid ${data[i].color}`;
      }

      if (j <= parseInt(localStorage.getItem('all-square-level-max') as string)) {
        btn.disabled = false;
      }

      btns.appendChild(clone);
    }
  }

  static createBoard(): void {
    this.board = [];
    for (let i = 0; i < Game.xLen; i++) {
      this.board[i] = [];
      for (let j = 0; j < Game.yLen; j++) {
        this.board[i][j] = Game.stage[i][j];
      }
    }
  }

  static showBoard(): void {
    const b = document.getElementById('board') as HTMLDivElement;
    b.classList.remove('fadeOut');
    while (b.firstChild) {
      b.removeChild(b.firstChild);
    }

    const block = [
      document.getElementById('none-template') as HTMLTemplateElement,
      document.getElementById('square-template') as HTMLTemplateElement,
      document.getElementById('circle-template') as HTMLTemplateElement
    ];
    const cs = localStorage['all-square-level'];

    for (let x = 0; x < this.xLen; x++) {
      for (let y = 0; y < this.yLen; y++) {
        const clone = document.importNode(block[this.board[x][y]].content, true);
        const s = clone.querySelector('.square') as HTMLDivElement;
        if (s != null) {
          s.style.background = data[cs].color;
        }

        // add arrow + data-canFlip
        const cell = clone.querySelector('div') as HTMLDivElement;
        if (y === Global.current[1]) {
          const tx = Global.current[0] - 1;
          const dx = Global.current[0] + 1;
          // top
          if (x === tx && Global.prevKey !== 38 && this.board[tx][y] !== 0) {
            const top = this.arrow[0].cloneNode(true);
            cell.appendChild(top);
            cell.dataset.canFlip = 'top';
            cell.dataset.x = `${tx}`;
            cell.dataset.y = `${Global.current[1]}`;
          }
          // down
          if (x === dx && Global.prevKey !== 40 && this.board[dx][y] !== 0) {
            const bottom = this.arrow[2].cloneNode(true);
            cell.appendChild(bottom);
            cell.dataset.canFlip = 'bottom';
            cell.dataset.x = `${dx}`;
            cell.dataset.y = `${Global.current[1]}`;
          }
        }
        if (x === Global.current[0]) {
          const ry = Global.current[1] + 1;
          const ly = Global.current[1] - 1;
          // right
          if (y === ry && Global.prevKey !== 39 && this.board[x][ry] !== 0) {
            const right = this.arrow[1].cloneNode(true);
            cell.appendChild(right);
            cell.dataset.canFlip = 'right';
            cell.dataset.x = `${Global.current[0]}`;
            cell.dataset.y = `${ry}`;
          }
          // left
          if (y === ly && Global.prevKey !== 37 && this.board[x][ly] !== 0) {
            const left = this.arrow[3].cloneNode(true);
            cell.appendChild(left);
            cell.dataset.canFlip = 'left';
            cell.dataset.x = `${Global.current[0]}`;
            cell.dataset.y = `${ly}`;
          }
        }
        b.appendChild(cell);
      }
    }

    const w = document.getElementsByClassName('active-block')[0] as HTMLDivElement;
    const ow = w.offsetWidth;
    b.style.width = `${ow * this.yLen + 6 * 2 * this.yLen}px`;

    // next stage
    if (this.blockMax === this.board.flat().filter((e: number) => e === 1).length) {
      const c = parseInt(localStorage.getItem('all-square-level') as string) + 1;
      (async (): Promise<void> => {
        Global.gameOver = true;
        b.classList.add('fadeOut');
        await wait(1300);
        if (c >= data.length) {
          console.info('Thank you for playing!');
        } else {
          Game.start(c);
        }
      })();
    }
  }

  static flip(x: number, y: number, pk: number): void {
    const cx = x;
    const cy = y;
    Global.prevKey = pk;
    if (pk === 40) {
      Global.current[0]--;
    } else if (pk === 37) {
      Global.current[1]++;
    } else if (pk === 38) {
      Global.current[0]++;
    } else if (pk === 39) {
      Global.current[1]--;
    }
    this.board[cx][cy] = 3 - this.board[cx][cy];
    Info.countMove();
    this.showBoard();
  }

  static addFlipEvent(): void {
    const ab = document.getElementsByClassName('active-block');
    Array.prototype.forEach.call(ab, el => {
      if (el.dataset.canFlip === 'top') {
        el.addEventListener('mousedown', this.flip.bind(this, el.dataset.x, el.dataset.y, 40));
      }
      if (el.dataset.canFlip === 'right') {
        el.addEventListener('mousedown', this.flip.bind(this, el.dataset.x, el.dataset.y, 37));
      }
      if (el.dataset.canFlip === 'bottom') {
        el.addEventListener('mousedown', this.flip.bind(this, el.dataset.x, el.dataset.y, 38));
      }
      if (el.dataset.canFlip === 'left') {
        el.addEventListener('mousedown', this.flip.bind(this, el.dataset.x, el.dataset.y, 39));
      }
    });
  }

  static start(i: number): void {
    if (i > parseInt(localStorage.getItem('all-square-level-max') as string)) {
      localStorage['all-square-level-max'] = i;
    }
    localStorage['all-square-level'] = i;

    const info = new Info(i);
    info.render();

    Global.gameOver = false;
    Global.current = data[i].current.slice();
    this.stage = data[i].stage;
    this.xLen = this.stage.length;
    this.yLen = this.stage[0].length;
    Global.xMax = this.xLen - 1;
    Global.yMax = this.yLen - 1;

    Global.prevKey = 0;
    this.blockMax = this.stage.flat().filter((e: number) => e !== 0).length;
    this.createNav(i);
    Info.percent(true);
    this.createBoard();
    this.showBoard();
    this.addFlipEvent();
  }
}
