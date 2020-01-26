const data = [
  {
    stage: [[2, 2], [2, 2], [2, 0], [1, 0]],
    current: [3, 0],
    move: 5,
    color: '#7955ed',
  },
  {
    stage: [[2, 2, 2], [2, 1, 2], [2, 2, 2]],
    current: [1, 1],
    move: 20,
    color: '#93d9fb',
  },
  {
    stage: [[1, 2, 2], [2, 1, 1], [2, 2, 2]],
    current: [1, 1],
    move: 10,
    color: '#b9f736',
  },
  {
    stage: [[2, 1, 2], [1, 2, 1], [2, 2, 2]],
    current: [2, 1],
    move: 15,
    color: '#fbb593',
  },
  {
    stage: [[1, 1, 2], [1, 2, 1], [1, 1, 2], [1, 2, 2]],
    current: [2, 1],
    move: 11,
    color: '#5355d4',
  },
  {
    stage: [[2, 2, 2, 2], [2, 1, 1, 2], [2, 1, 2, 2], [2, 2, 1, 2]],
    current: [2, 2],
    move: 20,
    color: '#fcf029',
  },
  {
    stage: [[2, 2, 1, 2], [2, 1, 1, 1], [2, 2, 1, 2], [2, 2, 2, 2]],
    current: [3, 1],
    move: 20,
    color: '#8acf3f',
  },
  {
    stage: [[1, 2, 1, 2, 2], [2, 2, 1, 2, 2], [1, 1, 1, 1, 1], [2, 2, 1, 2, 2], [2, 2, 1, 2, 2]],
    current: [2, 2],
    move: 40,
    color: '#d253d4',
  },
  {
    stage: [[2, 2, 2, 2, 2], [2, 1, 1, 1, 1], [2, 1, 1, 1, 1], [2, 1, 1, 1, 1], [2, 2, 2, 2, 1]],
    current: [4, 0],
    move: 40,
    color: '#53d4d2',
  },
  {
    stage: [[2, 2, 2, 2, 2], [2, 2, 1, 2, 2], [2, 1, 2, 1, 2], [2, 2, 1, 2, 2], [2, 2, 2, 2, 2]],
    current: [0, 2],
    move: 35,
    color: '#9253d4',
  },
  {
    stage: [[0, 2, 1, 2, 0], [2, 2, 2, 2, 2], [2, 1, 2, 1, 2], [2, 2, 2, 2, 2], [0, 2, 1, 2, 0]],
    current: [2, 2],
    move: 35,
    color: '#55d453',
  },
  {
    stage: [[0, 2, 1, 2, 0], [2, 1, 2, 1, 2], [1, 2, 1, 2, 1], [2, 1, 2, 1, 2], [0, 2, 1, 2, 0]],
    current: [1, 0],
    move: 40,
    color: '#d4d253',
  },
  {
    stage: [[2, 1, 1, 1, 2], [2, 2, 2, 2, 2], [0, 1, 0, 2, 0], [2, 1, 2, 1, 2], [2, 2, 1, 2, 2], [0, 0, 2, 0, 0]],
    current: [2, 3],
    move: 35,
    color: '#d45355',
  },
  {
    stage: [[0, 0, 0, 2, 2], [0, 2, 2, 1, 2], [2, 1, 2, 2, 2], [1, 2, 0, 1, 2], [2, 1, 2, 1, 2], [2, 2, 2, 1, 0], [2, 1, 0, 0, 0]],
    current: [0, 3],
    move: 45,
    color: '#67d9d7',
  },
  {
    stage: [[2, 1, 2, 0, 0], [2, 1, 2, 1, 0], [0, 2, 1, 2, 2], [2, 1, 0, 1, 2], [2, 2, 2, 2, 0], [0, 1, 2, 1, 2], [0, 0, 1, 2, 2]],
    current: [4, 1],
    move: 40,
    color: '#5377d4',
  },
  {
    stage: [[0, 2, 1, 0, 0], [2, 1, 2, 2, 1], [2, 2, 2, 1, 2], [2, 1, 2, 2, 2], [2, 2, 2, 2, 2], [0, 1, 2, 0, 2], [0, 1, 2, 2, 2]],
    current: [3, 2],
    move: 35,
    color: '#acd453',
  },
  {
    stage: [[2, 2, 0, 0, 0], [1, 2, 1, 0, 0], [2, 1, 2, 2, 0], [0, 2, 1, 2, 1], [0, 1, 2, 1, 2], [1, 2, 1, 2, 0], [2, 1, 2, 0, 0], [2, 2, 0, 0, 0]],
    current: [4, 1],
    move: 45,
    color: '#d4536c',
  },
  {
    stage: [[2, 1, 0, 2, 2], [1, 2, 1, 2, 1], [2, 1, 2, 2, 1], [2, 0, 2, 0, 2], [2, 2, 1, 2, 1], [1, 2, 2, 2, 1], [2, 2, 0, 1, 1]],
    current: [6, 4],
    move: 55,
    color: '#7b53d4',
  },
  {
    stage: [[1, 1, 0, 2, 1], [2, 1, 2, 1, 2], [2, 2, 0, 2, 2], [1, 2, 1, 2, 1], [2, 2, 0, 2, 2], [2, 1, 2, 1, 2], [2, 2, 0, 2, 1]],
    current: [0, 3],
    move: 65,
    color: '#f2da02',
  },
  {
    stage: [[2, 2, 1, 2, 2, 2], [1, 0, 1, 2, 2, 2], [1, 1, 1, 2, 2, 2], [2, 2, 2, 1, 1, 1], [2, 0, 2, 1, 0, 1], [2, 2, 2, 1, 2, 2]],
    current: [5, 5],
    move: 45,
    color: '#2aa9fd',
  },
  {
    stage: [[2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 0, 2], [2, 2, 2, 0, 2, 1], [2, 2, 0, 1, 2, 2], [2, 0, 2, 1, 2, 2], [2, 1, 2, 2, 2, 2]],
    current: [5, 0],
    move: 95,
    color: '#c178b8',
  },
  {
    stage: [[0, 1, 2, 2, 2, 0], [1, 2, 1, 2, 2, 2], [2, 1, 0, 2, 1, 2], [2, 2, 2, 1, 2, 2], [1, 2, 2, 2, 0, 2], [0, 1, 2, 2, 1, 2]],
    current: [1, 1],
    move: 50,
    color: '#8cf904',
  },
  {
    stage: [[2, 2, 0, 2, 2, 2], [2, 2, 2, 2, 2, 2], [1, 2, 0, 2, 1, 0], [0, 2, 2, 0, 2, 1], [1, 2, 1, 2, 2, 2], [2, 2, 2, 0, 2, 2]],
    current: [3, 2],
    move: 70,
    color: '#d06ba4',
  },
  {
    stage: [[2, 2, 1, 2, 2, 0], [2, 0, 1, 2, 2, 2], [2, 2, 2, 0, 2, 1], [2, 1, 0, 2, 2, 1], [2, 2, 2, 1, 0, 2], [0, 2, 2, 2, 2, 2]],
    current: [1, 4],
    move: 50,
    color: '#666ffc',
  },
  {
    stage: [[2, 2, 0, 2, 1, 2], [1, 2, 1, 2, 2, 2], [2, 2, 2, 0, 2, 2], [2, 0, 2, 2, 0, 2], [1, 2, 1, 2, 2, 1], [2, 2, 0, 0, 1, 2]],
    current: [5, 4],
    move: 90,
    color: '#fc9b4d',
  },
  {
    stage: [[0, 2, 2, 2, 2, 2, 0], [2, 1, 2, 1, 2, 1, 2], [2, 2, 0, 2, 0, 2, 2], [2, 1, 2, 2, 2, 1, 2], [2, 2, 0, 2, 0, 2, 2], [2, 1, 2, 1, 2, 1, 2], [0, 2, 2, 2, 2, 2, 0]],
    current: [3, 3],
    move: 80,
    color: '#4daefc',
  },
  {
    stage: [[2, 2, 2, 0, 2, 2, 1], [2, 1, 2, 1, 2, 2, 2], [2, 2, 0, 2, 0, 2, 2], [0, 2, 2, 2, 2, 2, 0], [2, 2, 0, 2, 0, 2, 2], [2, 1, 2, 1, 2, 1, 2], [2, 2, 2, 0, 2, 2, 1]],
    current: [3, 3],
    move: 70,
    color: '#f48ef9',
  },
  {
    stage: [[2, 2, 0, 2, 2, 2, 2], [1, 2, 1, 1, 2, 2, 2], [2, 1, 0, 2, 0, 2, 0], [2, 2, 2, 1, 2, 2, 1], [0, 2, 0, 2, 0, 2, 2], [2, 1, 2, 1, 2, 2, 1], [2, 2, 1, 2, 0, 2, 2]],
    current: [2, 5],
    move: 100,
    color: '#627cf9',
  },
  {
    stage: [[2, 2, 2, 2, 2, 2, 0], [2, 1, 2, 0, 2, 2, 2], [2, 0, 1, 2, 2, 1, 2], [2, 2, 2, 0, 2, 2, 2], [2, 2, 2, 2, 2, 0, 2], [2, 2, 1, 0, 1, 2, 2], [0, 2, 2, 2, 2, 2, 2]],
    current: [3, 2],
    move: 100,
    color: '#44c47c',
  },
  {
    stage: [[2, 2, 1, 2, 2, 2, 0], [2, 1, 0, 2, 2, 2, 1], [2, 2, 2, 2, 2, 2, 2], [0, 2, 0, 1, 0, 2, 0], [2, 2, 2, 2, 2, 1, 2], [2, 1, 2, 2, 2, 0, 2], [0, 2, 2, 2, 2, 2, 2]],
    current: [2, 4],
    move: 65,
    color: '#b593fb',
  },
];

let board = [];
let stage;
let current;
let moveTxt;
let moveMax;
let move;
let xLen;
let yLe;
let xMax;
let yMax;
let prevKey;
let arrow;
let progress;
let modal;
let gameover;
let blockMax;

const start = i => {
  if (i > localStorage.getItem('all-square-level-max')) {
    localStorage['all-square-level-max'] = i;
  }
  localStorage['all-square-level'] = i;

  const s = document.getElementById('stage');
  moveTxt = document.getElementById('move');
  gameover = false;
  s.textContent = `${parseInt(i) + 1}`;
  stage = data[i].stage;
  current = data[i].current.slice();
  moveMax = data[i].move;
  move = data[i].move;
  moveTxt.textContent = move;
  xLen = stage.length;
  yLen = stage[0].length;
  xMax = xLen - 1;
  yMax = yLen - 1;
  prevKey = null;
  blockMax = stage.flat().filter(e => e != 0).length;
  stageBtns(i);
  percent(true);
  createBoard();
  showBoard();
  addFlipEvent();
};

const stageBtns = i => {
  const btns = document.getElementById('stage-btns');
  const template = document.getElementById('stage-btn-template');

  while (btns.firstChild) {
    btns.removeChild(btns.firstChild);
  }

  for (let j = 0; j < data.length; j++) {
    const clone = document.importNode(template.content, true);
    const btn = clone.querySelector('button');

    btn.textContent = j + 1;
    btn.addEventListener('click', start.bind(this, j));

    if (parseInt(i) === j) {
      btn.classList.add('current');
      btn.style.border = `2px solid ${data[i].color}`;
    }

    if (j <= parseInt(localStorage.getItem('all-square-level-max'))) {
      btn.disabled = false;
    }

    btns.appendChild(clone);
  }
};

const createBoard = () => {
  board = [];
  for (let i = 0; i < xLen; i++) {
    board[i] = [];
    for (let j = 0; j < yLen; j++) {
      board[i][j] = stage[i][j];
    }
  }
};

const showBoard = () => {
  const b = document.getElementById('board');
  b.classList.remove('fadeOut');
  while (b.firstChild) {
    b.removeChild(b.firstChild);
  }

  const block = [document.getElementById('none-template'), document.getElementById('square-template'), document.getElementById('circle-template')];
  const cs = localStorage['all-square-level'];

  for (let x = 0; x < xLen; x++) {
    for (let y = 0; y < yLen; y++) {
      const clone = document.importNode(block[board[x][y]].content, true);
      let s = clone.querySelector('.square');
      if (s != null) {
        s.style.background = data[cs].color;
      }

      // add arrow + data-canFlip
      let cell = clone.querySelector('div');
      if (y === current[1]) {
        const tx = current[0] - 1;
        const dx = current[0] + 1;
        // top
        if (x === tx && prevKey != 38 && board[tx][y] != 0) {
          const top = arrow[0].cloneNode(true);
          cell.appendChild(top);
          cell.dataset.canFlip = 'top';
          cell.dataset.x = tx;
          cell.dataset.y = current[1];
        }
        // down
        if (x === dx && prevKey != 40 && board[dx][y] != 0) {
          const bottom = arrow[2].cloneNode(true);
          cell.appendChild(bottom);
          cell.dataset.canFlip = 'bottom';
          cell.dataset.x = dx;
          cell.dataset.y = current[1];
        }
      }
      if (x === current[0]) {
        const ry = current[1] + 1;
        const ly = current[1] - 1;
        // right
        if (y === ry && prevKey != 39 && board[x][ry] != 0) {
          const right = arrow[1].cloneNode(true);
          cell.appendChild(right);
          cell.dataset.canFlip = 'right';
          cell.dataset.x = current[0];
          cell.dataset.y = ry;
        }
        // left
        if (y === ly && prevKey != 37 && board[x][ly] != 0) {
          const left = arrow[3].cloneNode(true);
          cell.appendChild(left);
          cell.dataset.canFlip = 'left';
          cell.dataset.x = current[0];
          cell.dataset.y = ly;
        }
      }
      b.appendChild(cell);
    }
  }

  let w = document.getElementsByClassName('active-block')[0].offsetWidth;
  b.style.width = w * yLen + 6 * 2 * yLen + 'px';

  // next stage
  if (blockMax === board.flat().filter(e => e === 1).length) {
    const c = parseInt(localStorage.getItem('all-square-level')) + 1;
    (async () => {
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

const addFlipEvent = () => {
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

const flip = (x, y, pk) => {
  const _x = parseInt(x);
  const _y = parseInt(y);
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
  board[_x][_y] = 3 - board[_x][_y];
  countMove();
  showBoard();
  addFlipEvent();
};

const countMove = () => {
  if (move <= 0) {
    modal.classList.add('show');
    gameover = true;
    return;
  } else {
    move--;
  }
  percent();
  moveTxt.textContent = move;
};

const percent = (first = false) => {
  if (first) {
    (async () => {
      progress.setAttribute('aria-valuenow', 0);
      progress.setAttribute('style', 'width: 0%');
      progress.style.transition = 'none';
      await wait(100);
      progress.setAttribute('aria-valuenow', 100);
      progress.setAttribute('style', 'width: 100%');
    })();
  } else {
    let p = Math.floor((move / moveMax) * 100);
    progress.setAttribute('aria-valuenow', p);
    progress.setAttribute('style', `width: ${p}%`);
  }
};

const wait = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const modalClose = () => {
  modal.classList.remove('show');
  start(parseInt(localStorage.getItem('all-square-level')));
};

window.onload = function() {
  arrow = [document.getElementsByClassName('top')[0], document.getElementsByClassName('right')[0], document.getElementsByClassName('bottom')[0], document.getElementsByClassName('left')[0]];
  progress = document.getElementById('progress-bar');

  modal = document.getElementById('modal');
  const modalBtn = document.getElementById('modal-btn');
  modalBtn.addEventListener('click', () => {
    modalClose();
  });

  if (!localStorage.getItem('all-square-level-max')) {
    localStorage['all-square-level'] = 0;
    localStorage['all-square-level-max'] = 0;
    start(0);
  } else {
    start(parseInt(localStorage.getItem('all-square-level')));
  }

  document.addEventListener('keydown', e => {
    const k = e.keyCode;
    const cx = current[0],
      cy = current[1];

    if (gameover) {
      e.preventDefault();
      if (k === 32) {
        modalClose();
      }
      return;
    }

    if (k === 38 && cx > 0 && prevKey != 38 && board[cx - 1][cy] != 0) {
      flip(cx - 1, cy, 40);
    } else if (k === 39 && cy < yMax && prevKey != 39 && board[cx][cy + 1] != 0) {
      flip(cx, cy + 1, 37);
    } else if (k === 40 && cx < xMax && prevKey != 40 && board[cx + 1][cy] != 0) {
      flip(cx + 1, cy, 38);
    } else if (k === 37 && cy > 0 && prevKey != 37 && board[cx][cy - 1] != 0) {
      flip(cx, cy - 1, 39);
    }
  });
};
