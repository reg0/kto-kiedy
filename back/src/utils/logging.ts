import { Logger, pino } from 'pino';

export function getLogger(name: string, level: string = 'info'): Logger {
  return pino({
    name,
    level,
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }});
}