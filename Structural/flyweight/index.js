import { PointIconFactory } from './PointIconFactory.js';
import { PointService } from './PointService.js';

let service = new PointService(new PointIconFactory());

const points = service.getPoints();
for (let point in points) {
  points[point].draw();
}
