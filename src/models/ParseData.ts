import { Origin } from '../types/origin';
import { Spending } from '../types/speding';
import { TypeHouseHoldAppliace } from '../types/typeHouseHoldAppliance';

export class ParseData {
  public requireTypeHouseholdAppliance(
    userInput: string
  ): TypeHouseHoldAppliace {
    if (userInput?.toString() === 'BASIC') {
      return TypeHouseHoldAppliace.BASIC;
    }
    if (userInput?.toString() === 'TV') {
      return TypeHouseHoldAppliace.TV;
    }
    return TypeHouseHoldAppliace.FRIDGE;
  }
  public requireSpeding(userInput: string): Spending {
    if (userInput?.toString() === 'A') {
      return Spending.A;
    }
    if (userInput?.toString() === 'B') {
      return Spending.B;
    }

    return Spending.C;
  }
  public requireOrigin(userInput: string): Origin {
    if (userInput === 'NATIONAL') {
      return Origin.NATIONAL;
    }

    return Origin.IMPORTED;
  }

  public requireStringTypeHousehold(
    typeHouseHoldAppliace: TypeHouseHoldAppliace
  ): string {
    if (typeHouseHoldAppliace === TypeHouseHoldAppliace.BASIC) {
      return 'BASICO';
    }
    if (typeHouseHoldAppliace === TypeHouseHoldAppliace.TV) {
      return 'TELEVISOR';
    }
    return 'NEVERA';
  }
  public requireStringSpeding(speding: Spending): string {
    if (speding === Spending.A) {
      return 'A';
    }
    if (speding === Spending.B) {
      return 'B';
    }

    return 'C';
  }
  public requireStringOrigin(origin: Origin): string {
    if (origin === Origin.NATIONAL) {
      return 'NACIONAL';
    }

    return 'IMPORTADO';
  }
}
