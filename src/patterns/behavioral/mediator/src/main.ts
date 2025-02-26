import { LoginButton } from './components/login-button';
import { UserForm } from './components/user-form';
import { AuthMediator } from './mediator/auth-mediator';

class Main {

  public async start(): Promise<void> {
    // Create components
    const loginButton = new LoginButton(null!);
    const userForm = new UserForm(null!);

    // Create mediator and pass it to components
    new AuthMediator(loginButton, userForm);

    // Simulate user interactions
    console.log('Client triggers operation login button click.');
    loginButton.click();

    console.log('\nClient triggers operation form submit.');
    userForm.submit();
  }
}

const main = new Main();
main.start().catch(console.error); 