import { ViewEngine } from '../ViewEngine.js';

export class SharpViewEngine extends ViewEngine {
  render(viewName, context) {
    return 'View Rendered by sharp';
  }
}
