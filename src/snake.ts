import * as Settings from "./settings";

export class Snake {
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;
  private dir: string = 'Right'; 
  private cellWidth: number;
  private cellHeight: number;
  private updateFrame: number = 0;
  private snake:number[][] = [];
  private head:number[] = [];
  private tail:number[] = [];

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    this.cellWidth = canvasWidth / Settings.board.dimX;
    this.cellHeight = canvasHeight / Settings.board.dimY;
    this.x = 0;
    this.y = 0;
    this.snake = [ [0,0], [1,0], [2,0] ]
    this.head = this.snake[this.snake.length - 1] //last item
    this.tail = this.snake[0]

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          this.dir = "Down"
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          this.dir = "Up"
          break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          this.dir = "Left"
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          this.dir = "Right"
          break;
        // case "Enter":
        //   // Do something for "enter" or "return" key press.
        //   break;
        // case "Esc": // IE/Edge specific value
        // case "Escape":
        //   // Do something for "esc" key press.
        //   break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
    })
  }


  draw() {
    for (let i = 0; i < this.snake.length ; i++) {
      this.ctx.fillStyle = "#ff0000";
      this.ctx.fillRect(
        this.snake[i][0] * this.cellWidth,
        this.snake[i][1] * this.cellHeight,
        30,
        30
      );
    }
  }

  update() {
    this.updateFrame++;

    if (this.updateFrame % 10 === 0) {
      switch (this.dir) {
        case "Down": 
          this.tail = this.snake.shift(); //remove tail
          this.tail[0] = this.head[0];
          this.tail[1] += 1; 
          this.snake.push(this.tail);
          break;
        case "Up": 
          this.tail = this.snake.shift();
          this.tail[0] = this.head[0];
          this.tail[1] -= 1;
          this.snake.push(this.tail);
          break;
        case "Left": 
          this.x--
          break;
        case "Right": 
          this.x++
          break;
        default:
          return;
      } 
      if (this.x >= Settings.board.dimX ) this.x = 0; //right bound
      if (this.x < 0) this.x = Settings.board.dimX - 1; //left bound 
      if (this.y >= Settings.board.dimX - 1) this.y = 0; //bottom bound
      if (this.y < 0) this.y = Settings.board.dimY; //top bound
    }
  }
}