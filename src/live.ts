export const enum DataUpdateAction {
  Add = 'add',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Update = 'update',
  Set = 'set',
}

type ToastSeverityType = 'success' | 'info' | 'warn' | 'error';

interface ToastMessage {
  severity?: ToastSeverityType;
  summary?: string;
  detail?: string;
  content?: string;
  closable?: boolean;
  sticky?: boolean;
  life?: number;
  className?: string;
  style?: object;
  contentClassName?: string;
  contentStyle?: object;
}

export interface DataUpdate {
  action: DataUpdateAction;
  store: string;
  data: any;
  notification?: ToastMessage;
}