import * as Settings from "./settings";


type AppleCoordinate = [number, number];
export type Basket = AppleCoordinate[];

export class Apple {
    private ctx: CanvasRenderingContext2D;
    private appleCoord: AppleCoordinate;
    private updateFrame:number = 0;
    private cellWidth: number;
    private cellHeight: number;
    private onSnake: boolean;
    public basket: Basket = [];

    constructor(private canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d");
        this.appleCoord = [3,4]
        this.basket = [this.appleCoord]
        this.onSnake = true;
        let canvasWidth = canvas.width;
        let canvasHeight = canvas.height;
        this.cellWidth = canvasWidth / Settings.board.dimX;
        this.cellHeight = canvasHeight / Settings.board.dimY;
    }
    
    draw() {

        for(let i = 0; i < this.basket.length; i++) {
            this.ctx.fillStyle = "#ff5000";
            this.ctx.fillRect(
                this.basket[i][0] * this.cellWidth, //x
                this.basket[i][1] * this.cellHeight, //y
                20,
                20
            );
        }
    }

    update(snake: any){
        this.updateFrame++;
        if (!this.basket.length) {
            this.appleCoord = [
                Math.floor(Math.random() * Math.floor(Settings.board.dimX)),
                Math.floor(Math.random() * Math.floor(Settings.board.dimY))
            ]
            
            while (this.onSnake === true) {
                this.onSnake = false;

                for (let i = 0; i < snake.length; i++) {
                    if (snake[i][0] === this.appleCoord[0] && snake[i][1] === this.appleCoord[1]) {
                        this.appleCoord = [
                            Math.floor(Math.random() * Math.floor(Settings.board.dimX)),
                            Math.floor(Math.random() * Math.floor(Settings.board.dimY))
                        ]
                        this.onSnake = true; 
                    }
                }
                //if snake is on apple, we set true/ and change

                


            }

            this.basket.push(this.appleCoord);
        }
    }
}