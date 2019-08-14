export interface LegendListProps {
  name: string;
  function: string;
  lore: string;
  about: {
    real_name: string;
    age: number;
  };
  abilities: LegendListabilities;
  badges: [{
    name: string;
    desc: string;
  }]
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