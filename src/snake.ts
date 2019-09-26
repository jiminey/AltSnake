import * as Settings from "./settings";

type SnakeCoordinate = [number, number];
type SnakePieces = SnakeCoordinate[];

export class Snake {
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;
  private dir: string = 'Right';
  private prevDir: string = 'Right';

  private dir2: string = 'Left';
  private prevDir2: string = 'Left';

  private turn: number = 0;

  private cellWidth: number;
  private cellHeight: number;
  private updateFrame: number = 0;
  private canMove: boolean;
  
  private snakeCoord1: SnakeCoordinate;
  private snakeCoord2: SnakeCoordinate;
  private snakeCoord3: SnakeCoordinate;

  private snake2Coord1: SnakeCoordinate;
  private snake2Coord2: SnakeCoordinate;
  private snake2Coord3: SnakeCoordinate;
  
  public head:number[];
  public head2:number[];

  public snake: SnakePieces;
  public snake2: SnakePieces;
  public snakeCoord: SnakeCoordinate;



  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    this.cellWidth = canvasWidth / Settings.board.dimX;
    this.cellHeight = canvasHeight / Settings.board.dimY;
    this.x = 0;
    this.y = 0;

    this.turn = 0; //0 is first player 1 is other player

    this.snakeCoord1 = [0,0]
    this.snakeCoord2 = [1,0]
    this.snakeCoord3 = [2,0]

    this.snake2Coord1 = [19,19]
    this.snake2Coord2 = [18,19]
    this.snake2Coord3 = [17,19]

    this.snake = [ this.snakeCoord1, this.snakeCoord2, this.snakeCoord3 ]

    this.snake2 = [ this.snake2Coord1, this.snake2Coord2, this.snake2Coord3 ]


    this.head2 = this.snake2[this.snake.length - 1] //last item
    this.head = this.snake[this.snake.length - 1] //last item

    this.canMove = true;

    document.addEventListener("keydown", event => {

      if (!this.canMove) return false;
      this.canMove = false; 
      setTimeout( () => {this.canMove = true} , 50);

      switch (event.key) {

        case "Down": // IE/Edge specific value
        case "ArrowDown":
          
        if (this.prevDir !== "Up" && this.turn === 0){
          this.dir = "Down"
          this.prevDir = this.dir;
        } else if (this.prevDir2 !== "Up" && this.turn === 1){
          this.dir2 = "Down"
          this.prevDir2 = this.dir2;
        }
        break;

        case "Up": // IE/Edge specific value
        case "ArrowUp":

        if (this.prevDir !== "Down" && this.turn === 0) {
          this.dir = "Up"
          this.prevDir = this.dir;
        } else if (this.prevDir2 !== "Down" && this.turn === 1) {
          this.dir2 = "Up"
          this.prevDir2 = this.dir2;
        }
        break;
        
        case "Right": // IE/Edge specific value
        case "ArrowRight":

          if (this.prevDir !== "Left" && this.turn === 0 ) {
            this.dir = "Right"
            this.prevDir = this.dir;
          } else if (this.prevDir2 !== "Left" && this.turn === 1) {
            this.dir2 = "Right"
            this.prevDir2 = this.dir2;
          }
        break;
          
        case "Left": // IE/Edge specific value
        case "ArrowLeft":

        if (this.prevDir !== "Right" && this.turn === 0) {
          this.dir = "Left"
          this.prevDir = this.dir;
        } else if (this.prevDir2 !== "Right" && this.turn === 1) {
          this.dir2 = "Left"
          this.prevDir2 = this.dir2;
        }
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
        this.snake[i][0] * this.cellWidth, //x
        this.snake[i][1] * this.cellHeight, //y
        20,
        20
      )
    }
        
        
    for (let i = 0; i < this.snake2.length; i++) {
      this.ctx.fillStyle = "#ff0000";
      this.ctx.fillRect(
        this.snake2[i][0] * this.cellWidth, //x
        this.snake2[i][1] * this.cellHeight, //y
        20,
        20
      )
    }
    

  }

  update(apple: any) {
    this.updateFrame++;

    if (this.updateFrame % Settings.board.speed === 0) {
      if (this.turn === 0) {

      
      switch (this.dir) {

        case "Down":
          if (this.prevDir !== "Up" && this.turn === 0){
            this.snakeCoord = this.snake.shift(); 
            this.snakeCoord[0] = this.head[0]; 
            this.snakeCoord[1] = this.head[1] + 1; 
            this.snake.push(this.snakeCoord); 
            this.head = this.snake[this.snake.length - 1];
          }
          break;
          
        case "Up": 
          if (this.prevDir !== "Down" && this.turn === 0) {          
            this.snakeCoord = this.snake.shift(); 
            this.snakeCoord[0] = this.head[0]; 
            this.snakeCoord[1] = this.head[1] - 1;
            this.snake.push(this.snakeCoord); 
            this.head = this.snake[this.snake.length - 1]; 
          }
          break;

        case "Left": 
          if (this.prevDir !== "Right" && this.turn === 0) {
            this.snakeCoord = this.snake.shift(); 
            this.snakeCoord[0] = this.head[0] - 1; 
            this.snakeCoord[1] = this.head[1];
            this.snake.push(this.snakeCoord);
            this.head = this.snake[this.snake.length - 1];
          }
          break;

        case "Right": 
          if (this.prevDir !== "Left" && this.turn === 0) {
            this.snakeCoord = this.snake.shift(); 
            this.snakeCoord[0] = this.head[0] + 1; 
            this.snakeCoord[1] = this.head[1];
            this.snake.push(this.snakeCoord);
            this.head = this.snake[this.snake.length - 1];
          }
          break;

        default:
          return;
        }
      } else {

      

          switch (this.dir2) {

            case "Down":
              if (this.prevDir2 !== "Up" && this.turn === 1) {
                this.snakeCoord = this.snake2.shift();
                this.snakeCoord[0] = this.head2[0];
                this.snakeCoord[1] = this.head2[1] + 1;
                this.snake2.push(this.snakeCoord);
                this.head2 = this.snake2[this.snake2.length - 1];
              }
              break;

            case "Up":
              if (this.prevDir2 !== "Down" && this.turn === 1) {
                this.snakeCoord = this.snake2.shift();
                this.snakeCoord[0] = this.head2[0];
                this.snakeCoord[1] = this.head2[1] - 1;
                this.snake2.push(this.snakeCoord);
                this.head2 = this.snake2[this.snake2.length - 1];
              }
              break;

            case "Left":
              if (this.prevDir2 !== "Right" && this.turn === 1) {
                this.snakeCoord = this.snake2.shift();
                this.snakeCoord[0] = this.head2[0] - 1;
                this.snakeCoord[1] = this.head2[1];
                this.snake2.push(this.snakeCoord);
                this.head2 = this.snake2[this.snake2.length - 1];
              }
              break;

            case "Right":
              if (this.prevDir2 !== "Left" && this.turn === 1) {
                this.snakeCoord = this.snake2.shift();
                this.snakeCoord[0] = this.head2[0] + 1;
                this.snakeCoord[1] = this.head2[1];
                this.snake2.push(this.snakeCoord);
                this.head2 = this.snake2[this.snake2.length - 1];
              }
              break;

            default:
              return;
      } 
    }

      //condition for no bounds
      // if (this.head[0] >= Settings.board.dimX ) this.head[0] = 0; //right bound
      // if (this.head[0] < 0) this.head[0] = Settings.board.dimX - 1; //left bound 

      // if (this.head[1] >= Settings.board.dimY) this.head[1] = 0; //bottom bound
      // if (this.head[1] < 0) this.head[1] = Settings.board.dimY; //top bound

      
    }

    //apple collision

    if (this.head[0] === apple.basket[0][0] && 
        this.head[1] === apple.basket[0][1])
      {
        
        this.snakeCoord = [this.snake[0][0], this.snake[0][1]] 
        this.snake.unshift(this.snakeCoord)
        apple.basket.shift() //remove apple
        apple.onSnake = true; 
        this.turn = 1;
        
    }

    if (this.head2[0] === apple.basket[0][0] &&
      this.head2[1] === apple.basket[0][1]) {

      this.snakeCoord = [this.snake2[0][0], this.snake2[0][1]]
      this.snake2.unshift(this.snakeCoord)
      apple.basket.shift() //remove apple
      apple.onSnake = true;
      this.turn = 0;

    } // for second snake

  
  }
}