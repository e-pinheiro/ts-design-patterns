export interface Handler<T> {
  setNext(handler: Handler<T>): Handler<T>;
  handle(request: T): Promise<void>;
}

export abstract class AbstractHandler<T> implements Handler<T> {
  private nextHandler: Handler<T> | null = null;

  public setNext(handler: Handler<T>): Handler<T> {
    this.nextHandler = handler;
    return handler;
  }

  public async handle(request: T): Promise<void> {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return;
  }
} 