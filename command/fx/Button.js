export class Button {
  constructor(lable, command) {
    this.lable = lable;
    this.command = command;
  }

  onClick() {
    this.command.execute();
  }
}
