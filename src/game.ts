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
  private score: number;
  private highscore: number = 0;

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
      if (this.highscore < this.snake.highscore) {
        this.highscore = this.snake.highscore;
      }
      this.board.draw();
      this.snake.draw();
      this.apple.draw();
      this.apple.update(this.snake.snake);
      this.snake.update(this.apple);

      this.ctx.font = "14px Sans Serif";
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fillText("Score: " + this.snake.score, 16, 30);

      this.ctx.font = "13px Sans Serif";      
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fillText("HighScore: " + this.highscore, 16, 50);
      console.log("looping");

      console.log(++this.loopCount);

    } else if (this.gameState === "end") {
      //render gameover

      if (this.highscore < this.snake.highscore) {
        this.highscore = this.snake.highscore;
      }
      this.ctx.drawImage(this.endScreen, 0, 0, 500, 500)
      this.ctx.font = "30px White Sans Serif";
      this.ctx.fillStyle = "white";
      this.ctx.fillText("PRESS SPACEBAR", 130, 370);
      this.ctx.fillText("TO PLAY AGAIN", 140, 410);
      this.ctx.font = "14px Sans Serif";
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fillText("Score: " + this.snake.score, 16, 30);

      this.ctx.font = "13px Sans Serif";
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fillText("HighScore: " + this.highscore, 16, 50);
    }

    for(let i = 0; i < this.snake.snake.length - 1; i++) {
      if (this.snake.snake[i][0] === this.snake.head[0] &&
        this.snake.snake[i][1] === this.snake.head[1]) {
          this.gameState = 'end'
        }

      if (this.snake.snake[i][0] === this.snake.head2[0] &&
        this.snake.snake[i][1] === this.snake.head2[1]) {
        this.gameState = 'end'
      } 
    } //collision for snake eating itself

    for(let i = 0; i < this.snake.snake2.length - 1; i++) {
      if (this.snake.snake2[i][0] === this.snake.head2[0] &&
        this.snake.snake2[i][1] === this.snake.head2[1]) {
          this.gameState = 'end'
        } //itself

      if (this.snake.snake2[i][0] === this.snake.head[0] &&
        this.snake.snake2[i][1] === this.snake.head[1]) {
        this.gameState = 'end'
      } 
        //other snake
    }




    //restart button
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 32:
          this.gameState = 'game'
          this.restart(this.canvas)
      }
    })


    //outbound for snake1
    if (this.snake.head[0] >= Settings.board.dimX) this.gameState ='end'; //right bound
    if (this.snake.head[0] < 0) this.gameState ='end'; //left bound 

    if (this.snake.head[1] >= Settings.board.dimY) this.gameState ='end'; //bottom bound
    if (this.snake.head[1] < 0) this.gameState ='end'; //top bound

    //outbound for snake2
    if (this.snake.head2[0] >= Settings.board.dimX) this.gameState = 'end'; //right bound
    if (this.snake.head2[0] < 0) this.gameState = 'end'; //left bound 

    if (this.snake.head2[1] >= Settings.board.dimY) this.gameState = 'end'; //bottom bound
    if (this.snake.head2[1] < 0) this.gameState = 'end'; //top bound
    
    
    if (this.snake.highscore < this.snake.score) {
      this.snake.highscore = this.snake.score
    }

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
