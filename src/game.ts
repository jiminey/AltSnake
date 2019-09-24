import { Board } from "./board";
import { Snake } from "./snake";
import { Apple } from "./apple";
 
export class Game {
  public canvas: HTMLCanvasElement;
  private requestedFrameId: number = -1;
  private loopCount = 0;
  private ctx: CanvasRenderingContext2D;
  private board: Board;
  private snake: Snake;
  private apple: Apple;

  private startScreen: any;
  private endScreen: any;

  private gameState: string = "start";

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.board = new Board(canvas);
    this.snake = new Snake(canvas);
    this.apple = new Apple(canvas);

    this.startScreen = new Image();
    this.startScreen.src = '../example/PressStart.jpg'

    this.endScreen = new Image();
    this.endScreen.src = '../example/gameover.jpg'
  }

  private loop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    if (this.gameState === "start") {

      //render start
      this.ctx.drawImage(this.startScreen, 0, 0, 960, 640);

    } else if (this.gameState ==="game") {

      this.board.draw();
      this.snake.draw();
      this.apple.draw();
      this.apple.update(this.snake.snake);
      this.snake.update(this.apple);
      console.log("looping");
      console.log(++this.loopCount);

    } else if (this.gameState === "end") {
      //render gameover
      this.ctx.drawImage(this.endScreen, 0, 0, 960, 640)
    }


  }

  startLoop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  endLoop() {
    cancelAnimationFrame(this.requestedFrameId);
  }
}
