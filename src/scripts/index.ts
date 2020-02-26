import { Global } from './global';
import { Modal } from './modal';
import { Game } from './game';

const game = new Game();

const modalClose = (): void => {
  Modal.close();
  game.start(parseInt(localStorage.getItem('all-square-level') as string));
};

const modal = new Modal();
modal.btn.addEventListener('click', () => modalClose());

if (!localStorage.getItem('all-square-level-max')) {
  localStorage['all-square-level'] = 0;
  localStorage['all-square-level-max'] = 0;
  game.start(0);
} else {
  game.start(parseInt(localStorage.getItem('all-square-level') as string));
}

document.addEventListener('keydown', e => {
  const k = e.keyCode;
  const cx = Global.current[0];
  const cy = Global.current[1];

  if (Global.gameOver) {
    e.preventDefault();
    if (k === 32) {
      modalClose();
    }
    return;
  }

  if (k === 38 && cx > 0 && Global.prevKey !== 38 && Global.board[cx - 1][cy] !== 0) {
    game.flip(cx - 1, cy, 40);
  } else if (k === 39 && cy < Global.yMax && Global.prevKey !== 39 && Global.board[cx][cy + 1] !== 0) {
    game.flip(cx, cy + 1, 37);
  } else if (k === 40 && cx < Global.xMax && Global.prevKey !== 40 && Global.board[cx + 1][cy] !== 0) {
    game.flip(cx + 1, cy, 38);
  } else if (k === 37 && cy > 0 && Global.prevKey !== 37 && Global.board[cx][cy - 1] !== 0) {
    game.flip(cx, cy - 1, 39);
  }
});
