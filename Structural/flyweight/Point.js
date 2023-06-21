export const PointType = {
  HOSPITAL: 'HOSPITAL',
  CAFE: 'CAFE',
  RESTAURANT: 'RESTAURANT',
};

export class Point {
  constructor(x, y, pointIcon) {
    this.x = x;
    this.y = y;
    this.pointIcon = pointIcon;
  }

  draw() {
    console.log(`${this.pointIcon.getType} at (${this.x}, ${this.y})`);
  }
}
