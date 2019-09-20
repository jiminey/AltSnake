import * as Settings from "./settings";


type AppleCoordinate = [number, number];
export type Basket = AppleCoordinate[];

export class Apple {
    private ctx: CanvasRenderingContext2D;
    private appleCoord: AppleCoordinate;
    private updateFrame:number = 0;
    private cellWidth: number;
    private cellHeight: number;
    
    public basket: Basket = [];

    constructor(private canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d");
        this.appleCoord = [3,4]
        this.basket = [this.appleCoord]
        
        let canvasWidth = canvas.width;
        let canvasHeight = canvas.height;
        this.cellWidth = canvasWidth / Settings.board.dimX;
        this.cellHeight = canvasHeight / Settings.board.dimY;
    }
    
    draw() {

        for(let i = 0; i < this.basket.length; i++) {
            this.ctx.fillStyle = "green";
            this.ctx.fillRect(
                this.basket[i][0] * this.cellWidth, //x
                this.basket[i][1] * this.cellHeight, //y
                30,
                30
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
            while (snake.includes(this.appleCoord)) {
                this.appleCoord = [
                    Math.floor(Math.random() * Math.floor(Settings.board.dimX)),
                    Math.floor(Math.random() * Math.floor(Settings.board.dimY))
                ]
            }
            
            this.basket.push(this.appleCoord);
        }
    }
}