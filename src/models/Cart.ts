import { HouseholdAppliance } from './HouseholdAppliance';

export class Cart {
  private list: HouseholdAppliance[];
  constructor() {
    this.list = [];
  }
  public addProduct(item: HouseholdAppliance): void {
    this.list.push(item);
  }
  public getItems(): HouseholdAppliance[] {
    return this.list;
  }
}
