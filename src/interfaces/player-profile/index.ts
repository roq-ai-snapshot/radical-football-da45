import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface PlayerProfileInterface {
  id?: string;
  player_id: string;
  name: string;
  value: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  player?: PlayerInterface;
  _count?: {};
}

export interface PlayerProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  name?: string;
  value?: string;
}
