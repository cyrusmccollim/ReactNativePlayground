import DiceBlack1 from './dice-black-1.png';
import DiceBlack2 from './dice-black-2.png';
import DiceBlack3 from './dice-black-3.png';
import DiceBlack4 from './dice-black-4.png';
import DiceBlack5 from './dice-black-5.png';
import DiceBlack6 from './dice-black-6.png';

import DiceWhite1 from './dice-white-1.png';
import DiceWhite2 from './dice-white-2.png';
import DiceWhite3 from './dice-white-3.png';
import DiceWhite4 from './dice-white-4.png';
import DiceWhite5 from './dice-white-5.png';
import DiceWhite6 from './dice-white-6.png'; 

export const diceImageByName = (name: string) => {
    switch (name) {
      case 'DiceBlack1': return DiceBlack1;
      case 'DiceBlack2': return DiceBlack2;
      case 'DiceBlack3': return DiceBlack3;
      case 'DiceBlack4': return DiceBlack4;
      case 'DiceBlack5': return DiceBlack5;
      case 'DiceBlack6': return DiceBlack6;
      case 'DiceWhite1': return DiceWhite1;
      case 'DiceWhite2': return DiceWhite2;
      case 'DiceWhite3': return DiceWhite3;
      case 'DiceWhite4': return DiceWhite4;
      case 'DiceWhite5': return DiceWhite5;
      case 'DiceWhite6': return DiceWhite6;
      default: return DiceBlack1;
    }
};