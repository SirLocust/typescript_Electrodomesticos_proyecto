export class GetData {
  public getSelectTypeHousehold(): string {
    const select = document.getElementById(
      'typeHouseholdA'
    ) as HTMLSelectElement;
    return select.value;
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
}
