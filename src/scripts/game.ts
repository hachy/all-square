import { data } from './data';
import { Global } from './global';
import { Info } from './info';
import { wait } from './util';

export class Game {
  stage!: number[][];
  xLen!: number;
  yLen!: number;
  blockMax!: number;

  btns: HTMLDivElement;
  template: HTMLTemplateElement;
  boardEl: HTMLDivElement;
  block: HTMLTemplateElement[];
  arrow: HTMLDivElement[];

  constructor() {
    this.btns = document.getElementById('stage-btns') as HTMLDivElement;
    this.template = document.getElementById('stage-btn-template') as HTMLTemplateElement;
    this.boardEl = document.getElementById('board') as HTMLDivElement;
    this.block = [
      document.getElementById('none-template') as HTMLTemplateElement,
      document.getElementById('square-template') as HTMLTemplateElement,
      document.getElementById('circle-template') as HTMLTemplateElement
    ];
    this.arrow = [
      document.getElementsByClassName('top')[0] as HTMLDivElement,
      document.getElementsByClassName('right')[0] as HTMLDivElement,
      document.getElementsByClassName('bottom')[0] as HTMLDivElement,
      document.getElementsByClassName('left')[0] as HTMLDivElement
    ];
  }

  createNav(i: number): void {
    while (this.btns.firstChild) {
      this.btns.removeChild(this.btns.firstChild);
    }

    for (let j = 0; j < data.length; j++) {
      const clone = document.importNode(this.template.content, true);
      const btn = clone.querySelector('button') as HTMLButtonElement;

      btn.textContent = `${j + 1}`;
      btn.addEventListener('click', this.start.bind(this, j));

      if (i === j) {
        btn.classList.add('current');
        btn.style.border = `2px solid ${data[i].color}`;
      }

      if (j <= parseInt(localStorage.getItem('all-square-level-max') as string)) {
        btn.disabled = false;
      }

      this.btns.appendChild(clone);
    }
  }

  createBoard(): void {
    Global.board = [];
    for (let i = 0; i < this.xLen; i++) {
      Global.board[i] = [];
      for (let j = 0; j < this.yLen; j++) {
        Global.board[i][j] = this.stage[i][j];
      }
    }
  }

  showBoard(): void {
    this.boardEl.classList.remove('fadeOut');
    while (this.boardEl.firstChild) {
      this.boardEl.removeChild(this.boardEl.firstChild);
    }

    const cs = localStorage['all-square-level'];

    for (let x = 0; x < this.xLen; x++) {
      for (let y = 0; y < this.yLen; y++) {
        const clone = document.importNode(this.block[Global.board[x][y]].content, true);
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
          if (x === tx && Global.prevKey !== 38 && Global.board[tx][y] !== 0) {
            const top = this.arrow[0].cloneNode(true);
            cell.appendChild(top);
            cell.dataset.canFlip = 'top';
            cell.dataset.x = `${tx}`;
            cell.dataset.y = `${Global.current[1]}`;
          }
          // down
          if (x === dx && Global.prevKey !== 40 && Global.board[dx][y] !== 0) {
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
          if (y === ry && Global.prevKey !== 39 && Global.board[x][ry] !== 0) {
            const right = this.arrow[1].cloneNode(true);
            cell.appendChild(right);
            cell.dataset.canFlip = 'right';
            cell.dataset.x = `${Global.current[0]}`;
            cell.dataset.y = `${ry}`;
          }
          // left
          if (y === ly && Global.prevKey !== 37 && Global.board[x][ly] !== 0) {
            const left = this.arrow[3].cloneNode(true);
            cell.appendChild(left);
            cell.dataset.canFlip = 'left';
            cell.dataset.x = `${Global.current[0]}`;
            cell.dataset.y = `${ly}`;
          }
        }
        this.boardEl.appendChild(cell);
      }
    }

    const w = document.getElementsByClassName('active-block')[0] as HTMLDivElement;
    const ow = w.offsetWidth;
    this.boardEl.style.width = `${ow * this.yLen + 6 * 2 * this.yLen}px`;

    // next stage
    if (this.blockMax === Global.board.flat().filter((e: number) => e === 1).length) {
      const c = parseInt(localStorage.getItem('all-square-level') as string) + 1;
      (async (): Promise<void> => {
        Global.gameOver = true;
        this.boardEl.classList.add('fadeOut');
        await wait(1300);
        if (c >= data.length) {
          console.info('Thank you for playing!');
        } else {
          this.start(c);
        }
      })();
    }
  }

  flip(x: number, y: number, pk: number): void {
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
    Global.board[cx][cy] = 3 - Global.board[cx][cy];
    Info.countMove();
    this.showBoard();
  }

  addFlipEvent(): void {
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

  start(i: number): void {
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
