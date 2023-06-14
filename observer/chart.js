import { Observer } from './observer.js';

export class chart extends Observer {
  update() {
    console.log('Chart Got notified');
  }
}
