import { Stream } from './stream.js';

export class CloudStream extends Stream {
  write(data) {
    console.log('Storing ::' + data);
  }
}
