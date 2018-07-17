'use strict'

let gameConfig = {
    player: {
        initialX: 202,
        initialY: 570,
        totalGemCounter: 0,
        archievements: {

        }
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
    },
    htmlObjects: {
        gemCounter: document.getElementById("gemCounter"),
        heartCounter: document.getElementById("heartCounter"),
        levelCounter: document.getElementById("levelCounter")
    },
    heros: {
        heroBoy: "boy",
        heroCat: "cat-girl",
        heroHorn: "horn-girl",
        heroPink: "pink-girl",
        heroPrincess: "princess-girl"
    },
    arrowsOffsetValues: {
        up: {
            offsetX: 0,
            offsetY: -10
        },
        down: {
            offsetX: 0,
            offsetY: 151
        },
        left: {
            offsetX: -101,
            offsetY: 75
        },
        right: {
            offsetX: 101,
            offsetY: 75
        }
    },
    arrowDimentions: {
        valueX: 101,
        valueY: 60
    },
    levelConfiguration: {
        1: {
            ladyBugs: {
                quantity: 3,
                positions: [2, 3, 5]
            },
            rocks: {
                quantity: 0
            },
            gems: {
                quantity: 0
            }
        },
        2: {
            ladyBugs: {
                quantity: 6,
                positions: [1, 2, 3, 4, 5, 6]
            },
            rocks: {
                quantity: 0
            },
            gems: {
                quantity: 0
            }
        },
        3: {
            ladyBugs: {
                quantity: 6,
                positions: [1, 2, 3, 4, 5, 6]
            },
            rocks: {
                quantity: 0
            },
            gems: {
                quantity: 2,
                positions: [[3, 2], [4, 4]],
                colors: ["Blue", "Green"]
            }
        },
        4: {
            ladyBugs: {
                quantity: 6,
                positions: [1, 2, 3, 4, 5, 6]
            },
            rocks: {
                quantity: 0
            },
            gems: {
                quantity: 4,
                positions: [[4, 1], [3, 2], [1, 5], [1, 1]],
                colors: ["Blue", "Orange", "Blue", "Green"]
            }
        },
        5: {
            ladyBugs: {
                quantity: 6,
                positions: [1, 2, 3, 4, 5, 6]
            },
            rocks: {
                quantity: 1,
                positions: [[1, 5]]
            },
            gems: {
                quantity: 4,
                positions: [[1, 4], [4, 2], [0, 1], [3, 3]],
                colors: ["Orange", "Orange", "Blue", "Green"]
            }
        },
        6: {
            ladyBugs: {
                quantity: 6,
                positions: [1, 2, 3, 4, 5, 6]
            },
            rocks: {
                quantity: 2,
                positions: [[2, 6], [4, 3]]
            },
            gems: {
                quantity: 4,
                positions: [[1, 6], [4, 4], [1, 5], [3, 6]],
                colors: ["Green", "Orange", "Blue", "Green"]
            }
        },
        7: {
            ladyBugs: {
                quantity: 6,
                positions: [1, 2, 3, 4, 5, 6]
            },
            rocks: {
                quantity: 2,
                positions: [[1, 4], [2, 3]]
            },
            gems: {
                quantity: 5,
                positions: [[2, 4], [1, 5], [4, 6], [2, 2], [4, 1]],
                colors: ["Green", "Orange", "Blue", "Green", "Blue"]
            }
        },
        8: {
            ladyBugs: {
                quantity: 6,
                positions: [1, 2, 3, 4, 5, 6]
            },
            rocks: {
                quantity: 3,
                positions: [[1, 2], [3, 5], [4, 5]]
            },
            gems: {
                quantity: 5,
                positions: [[3, 4], [4, 4], [0, 5], [2, 2], [4, 1]],
                colors: ["Orange", "Orange", "Blue", "Green", "Blue"]
            }
        },
        9: {
            ladyBugs: {
                quantity: 6,
                positions: [1, 2, 3, 4, 5, 6]
            },
            rocks: {
                quantity: 4,
                positions: [[3, 5], [4, 4],[1, 3], [2, 2]]
            },
            gems: {
                quantity: 5,
                positions: [[4, 5], [3, 4], [2, 3], [1, 2], [0, 3]],
                colors: ["Green", "Orange", "Blue", "Green", "Orange"]
            }
        },
        10: {
            ladyBugs: {
                quantity: 6,
                positions: [1, 2, 3, 4, 5, 6]
            },
            rocks: {
                quantity: 5,
                positions: [[0, 6], [2, 4], [4, 4], [3, 5], [1, 2]]
            },
            gems: {
                quantity: 6,
                positions: [[0, 5], [4, 5], [3, 4], [3, 6], [0, 2], [4, 2]],
                colors: ["Green", "Orange", "Blue", "Green", "Orange", "Blue"]
            }
        }
    }
}

let arcadeGameJSONData = {
    totalGemCounter : 0
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
    if(this.x > 600) {
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
        playerObject.hearts --;
        playerObject.updateHearts();
        // when they touch each other we reset the position of the player
        playerObject.resetPosition();
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Our player
var Player = function(charName, hearts = 3) {
    this.sprite = 'images/char-'+ charName +'.png';
    this.x = gameConfig.player.initialX;
    this.y = gameConfig.player.initialY;
    this.gemCounter = 0;
    this.hearts = 3;
    this.level = 0;
};

Player.prototype.update = function(dt) {
    if(this.y === gameConfig.board.squareInitialY[0]) {
      this.nextLevel(allEnemies, rockObstacle, gemReward);
    }
    gameConfig.htmlObjects.gemCounter.innerHTML = this.gemCounter;
    gameConfig.htmlObjects.levelCounter.innerHTML = "Level " + this.level;
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

Player.prototype.updateHearts = function() {
    let heartContent = "";
    for(var i = 0; i < 3; i++) {
        if(i < this.hearts) {
            heartContent += `<i class="fas fa-heart fa-2x"></i> `;
        } else {
            heartContent += `<i class="far fa-heart fa-2x"></i> `;
        }
    }
    gameConfig.htmlObjects.heartCounter.innerHTML = heartContent;
    if(this.hearts === 0) {
        this.gameOver();
    }
}

Player.prototype.nextLevel = function(enemyObjectArray, rockObjectArray, gemsObjectArray) {
    if(this.level === 10) {
        gameConfig.player.totalGemCounter += this.gemCounter;
        arcadeGameJSONData.totalGemCounter = gameConfig.player.totalGemCounter;
        localStorage.setItem("arcadeGameJSONData", JSON.stringify(arcadeGameJSONData));
        modalGameOverElement.innerHTML =`
        <div class="modal-game-win">
            Congratulations!!!
            <img src="images/lady-bug-lose.png" alt="Lady Bug Beetle flying on Dandelions.">
            <small>You Have Beaten the LadyBugs.</small>
            <div class="divider"></div>
            <small>You have Won ${this.gemCounter} <i class="fas fa-gem"></i></small>
            <a href="#" data-function="playAgain">Play Again</a>
        </div>`;
        modalGameOverElement.classList.remove("invisible");
        this.resetPosition();
    } else {
        this.level ++;
        const levelConfiguration = gameConfig.levelConfiguration[this.level];
        enemyObjectArray.forEach(function(currentValue, index, array) {
            delete array[index];
        });
        if(levelConfiguration.ladyBugs.quantity !== 0) {
            levelConfiguration.ladyBugs.positions.forEach(function(currentValue) {
                enemyObjectArray.push(new Enemy(gameConfig.board.squareInitialY[currentValue]));
            });
        }
        rockObjectArray.forEach(function(currentValue, index, array) {
            delete array[index];
        });
        if(levelConfiguration.rocks.quantity !== 0) {
            levelConfiguration.rocks.positions.forEach(function(currentValue) {
                rockObjectArray.push(new RockObstacle(gameConfig.board.squareInitialX[currentValue[0]], gameConfig.board.squareInitialY[currentValue[1]]));
            });
        }
        gemsObjectArray.forEach(function(currentValue, index, array) {
            delete array[index];
        });
        if(levelConfiguration.gems.quantity !== 0) {
            levelConfiguration.gems.positions.forEach(function(currentValue, index) {
                gemsObjectArray.push(new GemReward(gameConfig.board.squareInitialX[currentValue[0]], gameConfig.board.squareInitialY[currentValue[1]], levelConfiguration.gems.colors[index]));
            });
        }
        this.resetPosition();
    }
}

Player.prototype.gameOver = function() {
    gameConfig.player.totalGemCounter += this.gemCounter;
    arcadeGameJSONData.totalGemCounter = gameConfig.player.totalGemCounter;
    localStorage.setItem("arcadeGameJSONData", JSON.stringify(arcadeGameJSONData));
    const innerHTML =`
     <div class="modal-game-over">
         LadyBugs Won!!!
         <img src="images/lady-bug-win.png" alt="Lady Bug Beetle smiley.">
         <small>You need to be better next time to beat <br> <span>Level ${this.level}<span></small>
         <div class="divider"></div>
         <small>You have Won ${this.gemCounter} <i class="fas fa-gem"></i></small>
         <a href="#" data-function="playAgain">Play Again</a>
     </div>`;
    setTimeout(function() {
        modalGameOverElement.innerHTML = innerHTML;
        modalGameOverElement.classList.toggle("invisible");
    }, 100);
}

// test if the player and an object are colliding
Player.prototype.handleObjectCollision = function(objectArray, positionX, positionY, playerObject, direction) {
    let allowedToMove = true;
    objectArray.forEach(function(object) {
        if(object.sprite === 'images/Rock.png') {
            if(object.x == positionX && object.y == positionY) {
                allowedToMove = false;
            }
        } else if(object.sprite === 'images/GemGreen.png') {
            if(object.x == positionX && object.y == positionY) {
                object.x = 800;
                object.y = 800;
                playerObject.gemCounter += 3;
            }
        } else if(object.sprite === 'images/GemOrange.png') {
            if(object.x == positionX && object.y == positionY) {
                object.x = 800;
                object.y = 800;
                playerObject.gemCounter += 2;
            }
        } else if(object.sprite === 'images/GemBlue.png') {
            if(object.x == positionX && object.y == positionY) {
                object.x = 800;
                object.y = 800;
                playerObject.gemCounter += 1;
            }
        }
    });
    if(allowedToMove) {
        switch (direction) {
            case "left":
                playerObject.x = positionX;
                break;
            case "right":
                playerObject.x = positionX;
                break;
            case "down":
                playerObject.y = positionY;
                break;
            case "up":
                playerObject.y = positionY;
                break;
            default:
        }
    }
    return allowedToMove;
}

// handle what key is pressend and what to do in every case
Player.prototype.handleInput = function(keyPressed) {
    const tempPositionX = this.x;
    const tempPositionY = this.y;
    switch (keyPressed) {
        // the if inside every case is to prevent the player going out of the screen, every side has it limit
        // the movement is 83px vertically and 101px horizontally
        case "left":
            if(this.x !== gameConfig.board.squareInitialX[0]) {
                if(this.handleObjectCollision(rockObstacle, tempPositionX - gameConfig.board.squareWidth, tempPositionY, this, "right")){
                    this.handleObjectCollision(gemReward, tempPositionX - gameConfig.board.squareWidth, tempPositionY, this, "right");
                }
            }
            break;
        case "right":
            if(this.x !== gameConfig.board.squareInitialX[gameConfig.board.squareInitialX.length - 1]) {
                if(this.handleObjectCollision(rockObstacle, tempPositionX + gameConfig.board.squareWidth, tempPositionY, this, "right")){
                    this.handleObjectCollision(gemReward, tempPositionX + gameConfig.board.squareWidth, tempPositionY, this, "right");
                }
            }
            break;
        case "down":
            if(this.y !== gameConfig.board.squareInitialY[gameConfig.board.squareInitialY.length - 1]) {
                if(this.handleObjectCollision(rockObstacle, tempPositionX, tempPositionY + gameConfig.board.squareHeight, this, "down")){
                    this.handleObjectCollision(gemReward, tempPositionX, tempPositionY + gameConfig.board.squareHeight, this, "down");
                }
            }
            break;
        case "up":
            if(this.y !== gameConfig.board.squareInitialY[0]) {
                if(this.handleObjectCollision(rockObstacle, tempPositionX, tempPositionY - gameConfig.board.squareHeight, this, "up")){
                    this.handleObjectCollision(gemReward, tempPositionX, tempPositionY - gameConfig.board.squareHeight, this, "up");
                }
            }
          break;

    }
}

// Our player
var RockObstacle = function(initialX, initialY) {
    this.sprite = 'images/Rock.png';
    this.x = initialX;
    this.y = initialY;
};

// Draw the player on the screen, required method for game
RockObstacle.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Our player
var GemReward = function(initialX, initialY, gemColor) {
    this.sprite = 'images/Gem'+ gemColor +'.png';
    this.x = initialX;
    this.y = initialY;
};

// Draw the player on the screen, required method for game
GemReward.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Our player
var ArrowControls = function(initialX, initialY, direction) {
    this.sprite = 'images/'+ direction +'-arrow.png';
    this.direction = direction;
    this.x = initialX;
    this.y = initialY;
};

// Draw the player on the screen, required method for game
ArrowControls.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

ArrowControls.prototype.update = function(dt) {
    this.x = player.x + gameConfig.arrowsOffsetValues[this.direction].offsetX;
    this.y = player.y + gameConfig.arrowsOffsetValues[this.direction].offsetY;
    if(player.y === 570 && this.direction == "down") {
        this.y = 900;
    }
};

ArrowControls.prototype.handleTouch = function(touchX, touchY) {
    if(touchX > this.x &&
        touchX < this.x + gameConfig.arrowDimentions.valueX &&
        touchY > this.y &&
        touchY < this.y + gameConfig.arrowDimentions.valueY) {
            player.handleInput(this.direction);
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let rockObstacle = [];
let gemReward = [];
let allEnemies = [];
let player;
let arrows = [];
let selectedHero = "heroBoy";


//element declaration
const heroInfoElement = document.querySelectorAll(".hero-info");
const startGameButtonElement = document.getElementById("startGame");
const modalHeroSelectionElement = document.getElementById("modalHeroSelection");
const modalGameOverElement = document.getElementById("modalGameOver");
const playAgainElement = document.getElementById("playAgain");
const gameOverLevelElement = document.getElementById("gameOverLevel");


document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("arcadeGameJSONData") !== null) {
        arcadeGameJSONData = JSON.parse(localStorage.getItem("arcadeGameJSONData"));
    }
    gameConfig.player.totalGemCounter = arcadeGameJSONData.totalGemCounter;
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    if(player) {
        player.handleInput(allowedKeys[e.keyCode]);
    }
});

document.addEventListener("touchstart", function(evt) {
    const canvasObject = document.querySelector("canvas").getBoundingClientRect();
    arrows.forEach(function(arrow) {
        arrow.handleTouch(evt.changedTouches[0].pageX - canvasObject.left, evt.changedTouches[0].pageY - canvasObject.top);
    });
});


document.body.addEventListener("click", function(evt) {
    let dataReferenceObject;
    if(dataReferenceObject = evt.target.getAttribute('data-reference')) {
        heroInfoElement.forEach(function(currentValue) {
          currentValue.className = "hero-info";
        });
        document.getElementById(dataReferenceObject).classList.add("active");
        selectedHero = dataReferenceObject;
    } else if(dataReferenceObject = evt.target.getAttribute('data-function')) {
        modalHeroSelection.classList.remove("invisible");
        modalGameOverElement.classList.add("invisible");
    } else if(dataReferenceObject = evt.target.getAttribute('data-section-reference')) {
        document.querySelectorAll("[data-toggle=modal]").forEach(function(currentValue) {
            currentValue.classList.add("invisible");
        });
        document.querySelectorAll("[data-section-reference]").forEach(function(currentValue) {
            currentValue.classList.remove("active");
        });
        document.getElementById(dataReferenceObject).classList.remove("invisible");
        evt.target.classList.add("active");
    }
});

startGameButtonElement.addEventListener("click", function() {
    player = new Player(gameConfig.heros[selectedHero]);
    player.level = 0;
    player.nextLevel(allEnemies, rockObstacle, gemReward);
    arrows = [new ArrowControls(gameConfig.player.initialX + gameConfig.arrowsOffsetValues.up.offsetX, gameConfig.player.initialY + gameConfig.arrowsOffsetValues.up.offsetY, "up"),
             new ArrowControls(gameConfig.player.initialX + gameConfig.arrowsOffsetValues.down.offsetX, gameConfig.player.initialY + gameConfig.arrowsOffsetValues.down.offsetY, "down"),
             new ArrowControls(gameConfig.player.initialX + gameConfig.arrowsOffsetValues.left.offsetX, gameConfig.player.initialY + gameConfig.arrowsOffsetValues.left.offsetY, "left"),
             new ArrowControls(gameConfig.player.initialX + gameConfig.arrowsOffsetValues.right.offsetX, gameConfig.player.initialY + gameConfig.arrowsOffsetValues.right.offsetY, "right")]
    gameConfig.htmlObjects.heartCounter.innerHTML = '<i class="fas fa-heart fa-2x"></i> <i class="fas fa-heart fa-2x"></i> <i class="fas fa-heart fa-2x"></i> ';
    modalHeroSelectionElement.classList.add("invisible");
});


function checkMobileDesktop() {
     if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ){
         return true
      }
     else {
        return false
      }
}
