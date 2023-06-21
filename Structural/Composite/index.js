import { Group } from './Group.js';
import { Shape } from './Shape.js';

const shape1 = new Shape();
const shape2 = new Shape();

const group1 = new Group();
group1.add(shape1);
group1.add(shape2);

const shape3 = new Shape();
const shape4 = new Shape();

const group2 = new Group();
group2.add(group1);

group1.render();
group2.render();
