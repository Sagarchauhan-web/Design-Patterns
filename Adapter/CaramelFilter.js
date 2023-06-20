import { Fileter } from './Filter.js';

export class CaramelFilter extends Fileter {
  constructor(caramel) {
    super();
    this.caramel = caramel;
  }

  apply(image) {
    this.caramel.render(image);
  }
}
