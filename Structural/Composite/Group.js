export class Group {
  constructor() {
    this.list = [];
  }

  add(shape) {
    this.list.push(shape);
  }

  render() {
    for (let list in this.list) this.list[list].render();
  }

  move() {
    for (let list in this.list) list.move();
  }
}
