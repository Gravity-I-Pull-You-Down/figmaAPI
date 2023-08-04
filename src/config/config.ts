import * as process from 'process';
import dotenv from 'dotenv';
dotenv.config()
export = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  apiSecret: process.env.API_SECRET,
};
