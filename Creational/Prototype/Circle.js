import { Component } from './Component.js';

export class Circle extends Component {
  constructor() {
    this.radius;
  }

  set setRadius(radius) {
    this.radius = radius;
  }

  get getRadius() {
    this.radius;
  }

  clone() {
    let newCircle = new Circle();
    newCircle.setRadius(this.radius);
    return newCircle;
  }

  render() {
    console.log('Render  Circle');
  }
}
