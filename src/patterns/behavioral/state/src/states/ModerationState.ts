import { DocumentState, StateType } from './DocumentState';
import { Document } from "../Document";
import { PublishedState } from "./PublishedState";
import { DraftState } from "./DraftState";

export class ModerationState implements DocumentState {
  constructor(private document: Document) {}

  draft(): void {
    console.log('Moving document back to draft');
    this.document.setState(new DraftState(this.document));
  }

  moderate(): void {
    console.log('Document is already in moderation');
  }

  publish(): void {
    console.log('Document approved, publishing');
    this.document.setState(new PublishedState(this.document));
  }

  getState(): string {
    return 'MODERATION';
  }

  getStateName(): StateType {
    return StateType.Moderation;
  }
} 