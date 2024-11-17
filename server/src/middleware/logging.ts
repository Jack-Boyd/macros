import morgan, { StreamOptions } from 'morgan';
import { createLogger, format, transports } from 'winston';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join(__dirname, '../logs/error.log'), level: 'error' }),
    new transports.File({ filename: path.join(__dirname, '../logs/combined.log') }),
  ],
});

const stream: StreamOptions = {
  write: (message: string) => logger.info(message.trim()),
};

const morganMiddleware = morgan('combined', { stream });

export default morganMiddleware;