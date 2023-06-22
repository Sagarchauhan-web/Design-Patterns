export class ConfigManager {
  static instance = new this();

  constructor() {
    this.settings = new Map();
  }

  set(key, value) {
    this.settings.set(key, value);
  }

  get(key) {
    return this.settings.get(key);
  }

  static getInstance() {
    return this.instance;
  }
}
