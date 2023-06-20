import { UIControl } from './Uicontrol.js';

export class TextBox extends UIControl {
  constructor(owner) {
    super(owner);
    this.content;
  }

  get getContent() {
    return this.content;
  }

  set setContent(content) {
    this.content = content;
    this.owner.changed(this);
  }
}
