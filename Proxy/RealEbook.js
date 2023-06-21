import { Ebook } from './Ebook.js';

export class RealEbook extends Ebook {
  constructor(filename) {
    super();
    this.filename = filename;
    this.load();
  }

  load() {
    console.log('Loading the Ebook ' + this.filename);
  }

  show() {
    console.log('Showing the ebook ' + this.filename);
  }

  getFileName() {
    return this.filename;
  }
}
