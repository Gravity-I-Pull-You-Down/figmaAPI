import * as process from 'process';
import dotenv from 'dotenv';
dotenv.config();
export = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8001,
  apiSecret: process.env.API_SECRET || 'asdfqwerzxcvwqerasdf',
};
