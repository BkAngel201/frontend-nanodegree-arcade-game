'use strict'

const gameConfig = {
    player: {
        initialX: 202,
        initialY: 570
    },
    collision: {
        imageWidth: 75,             // correcting the with of the imagen for realistic collisions when the graphics touch each other
        imageHeight: 83,            // the height of the graphic part of the image
        imageAreaTransparent: 88    // the height of the image that is transparent and we would'nt use to test for collision
    },
    board: {
        squareWidth: 101,
        squareHeight: 83,
        squareInitialY : [-11, 72, 155, 238, 321, 404, 487, 570],
        squareInitialX : [0, 101, 202, 303, 404]
    }
}

// Enemies our player must avoid
var Enemy = function(posYAxisPixel = -11) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = (Math.random() * (-550 - (-101)) + (-101));  // take a random value out of the screen like start position
    this.y = posYAxisPixel;
    this.speed = (Math.random() * (5 - 1) + 1) * 100;  // take a random value of speed between 1 and 5 and multipling it with 100
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // by every time unit the enemy will move actualPosition + speed * time
    this.x += (this.speed * dt);

    // when the enemy is out of screen we reset it position and it speed to look like is another different enemy
    if (this.x > 600) {
      this.x = (Math.random() * (-550 - (-101)) + (-101)); // take a random value out of the screen like start position
      this.speed = (Math.random() * (5 - 1) + 1) * 100; // take a random value of speed between 1 and 5 and multipling it with 100
    }

    // by every time unit we will testing if the enemy have any collision with the player
    this.handleCollision(player);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// test if the player and the enemy are colliding
Enemy.prototype.handleCollision = function(playerObject) {

    // this if test if any part of both square are colliding, idea taken from MDN, and optimized for this case
    if(this.x < (playerObject.x + gameConfig.collision.imageWidth) &&
      (this.x + gameConfig.collision.imageWidth) > playerObject.x  &&
      (this.y - gameConfig.collision.imageAreaTransparent) < (playerObject.y - gameConfig.collision.imageAreaTransparent + gameConfig.collision.imageHeight) &&
      (this.y - gameConfig.collision.imageAreaTransparent + gameConfig.collision.imageHeight) > (playerObject.y - gameConfig.collision.imageAreaTransparent)) {
        alert("One of the Enemies has touch You. \nSo you Lose the Game.");
        // when they touch each other we reset the position of the player
        playerObject.resetPosition();
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Our player
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = gameConfig.player.initialX;
    this.y = gameConfig.player.initialY;
};

Player.prototype.update = function(dt) {
    if (this.y === gameConfig.board.squareInitialY[0]) {
      this.reachFinalLine();
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// reset the player position to the inital position
Player.prototype.resetPosition = function() {
    this.x = gameConfig.player.initialX;
    this.y = gameConfig.player.initialY;
}

Player.prototype.reachFinalLine = function() {
  alert("You have Reached the water. \nCongratulations, You Win.");
  this.resetPosition();
}

// handle what key is pressend and what to do in every case
Player.prototype.handleInput = function(keyPressed) {
  switch (keyPressed) {
    // the if inside every case is to prevent the player going out of the screen, every side has it limit
    // the movement is 83px vertically and 101px horizontally
    case "left":
      if(this.x !== gameConfig.board.squareInitialX[0]) {
        this.x -= gameConfig.board.squareWidth;
      }
      break;
    case "right":
      if(this.x !== gameConfig.board.squareInitialX[gameConfig.board.squareInitialX.length - 1]) {
        this.x += gameConfig.board.squareWidth;
      }
      break;
    case "down":
      if (this.y !== gameConfig.board.squareInitialY[gameConfig.board.squareInitialY.length - 1]) {
        this.y += gameConfig.board.squareHeight;
      }
      break;
    case "up":
      if (this.y !== gameConfig.board.squareInitialY[0]) {
        this.y -= gameConfig.board.squareHeight;
      }
      break;

  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
for(let valueY in gameConfig.board.squareInitialY) {
    if(valueY != 0 && valueY != gameConfig.board.squareInitialY.length-1) {
        allEnemies.push(new Enemy(gameConfig.board.squareInitialY[valueY]));
    }
}

const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
