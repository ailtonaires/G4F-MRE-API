import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorMessages } from '../utils/codesToMessages';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log('exception', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      ErrorMessages[
        Array.isArray(exception?.response?.message)
          ? exception?.response?.message[0]
          : exception?.response?.message
      ] || 'Erro interno no servidor';

    console.log('status', status);
    console.log('message', message);
    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}
