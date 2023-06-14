import { CustomerService } from '../customerService.js';
import { CustomerServiceCommand } from '../customerServiceCommand.js';
import { Button } from './Button.js';

const service = new CustomerService();
const command = new CustomerServiceCommand(service);
const button = new Button('Type', command);

button.onClick();
