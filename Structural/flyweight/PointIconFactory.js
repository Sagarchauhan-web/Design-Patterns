import { PointIcon } from './PointIcon.js';

export class PointIconFactory {
  constructor() {
    this.icons = {};
  }

  getPointIcon(type) {
    if (!this.icons[type]) {
      let icon = new PointIcon(type, null);
      this.icons[type] = icon;
    }

    return this.icons[type];
  }
}
