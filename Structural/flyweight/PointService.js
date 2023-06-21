import { Point, PointType } from './Point.js';

export class PointService {
  constructor(iconFactory) {
    this.list = [];
    this.iconFactory = iconFactory;
  }

  getPoints() {
    let point = new Point(1, 2, this.iconFactory.getPointIcon(PointType.CAFE));
    this.list.push(point);
    return this.list;
  }
}
