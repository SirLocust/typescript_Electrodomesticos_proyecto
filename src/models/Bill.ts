import { HouseholdAppliance } from './HouseholdAppliance';

export class Bill {
  public generateTotal(list: HouseholdAppliance[]) {
    let result = 0;
    for (const item of list) {
      result += item.calculatePrice();
    }
    console.log(result);
  }
}
