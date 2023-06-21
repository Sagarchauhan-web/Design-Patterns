import { AuthToken } from './AuthToken.js';
import { Connection } from './Connection.js';

export class NotificationServer {
  // connect() => connection
  // autherticate(appId, key) => AuthToken
  // send(authToken, message, target)
  //conn.disconnect()

  connect(ipAddress) {
    return new Connection();
  }

  authernticate(appId, key) {
    return new AuthToken();
  }

  send(authToken, message, target) {
    console.log('Sending a message');
  }
}
