export class canvas {
  constructor() {
    this.currentTool;
  }

  mouseDown() {
    this.currentTool.mouseDown();
  }
  mouseUp() {
    this.currentTool.mouseUp();
  }

  currentToolgetter() {
    return this.currentTool;
  }

  setCurrentTool(tool) {
    this.currentTool = tool;
  }
}
