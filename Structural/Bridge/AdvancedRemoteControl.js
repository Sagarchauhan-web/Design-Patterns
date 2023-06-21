import { RemoteControl } from './RemoteControl.js';

export class AdvancedRemoteControl extends RemoteControl {
  constructor(device) {
    super();
    this.device = device;
  }
  setChannel(number) {
    this.device.setChannel(2);
  }
}
