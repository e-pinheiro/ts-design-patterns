export enum StateType {
  Draft = 'Draft',
  Moderation = 'Moderation',
  Published = 'Published'
}

export interface DocumentState {
  draft(): void;
  moderate(): void;
  publish(): void;
  getStateName(): StateType;
} 