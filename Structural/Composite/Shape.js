import { Component } from './Component.js';

export class Shape extends Component {
  render() {
    console.log('Render Shape');
  }

  move() {
    console.log('Move Shape');
  }
}
