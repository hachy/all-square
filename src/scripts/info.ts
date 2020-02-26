import { data } from './data';
import { Global } from './global';
import { Modal } from './modal';
import { wait } from './util';

export class Info {
  stageTxt: HTMLSpanElement;
  stageN: number;
  static moveTxt: HTMLSpanElement;
  static progress: HTMLDivElement;
  static move: number;
  static moveMax: number;

  constructor(n: number) {
    this.stageTxt = document.getElementById('stage') as HTMLSpanElement;
    this.stageN = n;
    Info.moveTxt = document.getElementById('move') as HTMLSpanElement;
    Info.progress = document.getElementById('progress-bar') as HTMLDivElement;
    Info.move = data[n].move;
    Info.moveMax = data[n].move;
    this.render();
  }

  render(): void {
    this.stageTxt.textContent = `${this.stageN + 1}`;
    Info.moveTxt.textContent = `${Info.move}`;
  }

  static countMove(): void {
    if (this.move <= 0) {
      Modal.show();
      Global.gameOver = true;
    } else {
      this.move--;
    }
    this.percent();
    this.moveTxt.textContent = `${this.move}`;
  }

  static percent(first = false): void {
    if (first) {
      (async (): Promise<void> => {
        this.progress.setAttribute('aria-valuenow', `${0}`);
        this.progress.setAttribute('style', 'width: 0%');
        this.progress.style.transition = 'none';
        await wait(100);
        this.progress.setAttribute('aria-valuenow', `${100}`);
        this.progress.setAttribute('style', 'width: 100%');
      })();
    } else {
      const p = Math.floor((this.move / this.moveMax) * 100);
      this.progress.setAttribute('aria-valuenow', `${p}`);
      this.progress.setAttribute('style', `width: ${p}%`);
    }
  }
}
