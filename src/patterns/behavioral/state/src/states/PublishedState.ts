import { DocumentState, StateType } from './DocumentState';
import { Document } from '../Document';
import { DraftState } from './DraftState';

export class PublishedState implements DocumentState {
  constructor(private document: Document) {}

  draft(): void {
    console.log('Moving published document back to draft');
    this.document.setState(new DraftState(this.document));
  }

  moderate(): void {
    console.log('Published document cannot be moved to moderation');
  }

  publish(): void {
    console.log('Document is already published');
  }

  getState(): string {
    return 'PUBLISHED';
  }

  getStateName(): StateType {
    return StateType.Published;
  }
} 