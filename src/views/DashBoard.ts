import { TypeHouseHoldAppliace } from '../types/typeHouseHoldAppliance';

export class DashBoard {
  public requireTypeHouseholdAppliance(): TypeHouseHoldAppliace {
    let userInput = prompt('ingrese Basico o TV o Fridge')?.toLowerCase;
    // if(userInput){
    if (userInput?.toString() === 'a') {
      return TypeHouseHoldAppliace.BASIC;
    }
    if (userInput?.toString() === 'b') {
      return TypeHouseHoldAppliace.TV;
    }
    return TypeHouseHoldAppliace.FRIDGE;

    // }
  }
}
