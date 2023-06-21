import { EbookProxy } from './EbookProxy.js';
import { Library } from './Library.js';

let library = new Library();
let fileNames = ['a', 'b', 'c'];

for (let file in fileNames) {
  library.add(new EbookProxy(fileNames[file]));
}

library.openEbook('a');
