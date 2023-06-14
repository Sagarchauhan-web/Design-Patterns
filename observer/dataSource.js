import { Subject } from './Subject.js';

export class DataSource extends Subject {
  constructor(value) {
    super();
    this.value = value;
  }

  get getValue() {
    return this.value;
  }

  set setValue(value) {
    this.value = value;
    this.notifyObservers();
  }
}
