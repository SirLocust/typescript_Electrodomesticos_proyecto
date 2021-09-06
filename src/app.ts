import { Origin } from './types/origin';
import { HouseholdAppliance } from './models/HouseholdAppliance';
import './style.css';
import { Spending } from './types/speding';
import { TypeHouseHoldAppliace } from './types/typeHouseHoldAppliance';
import { Fridge } from './models/Fridge';
import { TV } from './models/TV';

const createDataBase = (): HouseholdAppliance[] => {
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push(
      new HouseholdAppliance(
        TypeHouseHoldAppliace.BASIC,
        Spending.B,
        Origin.NATIONAL
      )
    );
  }
  for (let i = 0; i < 10; i++) {
    list.push(
      new Fridge(TypeHouseHoldAppliace.BASIC, Spending.A, Origin.NATIONAL, 120)
    );
  }
  for (let i = 0; i < 7; i++) {
    list.push(
      new TV(TypeHouseHoldAppliace.TV, Spending.C, Origin.IMPORTED, 20, false)
    );
  }
  for (let i = 0; i < 13; i++) {
    list.push(
      new TV(TypeHouseHoldAppliace.TV, Spending.B, Origin.IMPORTED, 20, false)
    );
  }
  for (let i = 0; i < 3; i++) {
    list.push(
      new TV(TypeHouseHoldAppliace.TV, Spending.A, Origin.NATIONAL, 20, false)
    );
  }
  for (let i = 0; i < 8; i++) {
    list.push(
      new HouseholdAppliance(
        TypeHouseHoldAppliace.BASIC,
        Spending.A,
        Origin.IMPORTED
      )
    );
  }
  for (let i = 0; i < 10; i++) {
    list.push(
      new Fridge(TypeHouseHoldAppliace.BASIC, Spending.C, Origin.IMPORTED, 120)
    );
  }

  return list;
};
