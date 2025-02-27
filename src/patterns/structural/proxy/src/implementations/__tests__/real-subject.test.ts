import { RealSubject } from '../real-subject';

describe('RealSubject', () => {
  let realSubject: RealSubject;

  beforeEach(() => {
    realSubject = new RealSubject();
  });

  it('should return expected response', async () => {
    const response = await realSubject.request();
    expect(response).toBe('Response from RealSubject');
  });
}); 