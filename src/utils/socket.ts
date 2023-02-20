import { io } from 'socket.io-client';
import config from './config';
import tokenHelper from './tokenHelper';

let socket;
const token = tokenHelper.token.get();

if (token) {
  socket = io(config.configSocket.apiBaseUrl, {
    query: { token },
  });
} else {
  socket = io(config.configSocket.apiBaseUrl);
}

export default {
  socket,
};
