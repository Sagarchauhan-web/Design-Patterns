import { command } from './fx/command.js';
// actialy implements as command is abstract class
export class CustomerServiceCommand extends command {
  constructor(service) {
    super();
    this.service = service;
  }

  execute() {
    this.service.execute();
  }
}
