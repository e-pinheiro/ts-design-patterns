import { AuthMediator } from './auth-mediator';
import { LoginButton } from '../components/login-button';
import { UserForm } from '../components/user-form';

describe('AuthMediator', () => {
  let mediator: AuthMediator;
  let loginButton: LoginButton;
  let userForm: UserForm;

  beforeEach(() => {
    loginButton = new LoginButton(null!);
    userForm = new UserForm(null!);
    mediator = new AuthMediator(loginButton, userForm);
  });
  it('should set mediator for both components when created', () => {
    expect((loginButton as any).mediator).toBe(mediator);
    expect((userForm as any).mediator).toBe(mediator);
  });



// it('should notify form when login button is clicked', () => {
//     const showSpy = jest.spyOn(userForm as any, 'User Form: Displaying form');
    
//     loginButton.click();
    
//     expect(showSpy).toHaveBeenCalled();
//   });




  it('should handle form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    userForm.submit();
    
    expect(consoleSpy).toHaveBeenCalledWith('User Form: Submitted');
  });
}); 