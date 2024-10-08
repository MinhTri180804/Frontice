export interface IBaseResponse<T> {
  status: number;
  code: number;
  messageEng: string;
  messageVn: string;
  data: T;
  timestamp: string;
}
