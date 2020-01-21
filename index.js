// prettier-ignore
const data = [
  [[1, 1, 2], [1, 2, 1], [1, 1, 2], [1, 2, 2]],
  [[1, 1, 1, 2], [1, 2, 0, 1], [1, 1, 2, 0], [1, 2, 2, 2]]
];

const stage = data[0];
const current = [2, 1];

const board = [];
const xLen = stage.length;
const yLen = stage[0].length;
const xMax = xLen - 1;
const yMax = yLen - 1;
let block;
let arrow;
let prevKey;

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

window.onload = function() {
  block = [document.getElementsByClassName('none')[0], document.getElementsByClassName('square')[0], document.getElementsByClassName('circle')[0]];
  arrow = [document.getElementsByClassName('top')[0], document.getElementsByClassName('right')[0], document.getElementsByClassName('bottom')[0], document.getElementsByClassName('left')[0]];

  for (let i = 0; i < xLen; i++) {
    board[i] = [];
    for (let j = 0; j < yLen; j++) {
      board[i][j] = stage[i][j];
    }
  }
  showBoard();

  document.addEventListener('keydown', e => {
    const k = e.keyCode;
    const cx = current[0],
      cy = current[1];

    if (k === 38 && cx > 0 && prevKey != 38 && board[cx - 1][cy] != 0) {
      prevKey = 40;
      current[0]--;
      board[cx - 1][cy] = 3 - board[cx - 1][cy];
    } else if (k === 39 && cy < yMax && prevKey != 39 && board[cx][cy + 1] != 0) {
      prevKey = 37;
      current[1]++;
      board[cx][cy + 1] = 3 - board[cx][cy + 1];
    } else if (k === 40 && cx < xMax && prevKey != 40 && board[cx + 1][cy] != 0) {
      prevKey = 38;
      current[0]++;
      board[cx + 1][cy] = 3 - board[cx + 1][cy];
    } else if (k === 37 && cy > 0 && prevKey != 37 && board[cx][cy - 1] != 0) {
      prevKey = 39;
      current[1]--;
      board[cx][cy - 1] = 3 - board[cx][cy - 1];
    }
    showBoard();
  });
};
