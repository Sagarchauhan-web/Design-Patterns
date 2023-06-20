import { CloudStream } from './cloudStream.js';
import { CompressCloudStream } from './compressCloudStream.js';
import { EncryptedCloudStream } from './encryptedCloudStream.js';

// Prefer Composition Over Inheritance in most casses

let cloudStream = new EncryptedCloudStream(
  new CompressCloudStream(new CloudStream()),
);
cloudStream.write('sdfhj');
