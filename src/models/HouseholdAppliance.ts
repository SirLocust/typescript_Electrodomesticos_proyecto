import { Origin } from '../types/origin';
import { Spending } from '../types/speding';
import { TypeHouseHoldAppliace } from '../types/typeHouseHoldAppliance';
export class HouseholdAppliance {
  typeHouseholdAppliance: TypeHouseHoldAppliace;
  spending: Spending;
  origin: Origin;
  constructor(
    typeHouseHoldAppliace: TypeHouseHoldAppliace,
    speding: Spending,
    origin: Origin
  ) {
    this.origin = origin;
    this.spending = speding;
    this.typeHouseholdAppliance = typeHouseHoldAppliace;
  }
  private priceBySpending(): number {
    let result = 0;
    if (this.spending === Spending.A) {
      result = 450_000;
    }
    if (this.spending === Spending.B) {
      result = 350_000;
    }
    if (this.spending === Spending.C) {
      result = 250_000;
    }
    return result;
  }

  private priceByOrigin(): number {
    let result = 0;
    if (this.origin === Origin.NATIONAL) {
      result = 250_000;
    }
    if (this.origin === Origin.IMPORTED) {
      result = 350_000;
    }
    return result;
  }

  public calculatePrice(): number {
    return this.priceByOrigin() + this.priceBySpending();
  }
}
