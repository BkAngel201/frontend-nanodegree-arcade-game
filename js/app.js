'use strict'
// ---------------------//
//                      //
// Variable Declaration //
//                      //
//----------------------//

// this will get all the variables we will use in the whole project
let gameConfig = {
    // player variables
    player: {
        initialX: 202,
        initialY: 570,
        totalGemCounter: 0,
        achievements: {}
    },
    // this allows the game to collid corrctly
    collision: {
        imageWidth: 75,             // correcting the with of the imagen for realistic collisions when the graphics touch each other
        imageHeight: 83,            // the height of the graphic part of the image
        imageAreaTransparent: 88    // the height of the image that is transparent and we would'nt use to test for collision
    },
    // grid system to allow exact object positioning
    board: {
        squareWidth: 101,
        squareHeight: 83,
        squareInitialY : [-11, 72, 155, 238, 321, 404, 487, 570],
        squareInitialX : [0, 101, 202, 303, 404]
    },
    // objects used inside the game board, info panel
    htmlObjects: {
        gemCounter: document.getElementById("gemCounter"),
        heartCounter: document.getElementById("heartCounter"),
        levelCounter: document.getElementById("levelCounter")
    },
    // reference to the heros img names
    heros: {
        heroBoy: "boy",
        heroCat: "cat-girl",
        heroHorn: "horn-girl",
        heroPink: "pink-girl",
        heroPrincess: "princess-girl"
    },
    // arrows on mobile devices affset respect the player position
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
    // dimension of the arrows to calculate the area of interaction
    arrowDimentions: {
        valueX: 101,
        valueY: 60
    },
    // levels configuration, position of every single object in every level
    levelConfiguration: {
        1: {
            // level 1 configuration
            ladyBugs: {
                // lady bug quantity
                quantity: 3,
                // lady bug position using gameConfig.board.squareInitialY variable for position
                positions: [2, 3, 5]
            },
            rocks: {
                // Rocks quantity
                quantity: 0
            },
            gems: {
                // Gems quantity
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
                // Gems position using pairs [gameConfig.board.squareInitialX, gameConfig.board.squareInitialY]
                // for every gem in array [gem1, gem2, etc]
                positions: [[3, 2], [4, 4]],
                // Gem Color, for every gem in array [gem1Color, gem2Color, etc]
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
                // like gems, Rock position will be using pairs [gameConfig.board.squareInitialX, gameConfig.board.squareInitialY]
                // for every rocks in array [rock1, rock2, etc]
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
                positions: [[4, 5], [4, 3], [2, 3], [1, 2], [0, 3]],
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

// initializing arcadeGameJSONData to defautl values
// this variable will be load with and will be saved to localStorage
let arcadeGameJSONData = {
    totalGemCounter : 0,
    totalDeath: 0,
    totalFinishLevel: 0,
    achievements: {
        completeGame: {
            unlocked: 0
        },
        completeGameWithoutDeath: {
            unlocked: 0
        },
        collectAllGemsInAGame: {
            unlocked: 0
        },
        completeGameWithoutCollectGems: {
            unlocked: 0
        }
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let rockObstacle = [];
let gemReward = [];
let allEnemies = [];
let player;
let arrows = [];

// default hero selected to play
let selectedHero = "heroBoy";


//element declaration used otside the game board
// this element will target the hero selection links
const heroInfoElement = document.querySelectorAll(".hero-info");
// this element will target the button to start the game on modal #modalPlayerInfo
const startGameButtonElement = document.getElementById("startGame");
// this element will target the modal that allows us to start a game
const modalPlayerInfoElement = document.getElementById("modalPlayerInfo");
// this element will target the element taht will appear when the player lose
const modalGameOverElement = document.getElementById("modalGameOver");

// this 3 elements will target the elements inside stats tab in #modalPlayerInfo
const gemsStatsElement = document.getElementById("gemsStats");
const deathsStatsElement = document.getElementById("deathsStats");
const winsStatsElement = document.getElementById("winsStats");




// ---------------------//
//                      //
//  Object Declaration  //
//                      //
//----------------------//

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
          // hearts will decrease
        playerObject.hearts --;
        // global data of death will be updated
        arcadeGameJSONData.totalDeath ++;
        // the graphic representation of the hearts will be updated
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

// required method for game
// will update all the info necesary about player progress
Player.prototype.update = function(dt) {
    // will call nextLevel() when reach the water line
    if(this.y === gameConfig.board.squareInitialY[0]) {
      this.nextLevel(allEnemies, rockObstacle, gemReward);
    }
    // update all Info in the game
    gameConfig.htmlObjects.gemCounter.innerHTML = this.gemCounter;
    gameConfig.htmlObjects.levelCounter.innerHTML = "Level " + this.level;
    updateGameInfo();
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

// update the hearts in the info panel of the game
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
    // if hearts are 0 the game will end and player lose
    if(this.hearts === 0) {
        this.gameOver();
    }
}

// every time this is called game will increase a level
Player.prototype.nextLevel = function(enemyObjectArray, rockObjectArray, gemsObjectArray) {
    // every time a level is increase if it is not the firs once
    // the finsihed levels global information will  be increased
    if(this.level !== 0) {
        arcadeGameJSONData.totalFinishLevel ++;
    }
    // if level ==10 it means that the game is finished
    if(this.level === 10) {
        // test if any achievement was unlocked
        this.achievementUnlocked();
        // the total gems owned for the player is updated
        gameConfig.player.totalGemCounter += this.gemCounter;
        // the info that will be updated on the localstorage is sended to arcadeGameJSONData
        // and stored
        arcadeGameJSONData.achievements = gameConfig.player.achievements;
        arcadeGameJSONData.totalGemCounter = gameConfig.player.totalGemCounter;
        localStorage.setItem("arcadeGameJSONData", JSON.stringify(arcadeGameJSONData));
        // we fill the info of the winning stage on the element #modalGameOver
        modalGameOverElement.innerHTML =`
        <div class="modal-game-win">
            Congratulations!!!
            <img src="images/lady-bug-lose.png" alt="Lady Bug Beetle flying on Dandelions.">
            <small>You Have Beaten the LadyBugs.</small>
            <div class="divider"></div>
            <small>You have Won ${this.gemCounter} <i class="fas fa-gem"></i></small>
            <a href="#" data-function="playAgain">Play Again</a>
        </div>`;
        // show the element #modalgameOver
        modalGameOverElement.classList.remove("invisible");
        this.resetPosition();
        // if the level is not 10 the we need change the level
    } else {
        // level will increase
        this.level ++;
        // retrieve the information of configuration for this new level
        const levelConfiguration = gameConfig.levelConfiguration[this.level];
        // we empty all the objects arrays
        // to load the specific configurtation for this new level
        enemyObjectArray.forEach(function(currentValue, index, array) {
            delete array[index];
        });
        rockObjectArray.forEach(function(currentValue, index, array) {
            delete array[index];
        });
        gemsObjectArray.forEach(function(currentValue, index, array) {
            delete array[index];
        });
        // we noe start to add all the elements to the respective objectArray
        if(levelConfiguration.ladyBugs.quantity !== 0) { //quantity of ladybugs
            levelConfiguration.ladyBugs.positions.forEach(function(currentValue) {
                // go through all the position value using gameConfig.board.squareInitialY
                enemyObjectArray.push(new Enemy(gameConfig.board.squareInitialY[currentValue]));
            });
        }
        if(levelConfiguration.rocks.quantity !== 0) { //quantity of Rocks
            levelConfiguration.rocks.positions.forEach(function(currentValue) {
                // go through all the position pair [positionX, positionY]
                // using gameConfig.board.squareInitialX and squareInitialY
                rockObjectArray.push(new RockObstacle(gameConfig.board.squareInitialX[currentValue[0]], gameConfig.board.squareInitialY[currentValue[1]]));
            });
        }
        if(levelConfiguration.gems.quantity !== 0) { //quantity of Gems
            levelConfiguration.gems.positions.forEach(function(currentValue, index) {
                // go through all the position pair [positionX, positionY]
                // using gameConfig.board.squareInitialX and squareInitialY
                // and color
                gemsObjectArray.push(new GemReward(gameConfig.board.squareInitialX[currentValue[0]], gameConfig.board.squareInitialY[currentValue[1]], levelConfiguration.gems.colors[index]));
            });
        }
        // reset position of the player
        this.resetPosition();
    }
}

// this will be called when the game is over and the player lose
Player.prototype.gameOver = function() {
    // the gems taken on the game will be updated
    gameConfig.player.totalGemCounter += this.gemCounter;
    arcadeGameJSONData.totalGemCounter = gameConfig.player.totalGemCounter;
    // the localStorage variable will all the info will be saved to register the changes
    localStorage.setItem("arcadeGameJSONData", JSON.stringify(arcadeGameJSONData));
    // this is what we show on the #modalGameOver
    const innerHTML =`
     <div class="modal-game-over">
         LadyBugs Won!!!
         <img src="images/lady-bug-win.png" alt="Lady Bug Beetle smiley.">
         <small>You need to be better next time to beat <br> <span>Level ${this.level}<span></small>
         <div class="divider"></div>
         <small>You have Won ${this.gemCounter} <i class="fas fa-gem"></i></small>
         <a href="#" data-function="playAgain">Play Again</a>
     </div>`;
    modalGameOverElement.innerHTML = innerHTML;
    // show the element with the game over info
    modalGameOverElement.classList.toggle("invisible");
}

// this will be called everytime the player moves
// test if the player and an object are colliding
// before move it, so this will be tested before it really moves
Player.prototype.handleObjectCollision = function(objectArray, positionX, positionY, playerObject, direction) {
    // this variable will allow us to move if is true if not the player is colliding with a rock
    let allowedToMove = true;
    // run through all the ObjectArray
    objectArray.forEach(function(object) {
        // if the object sprite is rock then the object is a rock
        if(object.sprite === 'images/Rock.png') {
            // if they collide we arent allowed to move so allowedToMove = false;
            if(object.x == positionX && object.y == positionY) {
                allowedToMove = false;
            }
        // if sprite is gemgreen of blue or orange then the object is a gem
        // we can collect gems so the gems will let us move to they position
        } else if(object.sprite === 'images/GemGreen.png') {
            // if a gem is colliding with us we need to move it out of the screen
            if(object.x == positionX && object.y == positionY) {
                // positioning the gem out of the screen
                object.x = 800;
                object.y = 800;
                // adding the amount of value to gemCounter
                playerObject.gemCounter += 3;
            }
        // same as above to the 3 gems cases
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
    // if allowedToMove is true then the player moves in the correct direction
    if(allowedToMove) {
        // if left or right the movement will be in Xaxis
        // if up or down the movement will be in Yaxis
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
    // return true or false at the end
    return allowedToMove;
}

// handle what key is pressend and what to do in every case
Player.prototype.handleInput = function(keyPressed) {
    // this to variables will be stored the position before the movement
    const tempPositionX = this.x;
    const tempPositionY = this.y;
    switch (keyPressed) {
        // the first if inside every case is to prevent the player going out of the screen,
        // every side has it limit, the movement is 83px vertically and 101px horizontally
        // the second if is to check if the movement will be doing will not be allowed
        // since will be colliding with a rock
        // 2nd if is true means that the space we will be moving is not a rock so we will need to check
        // if it is a gem
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

// here we check if any achievement is unlocked
// and save it new state in the moment the game is finished
Player.prototype.achievementUnlocked = function() {
    // if a achievement unlocked property is 0 means that is not unlocked
    // we will testing it own requeriments
    if(gameConfig.player.achievements.completeGame.unlocked === 0) {
        // if it is called means that the palyer finished the game so unlocked it
        gameConfig.player.achievements.completeGame.unlocked = 1;
    }
    if(gameConfig.player.achievements.completeGameWithoutDeath.unlocked === 0) {
        // if the amount of hearts are 3 means the player dont lose anyone
        if(this.hearts === 3) {
            // unlock this achievement
            gameConfig.player.achievements.completeGameWithoutDeath.unlocked = 1;
        }
    }
    if(gameConfig.player.achievements.completeGameWithoutCollectGems.unlocked === 0) {
        // if gemCounter is 0 means the player dont take any gem in the actuaal game
        if(this.gemCounter === 0) {
            // unlock this achievement
            gameConfig.player.achievements.completeGameWithoutCollectGems.unlocked = 1;
        }
    }
    if(gameConfig.player.achievements.collectAllGemsInAGame.unlocked === 0) {
        // if gemCounter is 70 means the player took all the gems in the actual game
        if(this.gemCounter === 70) {
            // unlock this achievement
            gameConfig.player.achievements.collectAllGemsInAGame.unlocked = 1;
        }
    }
}

// RockObstacle Object
var RockObstacle = function(initialX, initialY) {
    this.sprite = 'images/Rock.png';
    this.x = initialX;
    this.y = initialY;
};

// Draw the rocks on the screen, required method for game
RockObstacle.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Gem Object
var GemReward = function(initialX, initialY, gemColor) {
    this.sprite = 'images/Gem'+ gemColor +'.png';
    this.x = initialX;
    this.y = initialY;
};

// Draw the gems on the screen, required method for game
GemReward.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// ArrowObject for movement on mobile devices
var ArrowControls = function(initialX, initialY, direction) {
    this.sprite = 'images/'+ direction +'-arrow.png';
    this.direction = direction;
    this.x = initialX;
    this.y = initialY;
};

// Draw the arrows on the screen, required method for game,
// if it is running on mobile
ArrowControls.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// update the position of the arrow depending on the player position
// using the gameConfig.arrowsOffsetValues
ArrowControls.prototype.update = function(dt) {
    this.x = player.x + gameConfig.arrowsOffsetValues[this.direction].offsetX;
    this.y = player.y + gameConfig.arrowsOffsetValues[this.direction].offsetY;
    // setting the down arrow out of screen when player is in the initial lane
    if(player.y === 570 && this.direction == "down") {
        this.y = 900;
    }
};

// on touch check if the touch is on the arrow area,
// using gameConfig.arrowDimentions and the position x and y of the
// arrow and the point of touch
ArrowControls.prototype.handleTouch = function(touchX, touchY) {
    if(touchX > this.x &&
        touchX < this.x + gameConfig.arrowDimentions.valueX &&
        touchY > this.y &&
        touchY < this.y + gameConfig.arrowDimentions.valueY) {
            // if the touch is over any arrow it will trigger a movement in the correct direction
            // calling player handleInput
            player.handleInput(this.direction);
    }
};


// ---------------------//
//                      //
//    Event Listeners   //
//                      //
//----------------------//


// on page load we load the info on localstorage arcadeGameJSONData if it existing
document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("arcadeGameJSONData") !== null) {
        arcadeGameJSONData = JSON.parse(localStorage.getItem("arcadeGameJSONData"));
    }
    // we initailize the info we need to start playing
    gameConfig.player.totalGemCounter = arcadeGameJSONData.totalGemCounter;
    gameConfig.player.achievements = arcadeGameJSONData.achievements;
    // update all the content we need with the correct info from
    // arcadeGameJSONData initialized at the beginign or
    // with the info we get from localStorage
    updateGameInfo();
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

// this listen for any touch in the document
document.addEventListener("touchstart", function(evt) {
    // get the position on screen of the canvas object
    const canvasObject = document.querySelector("canvas").getBoundingClientRect();
    arrows.forEach(function(arrow) {
        // test if the touch is on any arrow substracting the x and y values of the touch
        // and the x and y value of the position of the canvasObject
        // this way we know the x and y position of the touch inside the canvasObject
        arrow.handleTouch(evt.changedTouches[0].pageX - canvasObject.left, evt.changedTouches[0].pageY - canvasObject.top);
    });
});

// this will listen for click on the document to handle butons behavior
document.body.addEventListener("click", function(evt) {
    // will store the data-* atribute of the target element
    let dataReferenceObject;
    // if data-reference is set means this is an object inside the hero-info
    if(dataReferenceObject = evt.target.getAttribute('data-reference')) {
        // go through every hero-info elements and remove active class
        heroInfoElement.forEach(function(currentValue) {
          currentValue.className = "hero-info";
        });
        // data-reference=id of it hero-info container so set it to active
        document.getElementById(dataReferenceObject).classList.add("active");
        // select hero change to the id of the selected hero-info
        selectedHero = dataReferenceObject;
    // if data-function is set means this is the button to play again
    // inside modalGameOver
    } else if(dataReferenceObject = evt.target.getAttribute('data-function')) {
        // put invisible the modalGameOver Object and show
        // the modalPlayerInfo Object
        modalPlayerInfoElement.classList.remove("invisible");
        modalGameOverElement.classList.add("invisible");
    // if data-section-reference is set means this a tab link
    } else if(dataReferenceObject = evt.target.getAttribute('data-section-reference')) {
        // we look for all tabs and set all to invisible
        document.querySelectorAll("[data-toggle=tabs]").forEach(function(currentValue) {
            currentValue.classList.add("invisible");
        });
        //we take away the active state from all the tabs
        document.querySelectorAll("[data-section-reference]").forEach(function(currentValue) {
            currentValue.classList.remove("active");
        });
        // set the current object with datareferenceObject id to visible
        // since is the one we need to see
        document.getElementById(dataReferenceObject).classList.remove("invisible");
        // set the clicked tab to active
        evt.target.classList.add("active");
    }
});

// this listen for a click in the start new game button
startGameButtonElement.addEventListener("click", function() {
    // initialize the player object with the selectedHero
    player = new Player(gameConfig.heros[selectedHero]);
    // call for first time the nextlevel() iside player Object to load the configuration of the first level
    player.nextLevel(allEnemies, rockObstacle, gemReward);
    // set the position of the arrows around the player position
    arrows = [new ArrowControls(gameConfig.player.initialX + gameConfig.arrowsOffsetValues.up.offsetX, gameConfig.player.initialY + gameConfig.arrowsOffsetValues.up.offsetY, "up"),
             new ArrowControls(gameConfig.player.initialX + gameConfig.arrowsOffsetValues.down.offsetX, gameConfig.player.initialY + gameConfig.arrowsOffsetValues.down.offsetY, "down"),
             new ArrowControls(gameConfig.player.initialX + gameConfig.arrowsOffsetValues.left.offsetX, gameConfig.player.initialY + gameConfig.arrowsOffsetValues.left.offsetY, "left"),
             new ArrowControls(gameConfig.player.initialX + gameConfig.arrowsOffsetValues.right.offsetX, gameConfig.player.initialY + gameConfig.arrowsOffsetValues.right.offsetY, "right")];
    // initialize the hearts graphic conter on the screen
    gameConfig.htmlObjects.heartCounter.innerHTML = '<i class="fas fa-heart fa-2x"></i> <i class="fas fa-heart fa-2x"></i> <i class="fas fa-heart fa-2x"></i> ';
    // hide the #modalPlayerInfo
    modalPlayerInfoElement.classList.add("invisible");
});



// ---------------------//
//                      //
//    Extra functions   //
//                      //
//----------------------//

// this function will look if the browser of the user is on mobile device or not
// taked from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
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

// this function update all the info needed in the game out of the gameboard
function updateGameInfo() {
    gemsStatsElement.innerHTML = arcadeGameJSONData.totalGemCounter;
    deathsStatsElement.innerHTML = arcadeGameJSONData.totalDeath
    winsStatsElement.innerHTML = arcadeGameJSONData.totalFinishLevel;
    // change the trophy image of the achievement to unlocked if they are actually unlocked
    document.querySelectorAll("[data-rel-achievement]:not(.unlocked)").forEach(function(currentValue) {
        if(gameConfig.player.achievements[currentValue.getAttribute("data-rel-achievement")].unlocked === 1) {
            currentValue.classList.add("unlocked");
        }
    });
};
