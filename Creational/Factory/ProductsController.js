import { Controller } from './Macha/Controller.js';
import { SharpController } from './Sharp/SharpController.js';

export class ProductsController extends SharpController {
  listProducts() {
    // Get Products From a Database

    let context = new Map();
    // context.put(products)

    this.render('Products.html', context);
  }
}
