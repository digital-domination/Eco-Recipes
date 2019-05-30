export class BaseItem {
  private readonly Name: string;
  constructor(name: string) {
    this.Name = name;
  }
  get name() {
    return this.Name;
  }
}
