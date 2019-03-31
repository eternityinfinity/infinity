var PLAYER = function(ctx) {
    this.ctx = ctx
    this.coords = [0,0]
    this.dimensions = [50,50]

    this.moveDelta = [0,0]
    
    this.appear = function(){
        this.ctx.fillRect(...this.coords, ...this.dimensions)
    }

    this.move = function(){
        this.ctx.clearRect(...this.coords, ...this.dimensions)
        this.coords[0] += this.moveDelta[0]
        this.coords[1] += this.moveDelta[1]
        this.ctx.fillRect(...this.coords, ...this.dimensions)
    }
    
    this.setColor = function(color) {
        this.ctx.fillStyle = color
    }
}