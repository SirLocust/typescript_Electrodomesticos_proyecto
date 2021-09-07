import { Fridge } from '../models/Fridge';
import { HouseholdAppliance } from '../models/HouseholdAppliance';
import { ParseData } from '../models/ParseData';
import { TV } from '../models/TV';
import { TypeHouseHoldAppliace } from '../types/typeHouseHoldAppliance';

export class DashBoard {
  private parseData: ParseData;
  constructor(parseData: ParseData) {
    this.parseData = parseData;
  }
  public createTable(list: HouseholdAppliance[]) {
    this.checkIsDiv();
    const div = document.createElement('table');
    div.setAttribute('id', 'dashboard');
    div.classList.add('table');
    const itemLeyenda = `  <thead>
    <tr>
      <th scope="col">Tipo De electrodomestico</th>
      <th scope="col">Consumo</th>
      <th scope="col">Origen</th>
      <th scope="col">Price</th>
      <th scope="col">pulgadas/litros</th>
      <th scope="col">tiene TDT</th>

    </tr>
  </thead>`;
    div.insertAdjacentHTML('beforeend', itemLeyenda);
    let tbody = document.createElement('tbody') as HTMLElement;

    for (const item of list) {
      let arr = [];
      if (item.typeHouseholdAppliance === TypeHouseHoldAppliace.TV) {
        let itemN = item as TV;
        arr.push(itemN.size);
        arr.push(itemN.isTDT);
      }
      if (item.typeHouseholdAppliance === TypeHouseHoldAppliace.FRIDGE) {
        let itemN = item as Fridge;
        arr.push(itemN.capacity);
      }
      const data = `
      <tr>
      <th scope="row">${this.parseData.requireStringTypeHousehold(
        item.typeHouseholdAppliance
      )}</th>
      <td>${this.parseData.requireStringSpeding(item.spending)}</td>
      <td>${this.parseData.requireStringOrigin(item.origin)}</td>
      <td>${item.calculatePrice()}</td>
      <td>${
        item.typeHouseholdAppliance !== TypeHouseHoldAppliace.BASIC
          ? arr[0]
          : 'no tiene'
      }</td>
      <td>${
        item.typeHouseholdAppliance !== TypeHouseHoldAppliace.BASIC && arr[1]
          ? arr[1]
          : 'no tiene'
      }</td>


    </tr>


      <span></span>
              <span></span>
              <span></span>
              </div>`;
      tbody.insertAdjacentHTML('beforeend', data);
    }
    div.insertAdjacentElement('beforeend', tbody);
    document.body.insertAdjacentElement('beforeend', div);
  }

  private checkIsDiv() {
    const div = document.getElementById('dashboard') as HTMLDivElement;
    if (div) {
      div.remove();
    }
  }
  public createOptionsTv() {
    this.removeOptios();

    let divTV = document.getElementById('divTv') as HTMLElement;

    let html = `<label for="">pulgadas</label>
    <input class="form-control" type="number" id="sizeTv" />
    <label for="">tiene tdt</label>

    <select class="form-select" name="options" id="isTdtSelect">
      <option value="1">si</option>
      <option value="2">no</option>
    </select>`;

    divTV?.insertAdjacentHTML('beforeend', html);
  }
  public createOptionsFridge() {
    this.removeOptios();
    let divFridge = document.getElementById('divFridge') as HTMLElement;
    let html = `<label for="">capacidad Litros</label>
    <input class="form-control" type="number" id="capacityFridge" />`;

    divFridge?.insertAdjacentHTML('beforeend', html);
  }

  private removeNodesChills(elemt: HTMLElement): void {
    while (elemt.firstChild) {
      if (elemt.lastChild) {
        elemt.removeChild(elemt.lastChild);
      }
    }
  }
  public removeOptios(): void {
    let divFridge = document.getElementById('divFridge') as HTMLElement;
    let divTV = document.getElementById('divTv') as HTMLElement;

    this.removeNodesChills(divTV);
    this.removeNodesChills(divFridge);
  }
}
