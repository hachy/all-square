export class Modal {
  static modal: HTMLDivElement;
  modalBtn: HTMLButtonElement;

  constructor() {
    Modal.modal = document.getElementById('modal') as HTMLDivElement;
    this.modalBtn = document.getElementById('modal-btn') as HTMLButtonElement;
  }

  get btn(): HTMLButtonElement {
    return this.modalBtn;
  }

  static show(): void {
    this.modal.classList.add('show');
  }

  static close(): void {
    this.modal.classList.remove('show');
  }
}
