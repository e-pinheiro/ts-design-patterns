import { TV } from './devices/tv';
import { Radio } from './devices/radio';
import { BasicRemote } from './remotes/basic-remote';

class Main {

  public async start(): Promise<void> {
    const tv = new TV();
    const radio = new Radio();

    const tvRemote = new BasicRemote(tv);
    const radioRemote = new BasicRemote(radio);

    // Test TV
    tvRemote.power();
    tvRemote.volumeUp();
    tvRemote.channelUp();

    // Test Radio
    radioRemote.power();
    radioRemote.volumeDown();
    radioRemote.channelDown();
  }
}

const main = new Main();
main.start().catch(console.error); 