var keysDown = {};

addEventListener("keydown",function(e){
    keysDown[e.keyCode] = true;
},false);

addEventListener("keyup",function(e){
    delete keysDown[e.keyCode];
},false);

var updateObjectPositions = function(myObject,modifier) {
    if(38 in keysDown) // UP
        myObject.pos.y -= myObject.speed * modifier;
    if (40 in keysDown) { // Player holding down
        myObject.pos.y += myObject.speed * modifier;
    }
    if (37 in keysDown) { // Player holding left
        myObject.pos.x -= myObject.speed * modifier;
    }
    if (39 in keysDown) { // Player holding right
        myObject.pos.x += myObject.speed * modifier;
    }
};