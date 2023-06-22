import { ConfigManager } from './ConfigManager.js';

let manager = ConfigManager.getInstance();
manager.set('name', 'mosh');

let other = ConfigManager.getInstance();
console.log(other.get('name'));
