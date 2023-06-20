import { CloudStream } from './cloudStream.js';
// imagine extend as interface here
export class CompressCloudStream extends CloudStream {
  constructor(stream) {
    super();
    this.stream = stream;
  }

  write(data) {
    let compress = this.compress(data);
    this.stream.write(compress);
  }

  compress(data) {
    return data.substring(0, 3);
  }
}
