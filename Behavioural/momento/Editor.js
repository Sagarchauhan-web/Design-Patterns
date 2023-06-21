import { EditorState } from './EditorState.js';

export class Editor {
  constructor() {
    this.content;
  }

  createState() {
    return new EditorState(this.content);
  }

  restore(state) {
    this.content = state.getContent;
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }
}
