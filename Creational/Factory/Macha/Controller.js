import { MatchaViewEngine } from './MachaViewEngine.js';

export class Controller {
  render(viewName, context) {
    let engine = this.createViewEngine();
    let html = engine.render(viewName, context);
    console.log(html);
  }

  createViewEngine() {
    return new MatchaViewEngine();
  }
}
