import { AbstractHandler } from './base-handler';
import { AuthRequest } from './auth-handler';

export class LoggingHandler extends AbstractHandler<AuthRequest> {
  public async handle(request: AuthRequest): Promise<void> {
    console.log(`Processing request for user: ${request.username}`);
    return super.handle(request);
  }
} 