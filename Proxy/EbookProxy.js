import { Ebook } from './Ebook.js';
import { RealEbook } from './RealEbook.js';

export class EbookProxy extends Ebook {
  constructor(fileName) {
    super();
    this.fileName = fileName;
    this.ebook = null;
  }

  show() {
    if (this.ebookebook == null) {
      this.ebook = new RealEbook(this.fileName);
    }

    this.ebook.show();
  }

  getFileName() {
    return this.fileName;
  }
}
