import { Post } from './post';
import { User } from './user';

export interface Game {
  subscribers: string[];
  posts: Post[];
  _id: string;
  gameName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
