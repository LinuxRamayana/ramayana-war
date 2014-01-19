Graphics = Class.extend({
    render : function(){
        if(bgReady)
            ctx.drawImage(bgImage, 0, 0);
        for(var i=0; i<monsters.length; i++){
            if(monsters[i].ready)
                ctx.drawImage(monsters[i].img, monsters[i].pos.x, monsters[i].pos.y);
        }
        for(var i=0; i<heroes.length; i++){
            if(heroes[i].ready)
                ctx.drawImage(heroes[i].img, heroes[i].pos.x, heroes[i].pos.y);
        }
        //+0.5 -1 animation
        for(var i=0; i<points.length; i++){
            points[i].draw();
        }
        //Flame animation
        for(var i=0; i<flames.length; i++){
            if(flames[i].ready){
                var sx = flames[i].animationx * flames[i].width;
                var sy = flames[i].animationy * flames[i].height;
                flames[i].animationx = (flames[i].animationx + 1) % 4;
                if(flames[i].animationx == 0)
                    flames[i].animationy = (flames[i].animationy + 1) %3;
                ctx.drawImage(flames[i].img, sx, sy, flames[i].width, flames[i].height, flames[i].pos.x, flames[i].pos.y, flames[i].width, flames[i].height);
            }
        }

        // Score
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Cakil terbunuh: " + score, 32, 32);
        if(remainingTime <= 0)
            ctx.fillText("--Perang berakhir--",32,0);
        else
            ctx.fillText("Waktu: " + Math.floor(remainingTime),32,0);
    }

});
