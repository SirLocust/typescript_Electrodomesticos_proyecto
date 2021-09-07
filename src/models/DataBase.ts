import { HouseholdAppliance } from './HouseholdAppliance';
import { TypeHouseHoldAppliace } from '../types/typeHouseHoldAppliance';

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

  public searchCountProduct(type: TypeHouseHoldAppliace): number {
    let cantidad = this.db.filter((electrodomestido: HouseholdAppliance) => {
      electrodomestido.typeHouseholdAppliance === type;
    });

    return cantidad.length;
  }
}
