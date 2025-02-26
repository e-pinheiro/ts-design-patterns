import { UserForm } from './user-form';
import { AuthMediator } from '../mediator/auth-mediator';

describe('UserForm', () => {
  let userForm: UserForm;
  let mediator: AuthMediator;

  beforeEach(() => {
    userForm = new UserForm(null!);
    mediator = {
      notify: jest.fn(),
      setMediator: jest.fn()
    } as unknown as AuthMediator;
    userForm.setMediator(mediator);
  });

  it('should notify mediator when submitted', () => {
    userForm.submit();

    expect(mediator.notify).toHaveBeenCalledWith(userForm, 'form.submit');
  });

  it('should store mediator reference when set', () => {
    const newMediator = {} as AuthMediator;

    userForm.setMediator(newMediator);

    expect(userForm['mediator']).toBe(newMediator);
  });


}); 