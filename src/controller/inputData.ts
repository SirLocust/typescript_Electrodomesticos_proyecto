import { Cart } from './../models/Cart';
import { Origin } from './../types/origin';
import { HouseholdAppliance } from './../models/HouseholdAppliance';
import { Spending } from './../types/speding';
import { TypeHouseHoldAppliace } from '../types/typeHouseHoldAppliance';

import { DataBase } from '../models/DataBase';
import { TV } from '../models/TV';
import { Fridge } from '../models/Fridge';
import { GetData } from '../models/GetData';
import { ParseData } from '../models/ParseData';
import { Bill } from '../models/Bill';
import { DashBoard } from '../views/DashBoard';

export class InputData {
  buttonAddDataBase: HTMLButtonElement;
  buttonAddCart: HTMLButtonElement;
  buttonGenerateBill: HTMLButtonElement;

  dataBase: DataBase;
  getData: GetData;
  parseData: ParseData;
  cart: Cart;
  bill: Bill;
  dashBoard: DashBoard;
  constructor(
    buttons: HTMLButtonElement[],

    dataBase: DataBase,
    getData: GetData,
    parseData: ParseData,
    cart: Cart,
    bill: Bill,
    dashBoard: DashBoard
  ) {
    this.buttonAddDataBase = buttons[0];
    this.buttonAddCart = buttons[1];
    this.buttonGenerateBill = buttons[2];
    this.dataBase = dataBase;
    this.getData = getData;
    this.parseData = parseData;
    this.cart = cart;
    this.bill = bill;
    ////////
    this.dashBoard = dashBoard;
    this.listenerAddDataBase();
    this.listenerAddCart();
    this.listenerGenerateBill();
    this.listenerSelect();
  }

  private listenerSelect() {
    this.getData
      .getSelectTypeHouseholdAElement()
      .addEventListener('change', (event: Event) => {
        let type = this.parseData.requireTypeHouseholdAppliance(
          this.getData.getSelectTypeHousehold()
        );
        if (type === TypeHouseHoldAppliace.TV) {
          this.dashBoard.createOptionsTv();
        }
        if (type === TypeHouseHoldAppliace.FRIDGE) {
          this.dashBoard.createOptionsFridge();
        }
        if (type === TypeHouseHoldAppliace.BASIC) {
          this.dashBoard.removeOptios();
        }
      });
  }

  private listenerAddDataBase() {
    this.buttonAddDataBase.addEventListener('click', () => {
      this.createAndAddDataBase(this.getInputCount());

      this.dashBoard.createTable(this.dataBase.Getdb());
    });
  }

  private listenerAddCart() {
    this.buttonAddCart.addEventListener('click', () => {
      this.createAndAddCart(this.getInputCount());
      console.log(this.cart.getItems());
    });
  }
  private listenerGenerateBill() {
    this.buttonGenerateBill.addEventListener('click', () => {
      // this.bill.generateTotal(this.cart.getItems());

      this.bill.removeProduct(this.cart.getItems(), this.dataBase);
      this.cart.setList([]);
      this.dashBoard.createTable(this.dataBase.Getdb());
    });
  }

  private createAndAddDataBase(count: number) {
    for (let index = 0; index < count; index++) {
      this.dataBase.setItem(this.createHouseHoldAppliance());
    }
  }
  private createAndAddCart(count: number) {
    for (let index = 0; index < count; index++) {
      this.cart.addProduct(this.createHouseHoldAppliance());
    }
  }

  private getInputCount(): number {
    const inputUser = document.getElementById(
      'countHouseHoldA'
    ) as HTMLInputElement;

    return Number.parseInt(inputUser.value);
  }

  private createHouseHoldAppliance(): HouseholdAppliance {
    const origin = this.parseData.requireOrigin(this.getData.getSelectOrigin());
    const typeHouseHoldAppliace = this.parseData.requireTypeHouseholdAppliance(
      this.getData.getSelectTypeHousehold()
    );
    const spending = this.parseData.requireSpeding(
      this.getData.getSelectSpeding()
    );
    if (typeHouseHoldAppliace === TypeHouseHoldAppliace.TV) {
      return this.createNewTv(typeHouseHoldAppliace, spending, origin);
    }
    if (typeHouseHoldAppliace === TypeHouseHoldAppliace.FRIDGE) {
      return this.createNewFridge(typeHouseHoldAppliace, spending, origin);
    }
    return this.createNewBasicHouseholdAppliance(
      typeHouseHoldAppliace,
      spending,
      origin
    );
  }

  private createNewBasicHouseholdAppliance(
    typeHouseHoldAppliace: TypeHouseHoldAppliace,
    spending: Spending,
    origin: Origin
  ): HouseholdAppliance {
    return new HouseholdAppliance(typeHouseHoldAppliace, spending, origin);
  }

  private createNewTv(
    typeHouseHoldAppliace: TypeHouseHoldAppliace,
    spending: Spending,
    origin: Origin
  ): TV {
    let size = this.getData.getSelectSizeTv() || 40;
    let isTdt = this.getData.getSelectIsTdt() || false;

    return new TV(typeHouseHoldAppliace, spending, origin, size, isTdt);
  }
  private createNewFridge(
    typeHouseHoldAppliace: TypeHouseHoldAppliace,
    spending: Spending,
    origin: Origin
  ): Fridge {
    let capacity = this.getData.getSelectCapacityFridge() || 120;
    return new Fridge(typeHouseHoldAppliace, spending, origin, capacity);
  }
}
