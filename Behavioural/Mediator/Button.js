import { UIControl } from './Uicontrol.js';

export class Button extends UIControl {
  constructor(owner) {
    super(owner);
    this.isEnabled = false;
  }

  get getButton() {
    return this.isEnabled;
  }

  set setEnabled(isEnabled) {
    this.isEnabled = isEnabled;
    this.owner.changed(this);
  }
}
