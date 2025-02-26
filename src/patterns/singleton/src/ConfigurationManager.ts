export class ProcessManager {
  private static instance: ProcessManager;
  private processId: string;

  private constructor() {
    this.processId = new Date().toISOString()
  }

  public static getInstance(): ProcessManager {
    if (!ProcessManager.instance) {
      ProcessManager.instance = new ProcessManager();
    }
    return ProcessManager.instance;
  }


  public getProcessId(): string {
    return this.processId
  }


} 