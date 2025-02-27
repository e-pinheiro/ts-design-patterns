import { Proxy } from './implementations/proxy';

class Main {
  private proxy: Proxy;

  constructor() {
    this.proxy = new Proxy();
  }

  public async start(): Promise<void> {
    // First request - will create RealSubject and cache result
    const result1 = await this.proxy.request();
    console.log('First request:', result1);

    // Second request - will use cached result
    const result2 = await this.proxy.request();
    console.log('Second request:', result2);

    // Clear cache and make new request
    this.proxy.clearCache();
    const result3 = await this.proxy.request();
    console.log('Third request:', result3);
  }
}

const main = new Main();
main.start().catch(console.error); 