import { IBaseResponse } from '../base';

// Interface for Category
interface ICategory {
  id: string;
  title: string;
}

// Interface for ChallengePoint
interface IChallengePoint {
  level: string;
  difficulty: string;
  point: string;
}

// Interface for DataChallengeResponse
interface IDataChallengeResponse {
  id: string;
  title: string;
  category: ICategory;
  technicals: string[];
  previews: string[];
  challengePoint: IChallengePoint;
  openDate: string;
  closeDate: string;
  typeChallenge: string;
  description: string;
  statusChallenge: string;
  price: number;
  brief: string;
  assets: string;
  message: string;
  hidden: boolean;
  createAt: number;
  updateAt: number | null;
}
interface IMeta {
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface IlistChallengeResponse
  extends IBaseResponse<IDataChallengeResponse> {
  meta: IMeta;
}
