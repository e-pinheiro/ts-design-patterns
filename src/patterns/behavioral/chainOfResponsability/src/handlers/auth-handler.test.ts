import { AuthenticationHandler } from './auth-handler';
import { LoggingHandler } from './logging-handler';

interface AuthRequest {
  username: string;
  password: string;
  isAuthenticated?: boolean;
}

describe('AuthenticationHandler', () => {
  let authHandler: AuthenticationHandler;
  let loggingHandler: LoggingHandler;

  beforeEach(() => {
    authHandler = new AuthenticationHandler();
    loggingHandler = new LoggingHandler();
    authHandler.setNext(loggingHandler);
  });

  it('should authenticate valid credentials', async () => {
    const request: AuthRequest = {
      username: 'admin',
      password: 'password'
    };

    await expect(authHandler.handle(request)).resolves.not.toThrow();
    expect(request.isAuthenticated).toBe(true);
  });

  it('should reject invalid credentials', async () => {
    const request: AuthRequest = {
      username: 'wrong',
      password: 'wrong'
    };

    await expect(authHandler.handle(request)).rejects.toThrow('Authentication failed');
    expect(request.isAuthenticated).toBeUndefined();
  });
}); 