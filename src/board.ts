import * as Settings from "./settings";

export class Board {
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private ctx: CanvasRenderingContext2D;
  private cellWidth: number;
  private cellHeight: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.cellWidth = this.canvasWidth / Settings.board.dimX;
    this.cellHeight = this.canvasHeight / Settings.board.dimY;
  }

  draw() {
    this.ctx.fillStyle = "lightcyan";
    for (let row = 0; row < Settings.board.dimY; row++) {
      for (let col = 0; col < Settings.board.dimX; col++) {
        this.ctx.fillRect(
          col * this.cellWidth,
          row * this.cellHeight,
          this.cellWidth - 3,
          this.cellHeight - 3
        );
      }
    }
  }
}
