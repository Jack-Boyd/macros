import './dotenv';

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 4000,
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
  EDAMAM_APP_ID: process.env.EDAMAM_APP_ID || '',
  EDAMAM_APP_KEY: process.env.EDAMAM_APP_KEY || '',
};

export default env;
