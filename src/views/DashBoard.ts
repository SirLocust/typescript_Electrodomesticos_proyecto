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
}
