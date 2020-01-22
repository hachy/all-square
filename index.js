const data = [
  {
    stage: [[1, 1, 2], [1, 2, 1], [1, 1, 2], [1, 2, 2]],
    current: [2, 1],
    move: 11,
  },
  {
    stage: [[1, 1, 1, 2], [1, 2, 0, 1], [1, 1, 2, 0], [1, 2, 2, 2]],
    current: [1, 1],
    move: 20,
  },
];

const board = [];
let stage;
let current;
let moveTxt;
let move;
let xLen;
let yLe;
let xMax;
let yMax;
let prevKey;
let block;
let arrow;
let modal;
let gameover;

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
  move = data[i].move;
  moveTxt.textContent = move;
  xLen = stage.length;
  yLen = stage[0].length;
  xMax = xLen - 1;
  yMax = yLen - 1;
  prevKey = null;
  createBoard();
  showBoard();
};

const createBoard = () => {
  for (let i = 0; i < xLen; i++) {
    board[i] = [];
    for (let j = 0; j < yLen; j++) {
      board[i][j] = stage[i][j];
    }
  }
};

const showBoard = () => {
  const b = document.getElementById('board');
  b.style.width = 70 * yLen + 6 * 2 * yLen + 'px';
  while (b.firstChild) {
    b.removeChild(b.firstChild);
  }

  for (let x = 0; x < xLen; x++) {
    for (let y = 0; y < yLen; y++) {
      const cell = block[board[x][y]].cloneNode(true);
      b.appendChild(cell);

      if (x == current[0] && y == current[1]) {
        if (current[0] - 1 >= 0 && prevKey != 38 && board[x - 1][y] != 0) {
          const top = arrow[0].cloneNode(true);
          cell.appendChild(top);
        }
        if (current[1] + 1 <= yMax && prevKey != 39 && board[x][y + 1] != 0) {
          const right = arrow[1].cloneNode(true);
          cell.appendChild(right);
        }
        if (current[0] + 1 <= xMax && prevKey != 40 && board[x + 1][y] != 0) {
          const bottom = arrow[2].cloneNode(true);
          cell.appendChild(bottom);
        }
        if (current[1] - 1 >= 0 && prevKey != 37 && board[x][y - 1] != 0) {
          const left = arrow[3].cloneNode(true);
          cell.appendChild(left);
        }
      }
    }
  }
};

const countMove = () => {
  if (move <= 0) {
    modal.classList.add('show');
    gameover = true;
    return;
  } else {
    move--;
  }
  moveTxt.textContent = move;
};

window.onload = function() {
  block = [document.getElementsByClassName('none')[0], document.getElementsByClassName('square')[0], document.getElementsByClassName('circle')[0]];
  arrow = [document.getElementsByClassName('top')[0], document.getElementsByClassName('right')[0], document.getElementsByClassName('bottom')[0], document.getElementsByClassName('left')[0]];

  modal = document.getElementById('modal');
  const modalBtn = document.getElementById('modal-btn');
  modalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    start(localStorage.getItem('all-square-level'));
    createBoard();
    showBoard();
  });

  const btns = document.getElementsByClassName('btn');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', start.bind(this, i));
  }

  if (!localStorage.getItem('all-square-level-max')) {
    localStorage['all-square-level'] = 0;
    localStorage['all-square-level-max'] = 0;
    start(0);
  } else {
    const l = parseInt(localStorage.getItem('all-square-level-max')) + 1;
    for (let i = 0; i < l; i++) {
      btns[i].disabled = false;
    }
    start(localStorage.getItem('all-square-level'));
  }
  createBoard();
  showBoard();

  document.addEventListener('keydown', e => {
    const k = e.keyCode;
    const cx = current[0],
      cy = current[1];

    if (gameover) {
      e.preventDefault();
      return;
    }

    if (k === 38 && cx > 0 && prevKey != 38 && board[cx - 1][cy] != 0) {
      prevKey = 40;
      current[0]--;
      board[cx - 1][cy] = 3 - board[cx - 1][cy];
      countMove();
    } else if (k === 39 && cy < yMax && prevKey != 39 && board[cx][cy + 1] != 0) {
      prevKey = 37;
      current[1]++;
      board[cx][cy + 1] = 3 - board[cx][cy + 1];
      countMove();
    } else if (k === 40 && cx < xMax && prevKey != 40 && board[cx + 1][cy] != 0) {
      prevKey = 38;
      current[0]++;
      board[cx + 1][cy] = 3 - board[cx + 1][cy];
      countMove();
    } else if (k === 37 && cy > 0 && prevKey != 37 && board[cx][cy - 1] != 0) {
      prevKey = 39;
      current[1]--;
      board[cx][cy - 1] = 3 - board[cx][cy - 1];
      countMove();
    }
    showBoard();
  });
};
