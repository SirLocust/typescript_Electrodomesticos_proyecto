import { Origin } from '../types/origin';
import { Spending } from '../types/speding';
import { TypeHouseHoldAppliace } from '../types/typeHouseHoldAppliance';
import { HouseholdAppliance } from './HouseholdAppliance';

export class TV extends HouseholdAppliance {
  size: number;
  isTDT: boolean;
  constructor(
    typeHouseholdAppliance: TypeHouseHoldAppliace,
    spending: Spending,
    origin: Origin,
    size: number,
    isTDT: boolean
  ) {
    super(typeHouseholdAppliance, spending, origin);
    this.isTDT = isTDT;
    this.size = size;
  }

  public calculatePrice(): number {
    let result = super.calculatePrice();
    if (this.isSizeMore()) {
      result += this.calculatePorcentageMore(result);
    }
    if (this.isTDT) {
      result += 250_000;
    }
    return result;
  }

  private calculatePorcentageMore(basicPrice: number): number {
    return (basicPrice * 30) / 100;
  }

  private isSizeMore(): boolean {
    let result = false;
    if (this.size > 40) {
      return true;
    }
    return result;
  }
}
