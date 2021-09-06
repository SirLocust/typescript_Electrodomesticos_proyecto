import { HouseholdAppliance } from './HouseholdAppliance';

export class DataBase {
  private db: HouseholdAppliance[];
  constructor() {
    this.db = [];
  }
  public Getdb(): HouseholdAppliance[] {
    return this.db;
  }
  public Setdb(dbNew: HouseholdAppliance[]) {
    this.db = dbNew;
  }
  public setItem(householdAppliance: HouseholdAppliance) {
    this.Getdb().push(householdAppliance);
  }
}
