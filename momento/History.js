export class History {
  constructor() {
    this.states = [];
  }

  push(state) {
    this.states.push(state);
  }

  pop() {
    const lastIndex = this.states.length - 1;

    let lastState = this.states[lastIndex];
    this.states.pop();

    return lastState;
  }

  get statesGet() {
    return this.states;
  }
}
