import { DataBase } from './DataBase';
import { HouseholdAppliance } from './HouseholdAppliance';

export class Bill {
  public generateTotal(list: HouseholdAppliance[]) {
    let result = 0;
    for (const item of list) {
      result += item.calculatePrice();
    }
    console.log(result);
  }
  public removeProduct(cart: HouseholdAppliance[], dataBase: DataBase): void {
    for (const item of cart) {
      let temporalItem = dataBase.Getdb().find((value) => {
        console.log(value);
        console.log(item);
        return item.isSame(value, item);
      });
      console.log(temporalItem);
      if (temporalItem) {
        let dbNew = dataBase.Getdb().indexOf(temporalItem);
        dataBase.Getdb().splice(dbNew, 1);
      }
    }
  }
}
