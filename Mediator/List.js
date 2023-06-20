import { UIControl } from './Uicontrol.js';

export class List extends UIControl {
  constructor(owner) {
    super(owner);
    this.selectedItem;
  }

  get getSelection() {
    return this.selectedItem;
  }

  set setSelection(selectedItem) {
    this.selectedItem = selectedItem;
    this.owner.changed(this);
  }
}
