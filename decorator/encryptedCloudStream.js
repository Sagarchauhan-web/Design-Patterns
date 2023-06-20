import { CloudStream } from './cloudStream.js';

export class EncryptedCloudStream extends CloudStream {
  constructor(stream) {
    super();
    this.stream = stream;
  }

  write(data) {
    let encrypt = this.encrypt(data);
    this.stream.write(encrypt);
  }

  encrypt(data) {
    return '(*&^^)()(*$##';
  }
}
