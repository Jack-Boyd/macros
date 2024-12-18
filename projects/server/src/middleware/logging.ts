import morgan, { StreamOptions } from 'morgan';
import { createLogger, format, transports } from 'winston';
import path from 'path';
import { __projectRoot } from '../utils/paths';

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
    new transports.File({ filename: path.join(__projectRoot, 'src/logs/error.log'), level: 'error' }),
    new transports.File({ filename: path.join(__projectRoot, 'src/logs/combined.log') }),
  ],
});

const stream: StreamOptions = {
  write: (message: string) => logger.info(message.trim()),
};

const morganMiddleware = morgan('combined', { stream });

export default morganMiddleware;