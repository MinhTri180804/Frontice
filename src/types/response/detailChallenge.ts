export interface IChallengeDetailResponse {
  id: string;
  title: string;
  description: string;
  openDate: string; // ISO date string
  closeDate: string; // ISO date string
  statusChallenge: 'PROCESSING' | 'COMPLETED' | 'PENDING' | 'CANCELED'; // Cần biết rõ các giá trị có thể hỏi BE
  typeChallenge: 'FREE' | 'PREMIUM' | 'EXCLUSIVE'; // Cần biết rõ các giá trị có thể
  price: number;
  message: string;
  banner: string;
  assets: string;
  isHidden: boolean | null;
  category: ICategory;
  technicals: ITechnical[];
  challengePoint: IChallengePoint;
  previews: IPreview[];
  resource: IResource;
}

export interface ICategory {
  id: string;
  title: string;
}

export interface ITechnical {
  id: string;
  title: string;
}

export interface IChallengePoint {
  level: 'newbie' | 'intermediate' | 'advanced' | 'expert'; // Các giá trị khác có thể
  difficulty: 'easy' | 'medium' | 'hard'; // Các giá trị khác có thể
  points: number;
}

export interface IPreview {
  id: string;
  url: string;
  label: string;
}

export interface IResource {
  assetsUrl: string;
  assetsName: string;
  assetsSize: number;
  figmaUrl: string;
  figmaName: string;
  figmaSize: number;
}
