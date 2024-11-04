import { IAccountEntity } from '../account';
import { ILevelEntity } from '../level';

export interface IProfileEntity {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  accountId: string;
  accountResponse: IAccountEntity;
  levelId: string;
  level: string;
  isPremium: number;
  urlGithub: string | null;
  score: number;
  urlCV: string | null;
  urlPortfolio: string | null;
  urlCodepen: string | null;
  urlStackOverflow: string | null;
  urlLinkedIn: string | null;
  totalJoinedChallenge: number;
  totalSubmittedChallenge: number;
  nextLevel: ILevelEntity;
}
