Point = Class.extend({
    pos : {x:0,y:0},
    animate : 10,
    change : 0, 
    isGood :null,
            
    init: function(newX, newY,good){
        this.pos.x = newX;
        this.pos.y = newY;
        this.isGood = good;
    },
            
    draw: function(){
        if(this.isGood)
            ctx.fillText("+0.5", this.pos.x, this.pos.y - this.change);
        else
            ctx.fillText("-1", this.pos.x, this.pos.y - this.change);
        if(this.change < this.animate){
            this.change += this.animate/20;
        }
        else
            points.erase(this);
    }
});
