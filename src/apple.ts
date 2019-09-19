import * as Settings from "./settings";

export class Apple {
    private ctx: CanvasRenderingContext2D;
    private basket:number[][] = [];
    private updateFrame:number = 0;
    private cellWidth: number;
    private cellHeight: number;

    constructor(private canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d");
        this.basket = [ [3,4] ]
        
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

    update(){
        this.updateFrame++;

        if (!this.basket.length) {
            this.basket.push([
                Math.floor(Math.random() * Math.floor(Settings.board.dimX)),
                Math.floor(Math.random() * Math.floor(Settings.board.dimY)),
            ])
        }
    }
}