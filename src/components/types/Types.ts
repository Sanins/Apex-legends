/* eslint-disable camelcase */
export type ApexData = 'legends' | 'weapons' |  'items' |  'equipment' | 'consumables' | 'grenades' | 'attachments';

export interface WeaponListProps {
  name: string;
  damage: number;
  rate_of_fire: number;
  damage_per_second: number;
  headshot_damage: number;
  legshot_damage: number;
  damage_per_magazine: number;
  ammo_capacity: number;
  projectile_speed: number;
  tactical_reload: number;
  empty_reload: number;
  draw_time: number;
  holster_time: number;
  average_dps: number;
  headshot_dps: number;
  legshot_dps: number;
}

export interface LegendListProps {
  name: string;
  abilities: LegendListabilities;
}

export interface LegendListabilities extends LegendListProps {
  ability_1: {
    type: string;
    name: string,
    description: string,
    secondary_data: {
      damage: string,
      duration: string,
      radius: string,
      cooldown: string,
      charges: number
    }
  }
  ability_2: {
    type: string,
    name: string,
    description: string,
    secondary_data: {
      movement: string,
      duration: string
    }
  }
  ability_3: {
    type: string,
    name: string,
    description: string,
    secondary_data: {
      damage: string,
      charge_time: string,
      radius: string,
      slow: string,
      detonation_time: string,
      duration: string
    }
  }
}