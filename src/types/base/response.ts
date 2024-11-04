export interface IBaseResponse<T> {
  status: number;
  code: number;
  messageEng: string;
  messageVN: string;
  data: T;
  timestamp: string;
}
