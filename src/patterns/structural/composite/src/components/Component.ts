export interface Component {
  execute(): Promise<void>;
  add?(component: Component): void;
  remove?(component: Component): void;
  getChildren?(): Component[];
} 