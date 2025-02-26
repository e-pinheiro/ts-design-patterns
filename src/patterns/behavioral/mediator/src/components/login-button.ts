import { BaseComponent } from './component';

export class LoginButton extends BaseComponent {
    public click(): void {
        console.log('Login Button: Clicked');
        this.mediator.notify(this, 'login.click');
    }
} 