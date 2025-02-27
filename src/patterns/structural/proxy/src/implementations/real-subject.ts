import { ISubject } from '../interfaces/subject.interface';

export class RealSubject implements ISubject {
  public async request(): Promise<string> {
    // Simulating some heavy operation
    return 'Response from RealSubject';
  }
} 