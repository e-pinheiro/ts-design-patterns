import { DocumentState, StateType } from './DocumentState';
import { Document } from '../Document';
import { ModerationState } from './ModerationState';

export class DraftState implements DocumentState {
  constructor(private document: Document) {}

  draft(): void {
    console.log('Document is already in draft state');
  }

  moderate(): void {
    console.log('Moving document to moderation');
    this.document.setState(new ModerationState(this.document));
  }

  publish(): void {
    console.log('Cannot publish directly from draft. Need moderation first.');
  }

  getState(): string {
    return 'DRAFT';
  }

  getStateName(): StateType {
    return StateType.Draft;
  }
} 