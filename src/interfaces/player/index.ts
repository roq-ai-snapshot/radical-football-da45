import { PlayerProfileInterface } from 'interfaces/player-profile';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  coach_id: string;
  status: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  player_profile?: PlayerProfileInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  coach?: CoachInterface;
  _count?: {
    player_profile?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
  coach_id?: string;
  status?: string;
}
