// Interface for Category
export interface ICategory {
  id: string;
  title: string;
}

// Interface for ChallengePoint
export interface IChallengePoint {
  level: string;
  difficulty: string;
  points: string;
}
export interface IPreviews {
  id: string;
  url: string;
  label: string;
}
export interface ITechnical {
  id: string;
  title: string;
}
// Interface for DataChallengeResponse
export interface IDataChallengeResponse {
  id: string;
  title: string;
  category: ICategory;
  technicals: string[];
  previews: IPreviews[];
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
export interface IMeta {
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface IlistChallengeResponse {
  result: IDataChallengeResponse[];
  meta: IMeta;
}
