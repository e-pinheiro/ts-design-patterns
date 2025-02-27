import { AbstractHandler } from './base-handler';

export interface AuthRequest {
  username: string;
  password: string;
  isAuthenticated?: boolean;
}

export class AuthenticationHandler extends AbstractHandler<AuthRequest> {
  public async handle(request: AuthRequest): Promise<void> {
    // Simulate authentication check
    if (request.username === 'admin' && request.password === 'password') {
      request.isAuthenticated = true;
      console.log('Authentication successful');
      return super.handle(request);
    // return;
    }
    
    throw new Error('Authentication failed');
  }
} 