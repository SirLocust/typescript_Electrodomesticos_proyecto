import { Origin } from '../types/origin';
import { Spending } from '../types/speding';
import { TypeHouseHoldAppliace } from '../types/typeHouseHoldAppliance';
import { HouseholdAppliance } from './HouseholdAppliance';

export class Fridge extends HouseholdAppliance {
  capacity: number;

  constructor(
    typeHouseholdAppliance: TypeHouseHoldAppliace,
    spending: Spending,
    origin: Origin,
    capacity: number
  ) {
    super(typeHouseholdAppliance, spending, origin);
    this.capacity = capacity;
    // TODO Auto-generated constructor stub
  }

  public calculatePrice(): number {
    let result = super.calculatePrice();
    if (this.capacity > 120) {
      result += this.calculateMorePrice(result);
    }
    return result;
  }

  private calculateMorePrice(basicPrice: number): number {
    let result = 0;
    let capacityMore = this.capacity - 120;
    let countAddMore = capacityMore / 10;
    result = (basicPrice * 5) / 100;
    return result * countAddMore;
  }
}
