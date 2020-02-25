import { data } from './data';

let board: number[][] = [];
let stage: number[][];
let current: number[];
let moveTxt: HTMLSpanElement;
let moveMax: number;
let move: number;
let xLen: number;
let yLen: number;
let xMax: number;
let yMax: number;
let prevKey: number;
let arrow: HTMLDivElement[];
let progress: HTMLDivElement;
let modal: HTMLDivElement;
let gameover: boolean;
let blockMax: number;

const start = (i: number): void => {
  if (i > parseInt(localStorage.getItem('all-square-level-max') as string)) {
    localStorage['all-square-level-max'] = i;
  }
  localStorage['all-square-level'] = i;

  const s = document.getElementById('stage') as HTMLSpanElement;
  moveTxt = document.getElementById('move') as HTMLSpanElement;
  gameover = false;
  s.textContent = `${i + 1}`;
  stage = data[i].stage;
  current = data[i].current.slice();
  moveMax = data[i].move;
  move = data[i].move;
  moveTxt.textContent = `${move}`;
  xLen = stage.length;
  yLen = stage[0].length;
  xMax = xLen - 1;
  yMax = yLen - 1;
  prevKey = null;
  blockMax = stage.flat().filter((e: number) => e !== 0).length;
  stageBtns(i);
  percent(true);
  createBoard();
  showBoard();
  addFlipEvent();
};

const stageBtns = (i: number): void => {
  const btns = document.getElementById('stage-btns') as HTMLDivElement;
  const template = document.getElementById('stage-btn-template') as HTMLTemplateElement;

  while (btns.firstChild) {
    btns.removeChild(btns.firstChild);
  }

  for (let j = 0; j < data.length; j++) {
    const clone = document.importNode(template.content, true);
    const btn = clone.querySelector('button') as HTMLButtonElement;

    btn.textContent = `${j + 1}`;
    btn.addEventListener('click', start.bind(this, j));

    if (i === j) {
      btn.classList.add('current');
      btn.style.border = `2px solid ${data[i].color}`;
    }

    if (j <= parseInt(localStorage.getItem('all-square-level-max') as string)) {
      btn.disabled = false;
    }

    btns.appendChild(clone);
  }
};

const createBoard = (): void => {
  board = [];
  for (let i = 0; i < xLen; i++) {
    board[i] = [];
    for (let j = 0; j < yLen; j++) {
      board[i][j] = stage[i][j];
    }
  }
};

const percent = (first = false): void => {
  if (first) {
    (async (): Promise<void> => {
      progress.setAttribute('aria-valuenow', `${0}`);
      progress.setAttribute('style', 'width: 0%');
      progress.style.transition = 'none';
      await wait(100);
      progress.setAttribute('aria-valuenow', `${100}`);
      progress.setAttribute('style', 'width: 100%');
    })();
  } else {
    const p = Math.floor((move / moveMax) * 100);
    progress.setAttribute('aria-valuenow', `${p}`);
    progress.setAttribute('style', `width: ${p}%`);
  }
};

const wait = (ms: number): Promise<number> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const showBoard = (): void => {
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

  for (let x = 0; x < xLen; x++) {
    for (let y = 0; y < yLen; y++) {
      const clone = document.importNode(block[board[x][y]].content, true);
      const s = clone.querySelector('.square') as HTMLDivElement;
      if (s != null) {
        s.style.background = data[cs].color;
      }

      // add arrow + data-canFlip
      const cell = clone.querySelector('div') as HTMLDivElement;
      if (y === current[1]) {
        const tx = current[0] - 1;
        const dx = current[0] + 1;
        // top
        if (x === tx && prevKey !== 38 && board[tx][y] !== 0) {
          const top = arrow[0].cloneNode(true);
          cell.appendChild(top);
          cell.dataset.canFlip = 'top';
          cell.dataset.x = `${tx}`;
          cell.dataset.y = `${current[1]}`;
        }
        // down
        if (x === dx && prevKey !== 40 && board[dx][y] !== 0) {
          const bottom = arrow[2].cloneNode(true);
          cell.appendChild(bottom);
          cell.dataset.canFlip = 'bottom';
          cell.dataset.x = `${dx}`;
          cell.dataset.y = `${current[1]}`;
        }
      }
      if (x === current[0]) {
        const ry = current[1] + 1;
        const ly = current[1] - 1;
        // right
        if (y === ry && prevKey !== 39 && board[x][ry] !== 0) {
          const right = arrow[1].cloneNode(true);
          cell.appendChild(right);
          cell.dataset.canFlip = 'right';
          cell.dataset.x = `${current[0]}`;
          cell.dataset.y = `${ry}`;
        }
        // left
        if (y === ly && prevKey !== 37 && board[x][ly] !== 0) {
          const left = arrow[3].cloneNode(true);
          cell.appendChild(left);
          cell.dataset.canFlip = 'left';
          cell.dataset.x = `${current[0]}`;
          cell.dataset.y = `${ly}`;
        }
      }
      b.appendChild(cell);
    }
  }

  const w = document.getElementsByClassName('active-block')[0] as HTMLDivElement;
  const ow = w.offsetWidth;
  b.style.width = `${ow * yLen + 6 * 2 * yLen}px`;

  // next stage
  if (blockMax === board.flat().filter(e => e === 1).length) {
    const c = parseInt(localStorage.getItem('all-square-level') as string) + 1;
    (async (): Promise<void> => {
      gameover = true;
      b.classList.add('fadeOut');
      await wait(1300);
      if (c >= data.length) {
        console.info('Thank you for playing!');
      } else {
        start(c);
      }
    })();
  }
};

const countMove = (): void => {
  if (move <= 0) {
    modal.classList.add('show');
    gameover = true;
  } else {
    move--;
  }
  percent();
  moveTxt.textContent = `${move}`;
};

const addFlipEvent = (): void => {
  const ab = document.getElementsByClassName('active-block');
  Array.prototype.forEach.call(ab, el => {
    if (el.dataset.canFlip === 'top') {
      el.addEventListener('mousedown', flip.bind(this, el.dataset.x, el.dataset.y, 40));
    }
    if (el.dataset.canFlip === 'right') {
      el.addEventListener('mousedown', flip.bind(this, el.dataset.x, el.dataset.y, 37));
    }
    if (el.dataset.canFlip === 'bottom') {
      el.addEventListener('mousedown', flip.bind(this, el.dataset.x, el.dataset.y, 38));
    }
    if (el.dataset.canFlip === 'left') {
      el.addEventListener('mousedown', flip.bind(this, el.dataset.x, el.dataset.y, 39));
    }
  });
};

const flip = (x: number, y: number, pk: number): void => {
  const cx = x;
  const cy = y;
  prevKey = pk;
  if (pk === 40) {
    current[0]--;
  } else if (pk === 37) {
    current[1]++;
  } else if (pk === 38) {
    current[0]++;
  } else if (pk === 39) {
    current[1]--;
  }
  board[cx][cy] = 3 - board[cx][cy];
  countMove();
  showBoard();
  addFlipEvent();
};

const modalClose = (): void => {
  modal.classList.remove('show');
  start(parseInt(localStorage.getItem('all-square-level') as string));
};

window.onload = (): void => {
  arrow = [
    document.getElementsByClassName('top')[0] as HTMLDivElement,
    document.getElementsByClassName('right')[0] as HTMLDivElement,
    document.getElementsByClassName('bottom')[0] as HTMLDivElement,
    document.getElementsByClassName('left')[0] as HTMLDivElement
  ];
  progress = document.getElementById('progress-bar') as HTMLDivElement;

  modal = document.getElementById('modal') as HTMLDivElement;
  const modalBtn = document.getElementById('modal-btn') as HTMLButtonElement;
  modalBtn.addEventListener('click', () => {
    modalClose();
  });

  if (!localStorage.getItem('all-square-level-max')) {
    localStorage['all-square-level'] = 0;
    localStorage['all-square-level-max'] = 0;
    start(0);
  } else {
    start(parseInt(localStorage.getItem('all-square-level') as string));
  }

  document.addEventListener('keydown', e => {
    const k = e.keyCode;
    const cx = current[0];
    const cy = current[1];

    if (gameover) {
      e.preventDefault();
      if (k === 32) {
        modalClose();
      }
      return;
    }

    if (k === 38 && cx > 0 && prevKey !== 38 && board[cx - 1][cy] !== 0) {
      flip(cx - 1, cy, 40);
    } else if (k === 39 && cy < yMax && prevKey !== 39 && board[cx][cy + 1] !== 0) {
      flip(cx, cy + 1, 37);
    } else if (k === 40 && cx < xMax && prevKey !== 40 && board[cx + 1][cy] !== 0) {
      flip(cx + 1, cy, 38);
    } else if (k === 37 && cy > 0 && prevKey !== 37 && board[cx][cy - 1] !== 0) {
      flip(cx, cy - 1, 39);
    }
  });
};
