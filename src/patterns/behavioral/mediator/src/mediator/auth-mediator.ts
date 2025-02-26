import { Mediator } from './mediator.interface';
import { LoginButton } from '../components/login-button';
import { UserForm } from '../components/user-form';

export class AuthMediator implements Mediator {
    private loginButton: LoginButton;
    private userForm: UserForm;

    constructor(loginButton: LoginButton, userForm: UserForm) {
        this.loginButton = loginButton;
        this.userForm = userForm;

        this.loginButton.setMediator(this);
        this.userForm.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'login.click') {
            console.log('Mediator reacts on login.click and triggers following operations:');
            this.userForm.display();
        }

        if (event === 'form.submit') {
            console.log('Mediator reacts on form.submit and triggers following operations:');
            this.userForm.hide();
        }
    }
} 