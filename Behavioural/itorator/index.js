import { BrowserHistory } from './browserHistory.js';

const browserHistory = new BrowserHistory();

browserHistory.push('a');
browserHistory.push('b');
browserHistory.push('c');

const itorator = browserHistory.getItorator();

while (itorator.hasNext()) {
  const current = itorator.current();
  console.log(current);
  itorator.next();
}
