import { Editor } from './Editor.js';
import { History } from './History.js';

const editor = new Editor();
const history = new History();

editor.setContent('a');
history.push(editor.createState());

editor.setContent('b');
history.push(editor.createState());

editor.setContent('c');
editor.restore(history.pop());

console.log(editor.getContent());
