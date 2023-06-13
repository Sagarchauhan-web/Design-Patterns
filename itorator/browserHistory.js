export class BrowserHistory {
  constructor() {
    this.history = [];
  }

  push(item) {
    this.history.push(item);
  }

  pop() {
    const item = this.history.pop();

    return item;
  }

  getItorator() {
    return new Itorator(this.history);
  }
}

class Itorator {
  constructor(history) {
    this.history = history;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.history.length;
  }

  current() {
    return this.history[this.index];
  }

  next() {
    this.index++;
  }
}
