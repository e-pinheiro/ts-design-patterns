import { Proxy } from '../proxy';
import { RealSubject } from '../real-subject';

// Mock RealSubject
jest.mock('../real-subject');

describe('Proxy', () => {
  let proxy: Proxy;
  
  beforeEach(() => {
    jest.clearAllMocks();
    proxy = new Proxy();
    (RealSubject as jest.Mock).mockClear();
  });

  it('should create RealSubject only when first request is made', async () => {
    expect(RealSubject).not.toHaveBeenCalled();
    
    await proxy.request();
    
    expect(RealSubject).toHaveBeenCalledTimes(1);
  });

  it('should cache results and not create new RealSubject instances', async () => {
    await proxy.request();
    await proxy.request();
    
    expect(RealSubject).toHaveBeenCalledTimes(1);
  });

  it('should clear cache when clearCache is called', async () => {
    await proxy.request();
    proxy.clearCache();
    await proxy.request();
    
    expect(RealSubject).toHaveBeenCalledTimes(2);
  });
}); 