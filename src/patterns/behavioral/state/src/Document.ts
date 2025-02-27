import { DocumentState } from './states/DocumentState';
import { DraftState } from './states/DraftState';
import { StateType } from './states/DocumentState';

export class Document {
  private state: DocumentState;
  private content: string;

  constructor(content: string) {
    this.content = content;
    // Initial state is Draft
    this.state = new DraftState(this);
  }

  setState(state: DocumentState): void {
    this.state = state;
  }

  draft(): void {
    this.state.draft();
  }

  moderate(): void {
    this.state.moderate();
  }

  publish(): void {
    this.state.publish();
  }

  getState(): StateType {
    return this.state.getStateName();
  }

  getContent(): string {
    return this.content;
  }
} 