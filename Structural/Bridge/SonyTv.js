import { Device } from './Device.js';

export class SonyTv extends Device {
  turnOn() {
    console.log('Sony Turn On');
  }

  turnOff() {
    console.log('Sony Torn Off');
  }

  setChannel(number) {
    console.log('Sony: setChannel');
  }
}
