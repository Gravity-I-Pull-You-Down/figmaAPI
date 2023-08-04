import { Server } from 'http';
import app from '@app';
import config from '@config/config';
import logger from '@core/utils/logger';
import errorHandler from 'core/utils/errorHandler';
import fs from 'fs';
import https from 'https';

const { port } = config;

// const httpsOptions = {
//   key: fs.readFileSync(
//     '/home/gravity/Documents/projects/node-express-template.ts/conf/key.pem',
//   ),
//   cert: fs.readFileSync(
//     '/home/gravity/Documents/projects/node-express-template.ts/conf/cert.pem',
//   ),
// };
// const server: Server = https.createServer(httpsOptions, app).listen(port);
// console.log(server.address());
const server: Server = app.listen(port, (): void => {
  logger.info(`Application listens on PORT: ${port}`);
});

const unexpectedErrorHandler = (error: Error): void => {
  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    console.log(error);
  }
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', (reason: Error) => {
  throw reason;
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
