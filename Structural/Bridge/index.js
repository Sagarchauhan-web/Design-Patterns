import { AdvancedRemoteControl } from './AdvancedRemoteControl.js';
import { RemoteControl } from './RemoteControl.js';
import { SonyTv } from './SonyTv.js';

let remoteControl = new AdvancedRemoteControl(new SonyTv());
remoteControl.setChannel(6);
