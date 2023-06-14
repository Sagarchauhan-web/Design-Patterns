import { Observer } from './observer.js';

export class SpreadSheet extends Observer {
  update() {
    console.log('SpreadSheet Got Notified');
  }
}
