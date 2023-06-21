import { BlackAndWhite } from './blackAndWhite.js';
import { Blur } from './blur.js';
import { StoreImage } from './compressor.js';
import { JpegCompressor } from './jpegCompressor.js';
import { PngCompressor } from './png.js';

const storeImage = new StoreImage(new JpegCompressor(), new BlackAndWhite());
storeImage.store();

const storeImage2 = new StoreImage(new PngCompressor(), new Blur());
storeImage2.store();
