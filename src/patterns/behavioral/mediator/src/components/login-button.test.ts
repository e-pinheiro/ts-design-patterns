import { LoginButton } from './login-button';
import { AuthMediator } from '../mediator/auth-mediator';

describe('LoginButton', () => {
  let loginButton: LoginButton;
  let mediator: AuthMediator;

  beforeEach(() => {
    loginButton = new LoginButton(null!);
    mediator = {
      notify: jest.fn(),
    } as unknown as AuthMediator;
    loginButton['mediator'] = mediator;
  });

  it('should notify mediator when clicked', () => {
    loginButton.click();
    
    expect(mediator.notify).toHaveBeenCalledWith(loginButton, 'login.click');
  });

  it('should store mediator reference when set', () => {
    const newMediator = {} as AuthMediator;
    
    loginButton['mediator'] = newMediator;
    
    expect(loginButton['mediator']).toBe(newMediator);
  });
}); 