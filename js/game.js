var loading = 0;

var currerntLevel = 0;

var maps = [
  [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 0, 0, 0, 1, 2, 0, 0, 7, 2],
    [2, 1, 1, 1, 1, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 2, 1, 0, 1, 0, 0, 9, 0, 1, 2, 0, 0, 0, 2],
    [2, 2, 1, 1, 1, 1, 0, 0, 0, 1, 2, 9, 0, 0, 2],
    [2, 2, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 2, 0, 0, 0, 0, 0, 6, 0, 1, 2, 0, 0, 0, 2],
    [2, 2, 0, 0, 0, 0, 4, 0, 4, 1, 2, 0, 0, 0, 2],
    [2, 2, 2, 2, 9, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 2, 0, 0, 0, 5, 0, 0, 0, 3, 0, 0, 0, 4, 2],
    [2, 0, 0, 9, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 8, 2, 2, 2, 2, 0, 0, 9, 1, 2, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ],
  [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 7, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 0, 1, 0, 0, 9, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 2, 9, 0, 0, 2],
    [2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 6, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 4, 0, 4, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 9, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 2],
    [2, 2, 2, 9, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 5, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0, 0, 8, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ],
  [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 0, 7, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 0, 1, 0, 0, 9, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 2, 9, 0, 0, 2],
    [2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 6, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 4, 0, 4, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 9, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 2],
    [2, 0, 0, 9, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 2, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0, 0, 5, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ]
];


var map = maps[currerntLevel];

// Game objects
var hero = {
  energy: 10,
  inventory: [],
  x: 0,
  y: 0
};

var textures = new Array();

//init map
for (var i = 0; i < map.length; i++) {
  for (var j = 0; j < map[i].length; j++) {
    if (map[i][j] > 0) {
      var index = map[i][j];
      if (typeof textures[index] === 'undefined' || textures[index] === null) {
        textures[index] = new Image();
        textures[index].src = "images/map/" + index + ".png";

        //set player x,y
        if (index === 5) {
          hero.x = j;
          hero.y = i;
        }
        loading++;
      }
    }
  }
}

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 512;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
  loading = 1001;
};
bgImage.src = "images/background.jpg";

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);


// Update game objects
var update = function (modifier) {
  map[hero.y][hero.x] = 0;

  if (38 in keysDown && validateMovement(hero.x, hero.y - 1)) { // up
    hero.y -= 1;
    hero.energy -= 1;
  }
  if (40 in keysDown && validateMovement(hero.x, hero.y + 1)) { // down
    hero.y += 1;
    hero.energy -= 1;
  }
  if (37 in keysDown && validateMovement(hero.x - 1, hero.y)) { // left
    hero.x -= 1;
    hero.energy -= 1;
  }
  if (39 in keysDown && validateMovement(hero.x + 1, hero.y)) { // right
    hero.x += 1;
    hero.energy -= 1;
  }

  map[hero.y][hero.x] = 5;
};

function validateMovement(x, y) {
  if (map[y][x] === 0 || map[y][x] === 3) {
    return true;
  } else if (map[y][x] === 9) {
    hero.energy += 1;
    return true;
  } else if (map[y][x] === 4) { 
    //push object
    if (40 in keysDown) {
      if (map[y + 1][x] === 0) {
        map[y][x] = 0;
        map[y + 1][x] = 4;
        return true;
        hero.energy--;
      } else {
        return false;
      }
    }

    if (38 in keysDown) {
      if (map[y - 1][x] === 0) {
        map[y][x] = 0;
        map[y - 1][x] = 4;
        hero.energy--;
        return true;
      } else {
        return false;
      }
    }

    if (37 in keysDown) {
      if (map[y][x - 1] === 0) {
        map[y][x] = 0;
        map[y][x - 1] = 4;
        hero.energy--;
        return true;
      } else {
        return false;
      }
    }

    if (39 in keysDown) {
      if (map[y][x + 1] === 0) {
        map[y][x] = 0;
        map[y][x + 1] = 4;
        hero.energy--;
        return true;
      } else {
        return false;
      }
    }

  } else if (map[y][x] === 6 || map[y][x] === 7) {
    hero.inventory.push(map[y][x]);
    hero.energy += 100;
    return true;
  } else if (map[y][x] === 8) {
    hero.energy += 1000;
    currerntLevel++;
    map = maps[currerntLevel];
    return true;
  } else {
    return false;
  }
}

var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  for (i = 0; i < map.length; ++i) {
    for (j = 0; j < map[i].length; ++j) {
      if (map[i][j] > 0) {
        ctx.drawImage(textures[map[i][j]], j * 32, i * 32 + 32);
      }
    }
  }

  for (i = 0; i < hero.inventory.length; i++) {
    ctx.drawImage(textures[hero.inventory[i]], i * 32 + 320, 0);
  }

  // energy
  ctx.fillStyle = "rgb(200, 200, 200)";
  ctx.font = "20px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Energy: " + hero.energy, 3, 3);

  if (loading < 1000) {
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillText("Loading: " + loading, 50, 50);
  }
};

var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;
};

// start
var then = Date.now();
setInterval(main, 100); // run game