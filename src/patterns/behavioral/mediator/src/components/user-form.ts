import { BaseComponent } from './component';

export class UserForm extends BaseComponent {
    public submit(): void {
        console.log('User Form: Submitted');
        this.mediator.notify(this, 'form.submit');
    }

    public display(): void {
        console.log('User Form: Displaying form');
    }

    public hide(): void {
        console.log('User Form: Hiding form');
    }
} 