import { ViewEngine } from '../ViewEngine.js';

export class MatchaViewEngine extends ViewEngine {
  render(viewName, context) {
    return 'View Rendered by Matcha';
  }
}
