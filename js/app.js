// Enemies our player must avoid
var Enemy = function(posYAxisPixel = -11) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = (Math.random() * (-550 - (-101)) + (-101));
    this.y = posYAxisPixel;
    this.speed = (Math.random() * (5 - 1) + 1) * 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed * dt);
    if (this.x > 600) {
      this.x = (Math.random() * (-550 - (-101)) + (-101));
      this.speed = (Math.random() * (5 - 1) + 1) * 100;
    }

    this.handleCollision(player);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.handleCollision = function(playerObject) {
    const imageWidth = 101;
    const imageHeight = 83;
    const imageAreaTransparent = 88;

    if(this.x < (playerObject.x + imageWidth) &&
      (this.x + imageWidth) > playerObject.x  &&
      (this.y - imageAreaTransparent) < (playerObject.y - imageAreaTransparent + imageHeight) &&
      (this.y - imageAreaTransparent + imageHeight) > (playerObject.y - imageAreaTransparent)) {
      console.log("collision");
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Our player
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 570;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPressed) {
  switch (keyPressed) {
    case "left":
      if(this.x !== 0) {
        this.x -= 101;
      }
      break;
    case "right":
      if(this.x !== 404) {
        this.x += 101;
      }
      break;
    case "down":
      if (this.y !== 570) {
        this.y += 83;
      }
      break;
    case "up":
      if (this.y !== -11) {
        this.y -= 83;
      }
      break;

  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [new Enemy(72), new Enemy(155), new Enemy(238), new Enemy(321), new Enemy(404), new Enemy(487)];
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
