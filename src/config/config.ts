import * as process from 'process';
import dotenv from 'dotenv';

dotenv.config();
const exportObject = {
  env: 'development',
  port: 8001,
  apiSecret: 'asdfqwerzxcvwqerasdf',
};

export = exportObject;
