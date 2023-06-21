import { Carramel } from './avaFilters/Caramel.js';
import { CaramelFilter } from './CaramelFilter.js';
import { Image } from './Image.js';
import { ImageView } from './ImageView.js';
import { VividFilter } from './VividFilter.js';

let imageView = new ImageView(new Image());
imageView.apply(new CaramelFilter(new Carramel()));
