import { ProcessManager } from "./ConfigurationManager";

class Main {

  public async start(): Promise<void> {

    const configManager = ProcessManager.getInstance();
    const configManager2 = ProcessManager.getInstance();

    console.log(`ProcessManager 1: ${configManager.getProcessId()}`);
    console.log(`ProcessManager 2: ${configManager2.getProcessId()}`);
    console.log('Only one instance of ProcessManager is created.');
  }
}

const main = new Main();
main.start().catch(console.error); 