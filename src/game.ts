import * as Settings from "./settings";
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

  private gameState: string;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.board = new Board(canvas);
    this.snake = new Snake(canvas);
    this.apple = new Apple(canvas);
    this.gameState = "game"
    this.startScreen = new Image();
    this.startScreen.src = 'example/PressStart.jpg'

    this.endScreen = new Image();
    this.endScreen.src = 'example/gameover.jpg'
  }

  private loop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    if (this.gameState === "start") {

      //render start
      this.ctx.drawImage(this.startScreen, 0, 0, 500, 500);

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
      this.ctx.drawImage(this.endScreen, 0, 0, 500, 500)
    }

    for(let i = 0; i < this.snake.snake.length - 3; i++) {
      if (this.snake.snake[i][0] === this.snake.head[0] &&
        this.snake.snake[i][1] === this.snake.head[1]) {
          this.gameState = 'end'
        }
    }




    //restart button
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 32:
          this.gameState = 'game'
          this.restart(this.canvas)
      }
    })



    if (this.snake.head[0] >= Settings.board.dimX) this.gameState ='end'; //right bound
    if (this.snake.head[0] < 0) this.gameState ='end'; //left bound 

    if (this.snake.head[1] >= Settings.board.dimY) this.gameState ='end'; //bottom bound
    if (this.snake.head[1] < 0) this.gameState ='end'; //top bound
    

  }

  restart(canvas: HTMLCanvasElement) {
    this.board = new Board(canvas);
    this.snake = new Snake(canvas);
    this.apple = new Apple(canvas);
  }

  startLoop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  endLoop() {
    cancelAnimationFrame(this.requestedFrameId);
  }
}
