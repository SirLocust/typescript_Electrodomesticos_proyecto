import { DashBoard } from './views/DashBoard';
import { DataBase } from './models/DataBase';

import './style.css';

import formTemplate from './views/form.html';
import { InputData } from './controller/inputData';
import { GetData } from './models/GetData';
import { ParseData } from './models/ParseData';
import { Cart } from './models/Cart';
import { Bill } from './models/Bill';

const body = document.querySelector('body');
body?.insertAdjacentHTML('beforeend', formTemplate);
const buttonAddDataBase = document.getElementById(
  'sendData'
) as HTMLButtonElement;
const buttonAddCart = document.getElementById('addCart') as HTMLButtonElement;
const buttonGenerateBill = document.getElementById(
  'createBill'
) as HTMLButtonElement;

const listButtons = [
  buttonAddDataBase,
  buttonAddCart,
  buttonGenerateBill,
] as HTMLButtonElement[];

const dataBase = new DataBase();
const getData = new GetData();
const parseData = new ParseData();
const cart = new Cart();
const bill = new Bill();
const dashBoard = new DashBoard(parseData);

const inputData = new InputData(
  listButtons,
  dataBase,
  getData,
  parseData,
  cart,
  bill,
  dashBoard
);

// const createDataBase = (): HouseholdAppliance[] => {
//   let list = [];
//   for (let i = 0; i < 5; i++) {
//     list.push(
//       new HouseholdAppliance(
//         TypeHouseHoldAppliace.BASIC,
//         Spending.B,
//         Origin.NATIONAL
//       )
//     );
//   }
//   for (let i = 0; i < 10; i++) {
//     list.push(
//       new Fridge(TypeHouseHoldAppliace.BASIC, Spending.A, Origin.NATIONAL, 120)
//     );
//   }
//   for (let i = 0; i < 7; i++) {
//     list.push(
//       new TV(TypeHouseHoldAppliace.TV, Spending.C, Origin.IMPORTED, 20, false)
//     );
//   }
//   for (let i = 0; i < 13; i++) {
//     list.push(
//       new TV(TypeHouseHoldAppliace.TV, Spending.B, Origin.IMPORTED, 20, false)
//     );
//   }
//   for (let i = 0; i < 3; i++) {
//     list.push(
//       new TV(TypeHouseHoldAppliace.TV, Spending.A, Origin.NATIONAL, 20, false)
//     );
//   }
//   for (let i = 0; i < 8; i++) {
//     list.push(
//       new HouseholdAppliance(
//         TypeHouseHoldAppliace.BASIC,
//         Spending.A,
//         Origin.IMPORTED
//       )
//     );
//   }
//   for (let i = 0; i < 10; i++) {
//     list.push(
//       new Fridge(TypeHouseHoldAppliace.BASIC, Spending.C, Origin.IMPORTED, 120)
//     );
//   }

//   return list;
// };
