export class GetData {
  public getSelectTypeHousehold(): string {
    const select = document.getElementById(
      'typeHouseholdA'
    ) as HTMLSelectElement;
    return select.value;
  }

  public getSelectSizeTv(): number {
    const select = document.getElementById('sizeTv') as HTMLSelectElement;
    return Number.parseInt(select.value);
  }
  public getSelectCapacityFridge(): number {
    const select = document.getElementById(
      'capacityFridge'
    ) as HTMLSelectElement;
    return Number.parseInt(select.value);
  }
  public getSelectIsTdt(): boolean {
    const select = document.getElementById('isTdtSelect') as HTMLSelectElement;
    if (select?.value === '1') {
      return true;
    }
    return false;
  }
  public getSelectSpeding(): string {
    const select = document.getElementById('speding') as HTMLSelectElement;
    return select.value;
  }

  public getSelectOrigin(): string {
    const select = document.getElementById('origin') as HTMLSelectElement;

    return select.value;
  }
  public getInputCount(): number {
    const inputUser = document.getElementById(
      'countHouseHoldA'
    ) as HTMLInputElement;
    let value = Number.parseInt(inputUser.value);

    return value;
  }
  public getSelectTypeHouseholdAElement(): HTMLSelectElement {
    return document.getElementById('typeHouseholdA') as HTMLSelectElement;
  }
}
