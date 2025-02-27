import { AuthenticationHandler } from './handlers/auth-handler';
import { LoggingHandler } from './handlers/logging-handler';

class Main {

  public async start(): Promise<void> {
    // Create handlers
    const authHandler = new AuthenticationHandler();
    const loggingHandler = new LoggingHandler();

    // Chain handlers
    authHandler.setNext(loggingHandler);

    try {
      // Process a request
      await authHandler.handle({
        username: 'admin',
        password: 'password'
      });
      
      console.log('Request processing completed');
    } catch (error) {
      console.error('Error processing request:', error);
    }
  }
}

const main = new Main();
main.start().catch(console.error); 