import { ISubject } from '../interfaces/subject.interface';
import { RealSubject } from './real-subject';

export class Proxy implements ISubject {
  private realSubject: RealSubject | null = null;
  private cache: any = null;

  public async request(): Promise<string> {
    if (!this.realSubject) {
      console.log('Creating new RealSubject instance');
      this.realSubject = new RealSubject();
    }

    if (this.cache === null) {
      console.log('Executing request through RealSubject');
      this.cache = await this.realSubject.request();
    }

    return this.cache;
  }

  public clearCache(): void {
    // Clear both the cache and the realSubject instance
    this.cache = null;
    this.realSubject = null;
  }
} 