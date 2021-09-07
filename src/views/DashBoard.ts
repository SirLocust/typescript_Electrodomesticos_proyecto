import { HouseholdAppliance } from '../models/HouseholdAppliance';
import { ParseData } from '../models/ParseData';

export class DashBoard {
  private parseData: ParseData;
  constructor(parseData: ParseData) {
    this.parseData = parseData;
  }
  public createTable(list: HouseholdAppliance[]) {
    this.checkIsDiv();
    const div = document.createElement('div');
    div.setAttribute('id', 'dashboard');
    const itemLeyenda = `<div><span>Tipo Electrodomestico</span><span>Consumo</span><span>Origen</span></div>`;
    div.insertAdjacentHTML('beforeend', itemLeyenda);
    for (const item of list) {
      const data = `<div >
      <span>${this.parseData.requireStringTypeHousehold(
        item.typeHouseholdAppliance
      )}</span>
              <span>${this.parseData.requireStringSpeding(item.spending)}</span>
              <span>${this.parseData.requireStringOrigin(item.origin)}</span>
              </div>`;
      div.insertAdjacentHTML('beforeend', data);
    }
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
    <input type="number" id="sizeTv" />
    <label for="">tiene tdt</label>

    <select name="options" id="isTdtSelect">
      <option value="1">si</option>
      <option value="2">no</option>
    </select>`;

    divTV?.insertAdjacentHTML('beforeend', html);
  }
  public createOptionsFridge() {
    this.removeOptios();
    let divFridge = document.getElementById('divFridge') as HTMLElement;
    let html = `<label for="">capacidad Litros</label>
    <input type="number" id="capacityFridge" />`;

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
