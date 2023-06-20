import { Message } from './message.js';
import { NotificationServer } from './Notification.js';

export class NotificationService {
  send(message, target) {
    let server = new NotificationServer();
    let connection = server.connect('ip');
    let authToken = server.authernticate('AppId', 'key');
    let message = new Message(message);

    server.send(authToken, message, target);
    connection.disconnect();
  }
}
