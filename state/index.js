import { Brush } from './brush.js';
import { canvas } from './canvas.js';
import { Selection } from './selection.js';

const canva = new canvas();

canva.setCurrentTool(new Selection());

canva.mouseDown();
canva.mouseUp();
