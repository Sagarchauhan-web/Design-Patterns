export class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removerObserver(observer) {
    const observerToRemove = this.observers.findIndex((i) => i === observer);
    this.observers.splice(observerToRemove, 1);
  }

  notifyObservers() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update();
    }
  }
}
