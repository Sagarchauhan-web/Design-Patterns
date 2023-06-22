import { Controller } from '../Macha/Controller.js';
import { SharpViewEngine } from './sharpViewEngine.js';

export class SharpController extends Controller {
  createViewEngine() {
    return new SharpViewEngine();
  }
}
