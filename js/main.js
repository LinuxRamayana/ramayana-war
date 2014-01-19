//Create Canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "img/background.png";



var mainLoop = function() {
    var now = Date.now();
    var delta = now - then;
    remainingTime = remainingTime - delta/1000;
    //Stop the game
    if(remainingTime <= 0){
        clearInterval(spawnMonsterInterval);
        clearInterval(mainLoopInterval);
    }
    
    //Update positions
    updateObjectPositions(hero,delta / 1000);
    //Collisions
    for(var i=0; i<heroes.length; i++){
        for(var j=0; j<flames.length; j++){
            if(heroes[i].collides(flames[j])){
                heroes[i].reset();
                flames[j].reset();
            }
        }
        for(var j=0; j<monsters.length; j++){
            if(heroes[i].collides(monsters[j]) ){
                heroes[i].reset();
                score++;
                monsters.splice(j,1); //Erase
            }
        }
    }
    graphicsEngine.render();
    then = now;
};

var spawnMonster = function(){
    var newMonster = new Monster();
    newMonster.reset();
    monsters.push(newMonster);
};

//Initialize game objects
// TODO : Create a game object class or disribute these to existing classes.
var heroes = [];
var monsters = [];
var points = [];
var flames = [];

var hero = new Hero();
heroes.push(hero);

var monster = new Monster();
monsters.push(monster);

var flame = new Flames();
flame.pos.x = 100;
flame.pos.y = 100;
flames.push(flame);

//Initialize game
var score = 0;
var timeStart = Date.now();
var remainingTime = 15;
hero.reset();
monster.reset();
var then = Date.now();
var mainLoopInterval = setInterval(mainLoop,100/3);//30FPS
var spawnMonsterInterval = setInterval(spawnMonster,1000);//Every second.
var graphicsEngine = new Graphics();