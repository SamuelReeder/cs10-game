"use strict";
/* 
 * Copyright (c) 2012, 2016 Carson Cheng.
 * Licensed under the MIT-License (http://opensource.org/licenses/MIT)
 * which can be found in the file MIT-LICENSE.txt in the LICENSE directory
 * at the root of this project distribution.
 */
var backgroundGroup1 = "backgroundGroup";
var itemsGroup1 = "itemsGroup";
var playerGroup1 = "playerGroup";
var animationsGroup1 = "animationsGroup";
var textGroup1 = "textGroup";
var frontTextGroup = "frontTextGroup";
var bulletGroup1 = "bulletGroup";
var instructionsGroup = "instructionsGroup";

var lines1Info = { "id": "lines1", "width": 200, "height": 480, "anim": newGQAnimation("img/lines.png", 3, 200, 200, $.gQ.ANIMATION_HORIZONTAL), "xPos": 215, "yPos": 5000, "xSpeed": 0, "ySpeed": 0 };

var topViewRoad1Info = { "id": "topViewRoad1", "width": 640, "height": 480, "anim": newGQAnimation("img/topViewRoad.png"), "xPos": 0, "yPos": 0, "xSpeed": 0, "ySpeed": 0 };

var splashscreen1Info = { "id": "splashscreen1", "width": 640, "height": 480, "anim": newGQAnimation("img/splashscreen.png"), "xPos": 0, "yPos": 0, "xSpeed": 0, "ySpeed": 0 };

var arena1Info = { "id": "arena1", "width": 640, "height": 480, "anim": newGQAnimation("img/arena.png"), "xPos": 0, "yPos": 0, "xSpeed": 0, "ySpeed": 0 };

var guy1Info = {
    "id": "guy1", "width": 29, "height": 69,
    "anim": newGQAnimation("img/guy.png"),
    "anim2": newGQAnimation("img/guy2.png", 2, 29, 200, $.gQ.ANIMATION_HORIZONTAL),
    "anim3": newGQAnimation("img/guy3.png", 2, 29, 200, $.gQ.ANIMATION_HORIZONTAL),
    "currentAnim": "anim",
    "xPos": 400, "yPos": 180, "ySpeed": 4, "xSpeed": 4
};

var koenigseggAgera1Info = {
    "id": "koenigseggAgera1",
    "width": 176, "height": 66,
    "anim": newGQAnimation("img/koenigseggAgera.png"),
    "doorAnim": newGQAnimation("img/koenigseggDoorOpen.png"),
    "xPos": 30, "yPos": 200,
    "xSpeed": 0, "ySpeed": 0
};

var bugattiTopView1Info = {
    "id": "bugattiTopView1", "status": "race", "angle": 0,
    "width": 50, "height": 135,
    "anim": newGQAnimation("img/bugattiTopView.png", 3, 135, 1000, $.gQ.ANIMATION_VERTICAL),
    "xPos": 300, "yPos": 5000,
    "xSpeed": 0, "ySpeed": 0
};

var lamborghiniTopView1Info = {
    "id": "lamborghiniTopView1", "status": "race", "angle": 0,
    "width": 53, "height": 135,
    "anim": newGQAnimation("img/lamborghiniTopView.png", 3, 135, 1000, $.gQ.ANIMATION_VERTICAL),
    "xPos": 400, "yPos": 5000,
    "xSpeed": 0, "ySpeed": 0
};

var koenigseggTopView1Info = {
    "id": "koenigseggTopView1", "status": "race", "angle": 0,
    "width": 46, "height": 120, "health": 100,
    "anim": newGQAnimation("img/topView.png", 3, 120, 1000, $.gQ.ANIMATION_VERTICAL),
    "xPos": 190, "yPos": 5000,
    "xSpeed": 0, "ySpeed": -1
};

var whiteVan1Info = {
    "id": "whiteVan1", "health": 100, "status": "race", "angle": 270,
    "width": 119, "height": 53,
    "anim": newGQAnimation("img/whiteVan.png", 2, 119, 1000, $.gQ.ANIMATION_HORIZONTAL), "currentAnim": 1,
    "deadAnim": newGQAnimation("img/vanDead.png"),
    "xPos": 70, "yPos": 5000,
    "xSpeed": 0, "ySpeed": 0
};

var tank = {
    "id": "tank1",
    "width": 53, "height": 112,
    "anim": newGQAnimation("img/tank.png"),
    "explosionAnim": newGQAnimation("img/explosion.png"),
    "xPos": 320, "yPos": 5000,
    "xSpeed": 0, "ySpeed": 0,
    "health": 200
};

//text Sprites
var splashscreentextInfo = { "id": "splashscreentext", "width": 100, "height": 40, };
var tankHealthTextInfo = { "id": "tankHealthText", "width": 100, "height": 20, "xPos": -200, "yPos": 0 };
var playerHealthTextInf0 = { "id": "playerHealthInfo", "width": 100, "height": 20, "xPos": -200, "yPos": 0 };
var instructionsTextInfo = { "id": "instructionsText", "width": 640, "height": 480, "xPos": 0, "yPos": -480, "ySpeed": 0, "xSpeed": 0 };
var openInstructions = { "id": "openInstructionsText", "width": 200, "height": 100, "xPos": 500, "yPos": 0 }
var gameOverTextInfo = { "id": "gameOverText", "width": 640, "height": 480, "xPos": -640, "yPos": 0, "xSpeed": 0, "ySpeed": 0 };
var areneCountdownInfo = { "id": "arenaCountdown", "width": 130, "height": 100, "xPos": -640, "yPos": 0 }
var successTextInfo = { "id": "sucessText", "width": 640, "height": 480, "xPos": -640, "yPos": 0 };

var index;
var allBullets = [];
function addBullet() {
    index = allBullets.length;
    allBullets[index] = {
        "id": "bullet" + index,
        "width": 5,
        "height": 5,
        "xPos": tank["xPos"],
        "yPos": tank["yPos"] + tank["height"] / 2,
        "anim": newGQAnimation("img/bullet.png"),
        "xSpeed": tank["xSpeed"] * 2,
        "ySpeed": tank["ySpeed"] * 2
    }
    createSpriteInGroup(bulletGroup1, allBullets[index]["id"], allBullets[index]["anim"], allBullets[index]["width"], allBullets[index]["height"], allBullets[index]["xPos"], allBullets[index]["yPos"]);
};

function setup() {

    createGroupInPlayground(backgroundGroup1);
    createGroupInPlayground(itemsGroup1);
    createGroupInPlayground(playerGroup1);
    createGroupInPlayground(animationsGroup1);
    createGroupInPlayground(bulletGroup1);
    createGroupInPlayground(textGroup1);
    createGroupInPlayground(frontTextGroup);
    createGroupInPlayground(instructionsGroup);

    createSpriteInGroup(backgroundGroup1, arena1Info["id"], arena1Info["anim"], arena1Info["width"], arena1Info["height"]);
    createSpriteInGroup(backgroundGroup1, topViewRoad1Info["id"], topViewRoad1Info["anim"], topViewRoad1Info["width"], topViewRoad1Info["height"]);
    createSpriteInGroup(backgroundGroup1, splashscreen1Info["id"], splashscreen1Info["anim"], splashscreen1Info["width"], splashscreen1Info["height"]);

    createSpriteInGroup(playerGroup1, guy1Info["id"], guy1Info["anim"], guy1Info["width"], guy1Info["height"], guy1Info["xPos"], guy1Info["yPos"]);
    createSpriteInGroup(playerGroup1, koenigseggAgera1Info["id"], koenigseggAgera1Info["anim"], koenigseggAgera1Info["width"], koenigseggAgera1Info["height"], koenigseggAgera1Info["xPos"], koenigseggAgera1Info["yPos"]);
    createSpriteInGroup(animationsGroup1, lines1Info["id"], lines1Info["anim"], lines1Info["width"], lines1Info["height"], lines1Info["xPos"], lines1Info["yPos"]);
    createSpriteInGroup(animationsGroup1, bugattiTopView1Info["id"], bugattiTopView1Info["anim"], bugattiTopView1Info["width"], bugattiTopView1Info["height"], bugattiTopView1Info["xPos"], bugattiTopView1Info["yPos"]);
    createSpriteInGroup(animationsGroup1, whiteVan1Info["id"], whiteVan1Info["anim"], whiteVan1Info["width"], whiteVan1Info["height"], whiteVan1Info["xPos"], whiteVan1Info["yPos"]);

    createSpriteInGroup(animationsGroup1, lamborghiniTopView1Info["id"], lamborghiniTopView1Info["anim"], lamborghiniTopView1Info["width"], lamborghiniTopView1Info["height"], lamborghiniTopView1Info["xPos"], lamborghiniTopView1Info["yPos"]);
    createSpriteInGroup(animationsGroup1, koenigseggTopView1Info["id"], koenigseggTopView1Info["anim"], koenigseggTopView1Info["width"], koenigseggTopView1Info["height"], koenigseggTopView1Info["xPos"], koenigseggTopView1Info["yPos"]);
    createSpriteInGroup(animationsGroup1, tank["id"], tank["anim"], tank["width"], tank["height"], tank["xPos"], tank["yPos"]);

    createTextSpriteInGroup(instructionsGroup, instructionsTextInfo["id"], instructionsTextInfo["width"], instructionsTextInfo["height"], instructionsTextInfo["xPos"], instructionsTextInfo["yPos"]);
    sprite(instructionsTextInfo["id"]).html("<br><b><u>INSTRUCTIONS</b></u></br><br>(W) Forward (A) Left (S) Backwards (D) Right</b><br></br><br><u>First Stage:</u></br>Move the person to the vehcicle<br></br><br><u>Second Stage:</u></br>Win the race or push all vehicles off the track<br></br><br><u>Third Stage:</u></br>Survive from the tank until the reinforcements arrive <br>Do <b>NOT</b> get hit by the tank (instant death) or its bullets (-10 HP)</br><br></br>Press <u>SPACE</u> to close instructions<br></br>Press <u>F5</u> to restart");
    sprite(instructionsTextInfo["id"]).css("background-color", "rgba(0, 0, 0, 0.8)");
    sprite(instructionsTextInfo["id"]).css("font-family", "Verdana");
    sprite(instructionsTextInfo["id"]).css("color", "white");
    sprite(instructionsTextInfo["id"]).css("font-size", "1em");
    sprite(instructionsTextInfo["id"]).css("text-align", "center");
    sprite(instructionsTextInfo["id"]).css("text-shadow", "2px 2px 2px black");
    sprite(instructionsTextInfo["id"]).css("margin", "0");

    createTextSpriteInGroup(textGroup1, openInstructions["id"], openInstructions["width"], openInstructions["height"], openInstructions["xPos"], openInstructions["yPos"]);
    sprite(openInstructions["id"]).html("Press I to open instructions");
    sprite(openInstructions["id"]).css("background-color", "transparent");
    sprite(openInstructions["id"]).css("font-family", "Verdana");
    sprite(openInstructions["id"]).css("color", "white");
    sprite(openInstructions["id"]).css("font-size", "0.6em");
    sprite(openInstructions["id"]).css("text-shadow", "2px 2px 2px black");
    sprite(openInstructions["id"]).css("margin", "0");

    createTextSpriteInGroup(textGroup1, splashscreen1Info["id"], splashscreen1Info["width"], splashscreen1Info["height"]);
    sprite(splashscreen1Info["id"]).html("<b>Speedsters</b>");
    sprite(splashscreen1Info["id"]).css("color", "rgb(255, 255, 255)");
    sprite(splashscreen1Info["id"]).css("font-family", "Bangers");
    sprite(splashscreen1Info["id"]).css("font-size", "4em");
    sprite(splashscreen1Info["id"]).css("text-align", "center");
    sprite(splashscreen1Info["id"]).css("text-shadow", "4px 4px 10px purple");
    sprite(splashscreen1Info["id"]).css("padding-top", "15px");
    ``
    createTextSpriteInGroup(frontTextGroup, gameOverTextInfo["id"], gameOverTextInfo["width"], gameOverTextInfo["height"], gameOverTextInfo["xPos"], gameOverTextInfo["yPos"]);
    sprite(gameOverTextInfo["id"]).html("<b><u>GAMEOVER!</u></br>Press F5 to restart");
    sprite(gameOverTextInfo["id"]).css("color", "rgb(255, 0, 0)");
    sprite(gameOverTextInfo["id"]).css("font-family", "Bangers");
    sprite(gameOverTextInfo["id"]).css("font-size", "6em");
    sprite(gameOverTextInfo["id"]).css("padding-top", "60px");
    sprite(gameOverTextInfo["id"]).css("text-align", "center");
    sprite(gameOverTextInfo["id"]).css("text-shadow", "4px 4px 10px orange");
    sprite(gameOverTextInfo["id"]).css("background-color", "transparent");

    createTextSpriteInGroup(frontTextGroup, successTextInfo["id"], successTextInfo["width"], successTextInfo["height"], successTextInfo["xPos"], successTextInfo["yPos"]);
    sprite(successTextInfo["id"]).html("<br><u>VICTORY!</u></br>");
    sprite(successTextInfo["id"]).css("color", "rgb(0, 0, 200)");
    sprite(successTextInfo["id"]).css("font-family", "Bangers");
    sprite(successTextInfo["id"]).css("font-size", "7em");
    sprite(successTextInfo["id"]).css("padding-top", "50px");
    sprite(successTextInfo["id"]).css("text-align", "center");
    sprite(successTextInfo["id"]).css("text-shadow", "4px 4px 10px green"); 2
    sprite(successTextInfo["id"]).css("background-color", "transparent")

    createTextSpriteInGroup(textGroup1, tankHealthTextInfo["id"], tankHealthTextInfo["width"], tankHealthTextInfo["height"], tankHealthTextInfo["xPos"], tankHealthTextInfo["yPos"]);
    sprite(tankHealthTextInfo["id"]).text("HP: " + tank["health"]);
    sprite(tankHealthTextInfo["id"]).css("color", "rgb(0, 0, 0)");
    sprite(tankHealthTextInfo["id"]).css("background-color", "transparent");
    sprite(tankHealthTextInfo["id"]).css("font-size", "1.2em");
    sprite(tankHealthTextInfo["id"]).css("text-shadow", "2px 2px 5px red");
    sprite(tankHealthTextInfo["id"]).css("font-family", "Bangers");

    createTextSpriteInGroup(textGroup1, playerHealthTextInf0["id"], playerHealthTextInf0["width"], playerHealthTextInf0["height"], playerHealthTextInf0["xPos"], playerHealthTextInf0["yPos"]);
    sprite(playerHealthTextInf0["id"]).text("HP: " + koenigseggTopView1Info["health"]);
    sprite(playerHealthTextInf0["id"]).css("color", "rgb(140, 255, 0)");
    sprite(playerHealthTextInf0["id"]).css("background-color", "transparent")
    sprite(playerHealthTextInf0["id"]).css("font-size", "1.2em");
    sprite(playerHealthTextInf0["id"]).css("text-shadow", "2px 2px 5px blue");
    sprite(playerHealthTextInf0["id"]).css("font-family", "Bangers");

    createTextSpriteInGroup(textGroup1, areneCountdownInfo["id"], areneCountdownInfo["width"], areneCountdownInfo["height"], areneCountdownInfo["xPos"], areneCountdownInfo["yPos"]);
    sprite(areneCountdownInfo["id"]).text("Survive for: " + arenaTime);
    sprite(areneCountdownInfo["id"]).css("color", "rgb(0, 0, 0)");
    sprite(areneCountdownInfo["id"]).css("background-color", "transparent")
    sprite(areneCountdownInfo["id"]).css("font-size", "1.2em");
    sprite(areneCountdownInfo["id"]).css("font-family", "Bangers");

    spriteRotate(whiteVan1Info["id"], 270);
}; // end of setup()

var arenaActive = "initial";

var vechicleRan1;
var vechicleRan2;
var vechicleRan3;

const origin = 0;

function instructions() {
    if (getKeyState(73)) {
        instructionsTextInfo["ySpeed"] = 20;
    }
    if (instructionsTextInfo["yPos"] >= origin) {
        instructionsTextInfo["ySpeed"] = 0;
        instructionsTextInfo["yPos"] = origin;
    }
    if (getKeyState(32)) {
        instructionsTextInfo["ySpeed"] = -20;
    }
    if (instructionsTextInfo["yPos"] < -480) {
        instructionsTextInfo["yPos"] = -480;
        instructionsTextInfo["ySpeed"] = 0;
    }
};

function gameOver() {
    gameOverTextInfo["xPos"] += gameOverTextInfo["xSpeed"];
    gameOverTextInfo["yPos"] += gameOverTextInfo["ySpeed"];
    if (arenaActive == "gameOver") {
        if (gameOverTextInfo["xPos"] < -50) {
            gameOverTextInfo["xSpeed"] = 10;
        } else if (gameOverTextInfo["xPos"] >= -50 && gameOverTextInfo["xPos"] < -5) {
            gameOverTextInfo["xSpeed"] = 0.15;
        } else {
            gameOverTextInfo["xSpeed"] = 0;
        }
    }
    spriteSetXY(gameOverTextInfo["id"], gameOverTextInfo["xPos"], gameOverTextInfo["yPos"]);
};
function moveSpriteNoWrap2(Info) {
    Info["xPos"] += Info["xSpeed"];
    Info["yPos"] += Info["ySpeed"];
    spriteSetXY(Info["id"], Info["xPos"], Info["yPos"]);
};

function movement2(Info) {
    if (getKeyState(87)) {
        Info["ySpeed"] = -1;
    }
    if (getKeyState(83)) {
        Info["ySpeed"] = 1;
    }
    if (getKeyState(68)) {
        Info["xSpeed"] = 3;
        if (Info["currentAnim"] != "anim3") {
            spriteSetAnimation(Info["id"], Info["anim3"])
            Info["currentAnim"] = "anim3";
        }
    }
    if (getKeyState(65)) {
        Info["xSpeed"] = -3;
        if (Info["currentAnim"] != "anim2") {
            spriteSetAnimation(Info["id"], Info["anim2"])
            Info["currentAnim"] = "anim2";
        }
    }
    if (!getKeyState(87) && !getKeyState(83) && !getKeyState(68) && !getKeyState(65)) {
        Info["ySpeed"] = 0;
        Info["xSpeed"] = 0;
        spriteSetAnimation(Info["id"], Info["anim"]);
        Info["currentAnim"] = "anim";
    }
    if (Info["xPos"] > PLAYGROUND_WIDTH - guy1Info["width"]) {
        Info["xPos"] = PLAYGROUND_WIDTH - guy1Info["width"];
    }
    if (Info["xPos"] < origin) {
        Info["xPos"] = origin;
    }
    if (Info["yPos"] > 350 && Info["yPos"] < 480) {
        Info["yPos"] = 350;
    }
    if (Info["yPos"] < 150) {
        Info["yPos"] = 150;
    }
};

function start() {
    spriteSetAnimation(koenigseggAgera1Info["id"], koenigseggAgera1Info["doorAnim"]);
    var timeoutTime = setTimeout(timeout, 1000);
    guy1Info["yPos"] = 100000;
    spriteSetXY(guy1Info["id"], guy1Info["xPos"], guy1Info["yPos"]);
};

function timeout() {
    spriteSetAnimation(koenigseggAgera1Info["id"], koenigseggAgera1Info["anim"]);
    koenigseggAgera1Info["xSpeed"] = 6;
    koenigseggAgera1Info["ySpeed"] = 0.8;
};

function guyFunc() {
    if (guy1Info["yPos"] > 480) {
        koenigseggAgera1Info["xPos"] += koenigseggAgera1Info["xSpeed"];
        koenigseggAgera1Info["yPos"] += koenigseggAgera1Info["ySpeed"];
        spriteSetXY(koenigseggAgera1Info["id"], koenigseggAgera1Info["xPos"], koenigseggAgera1Info["yPos"]);

    }
};

function car(Info) {
    if (arenaActive == "false") {
        Info["xPos"] += Info["xSpeed"];
        Info["yPos"] += Info["ySpeed"];
        Info["xSpeed"] = Info["xSpeed"] * 0.9;
        spriteSetXY(Info["id"], Info["xPos"], Info["yPos"]);
        if (Info["xPos"] > 520) {
            Info["status"] = "collision";
            Info["xSpeed"] = 1.5;
            Info["ySpeed"] = 4;
            var epicInterval = setInterval(function () { angleChange(Info) }, 300);
            spriteRotate(Info["id"], Info["angle"]);
        }
        if (Info["xPos"] < 50) {
            Info["status"] = "collision";
            Info["xSpeed"] = -1.5;
            Info["ySpeed"] = 4;
            var epicInterval = setInterval(function () { angleChange(Info) }, 300);
            spriteRotate(Info["id"], Info["angle"]);
            Info["currentAnim"] = 2;
        }
        if (Info["currentAnim"] == 2) {
            spriteSetAnimation(whiteVan1Info["id"], whiteVan1Info["deadAnim"]);
        }
    }
};

function raceCollision(car1, car2) {
    if (car2["xPos"] < 520 && car2["xPos"] > 50) {
        car2["xSpeed"] += car1["xSpeed"];
        car2["ySpeed"] += car1["ySpeed"];
    }
};

function angleChange(Info) {
    if (Info["xSpeed"] > origin) {
        Info["angle"] = Info["angle"] + 1;
    }
    if (Info["xSpeed"] < origin) {
        Info["angle"] = Info["angle"] - 1;
    }
};

function randomness() {
    vechicleRan1 = Math.random();
    vechicleRan2 = Math.random();
    vechicleRan3 = Math.random();
};

function carRandom(Info, cars) {
    if (cars["status"] != "collision") {
        if (Info >= 0.7) {
            cars["ySpeed"] = Info * -1.5;
        }
        if (Info >= 0.5 && Info < 0.7) {
            cars["ySpeed"] = Info * -2;
        }
        if (Info >= 0.3 && Info < 0.5) {
            cars["ySpeed"] = Info * -2.1;
        }
        if (Info >= 0.1 && Info < 0.3) {
            cars["ySpeed"] = Info * -2.5;
        }
        if (Info > 0 && Info < 0.1) {
            cars["ySpeed"] = Info * -13;
        }
    }
};

function movement3(Info) {
    Info["xPos"] += Info["xSpeed"];
    Info["yPos"] += Info["ySpeed"];
    if (getKeyState(87)) {
        Info["ySpeed"] = -1.5;
    }
    if (getKeyState(83)) {
        Info["ySpeed"] = 1;
    }
    if (getKeyState(68)) {
        Info["xSpeed"] = 1.5;
    }
    if (getKeyState(65)) {
        Info["xSpeed"] = -1.5;
    }
    if (!getKeyState(68) && !getKeyState(65)) {
        Info["xSpeed"] = 0;
    }
    spriteSetXY(Info["id"], Info["xPos"], Info["yPos"]);

    if (Info["xPos"] > 520) {
        Info["xSpeed"] = 1.5;
        Info["ySpeed"] = 4;
        var epicInterval = setInterval(function () { angleChange(Info) }, 100);
        spriteRotate(Info["id"], Info["angle"]);
    }
    if (Info["xPos"] < 50) {
        Info["xSpeed"] = -1.5;
        Info["ySpeed"] = 4;
        var epicInterval = setInterval(function () { angleChange(Info) }, 100);
        spriteRotate(Info["id"], Info["angle"]);
        Info["currentAnim"] = 2;
    }
};

function movement4() {
    if (getKeyState(87) && getKeyState(65) && !getKeyState(68) && !getKeyState(83)) {
        koenigseggTopView1Info["angle"] += -2;
        koenigseggTopView1Info["ySpeed"] = -3;
    }
    if (getKeyState(87) && getKeyState(68) && !getKeyState(65) && !getKeyState(83)) {
        koenigseggTopView1Info["angle"] += 2;
        koenigseggTopView1Info["ySpeed"] = -3;
    }
    if (getKeyState(83) && getKeyState(65) && !getKeyState(68) && !getKeyState(87)) {
        koenigseggTopView1Info["angle"] += -2;
        koenigseggTopView1Info["ySpeed"] = 3;
    }
    if (getKeyState(83) && getKeyState(68) && !getKeyState(65) && !getKeyState(87)) {
        koenigseggTopView1Info["angle"] += 2;
        koenigseggTopView1Info["ySpeed"] = 3;
    }
    if (getKeyState(87) && !getKeyState(65) && !getKeyState(68) && !getKeyState(83)) {
        koenigseggTopView1Info["ySpeed"] = -3;
    }
    if (getKeyState(83) && !getKeyState(65) && !getKeyState(68) && !getKeyState(87)) {
        koenigseggTopView1Info["ySpeed"] = 3;
    }
    if (getKeyState(68) && !getKeyState(65) && !getKeyState(87) && !getKeyState(83))  {
        koenigseggTopView1Info["angle"] += 2;
    }
    if (getKeyState(65) && !getKeyState(87) && !getKeyState(68) && !getKeyState(83)) {
        koenigseggTopView1Info["angle"] += -2;
    }
    if (!getKeyState(87) && !getKeyState(83) && !getKeyState(68) && !getKeyState(65)) {
        koenigseggTopView1Info["ySpeed"] = 0;
        koenigseggTopView1Info["xSpeed"] = 0;
    }

    if (koenigseggTopView1Info["xPos"] > PLAYGROUND_WIDTH + 50) {
        koenigseggTopView1Info["xPos"] = -1 * koenigseggTopView1Info["height"];
    }

    if (koenigseggTopView1Info["xPos"] < -1 * koenigseggTopView1Info["height"]) {
        koenigseggTopView1Info["xPos"] = PLAYGROUND_WIDTH;
    }
    if (koenigseggTopView1Info["yPos"] > PLAYGROUND_HEIGHT + 50) {
        koenigseggTopView1Info["yPos"] = -1 * koenigseggTopView1Info["height"];
    }
    if (koenigseggTopView1Info["yPos"] < -1 * koenigseggTopView1Info["height"]) {
        koenigseggTopView1Info["yPos"] = PLAYGROUND_HEIGHT;
    }
    spriteRotate(koenigseggTopView1Info["id"], koenigseggTopView1Info["angle"]);

    koenigseggTopView1Info["xPos"] -= koenigseggTopView1Info["ySpeed"] * Math.sin(koenigseggTopView1Info["angle"] * Math.PI / 180);
    koenigseggTopView1Info["yPos"] += koenigseggTopView1Info["ySpeed"] * Math.cos(koenigseggTopView1Info["angle"] * Math.PI / 180);

    spriteSetXY(koenigseggTopView1Info["id"], koenigseggTopView1Info["xPos"], koenigseggTopView1Info["yPos"]);
};


function tankBullet() {
    const fire = setTimeout(() => {
        for (let i = 0; i < allBullets.length; i++) {
            let exist =  allBullets[i] ? nextBullet = true : () => {
                nextBullet = false;
                return retry(allBullets[i]);
            }
        }
        return tank[shoot()];
    }, 100);
};

var greaterX;
var greaterY;
var lesserX;
var lesserY;

const nextBullet = true;
function arenaBot() {

    var tankRan = Math.random();

    var distanceX = greaterX - lesserX;
    var distanceY = greaterY - lesserY;

    if (Math.round(tank["xPos"]) < Math.round(koenigseggTopView1Info["xPos"])) {
        tank["xSpeed"] = 1;
        lesserX = tank["xPos"];
        greaterX = koenigseggTopView1Info["xPos"];
        if (distanceX <= 120) {
            tank["xSpeed"] = tank["xSpeed"] * tankRan;
            if (tank["xSpeed"] < 0.4) {
                tank["xSpeed"] = tank["xSpeed"] + 1;
            }
        } else {
            tank["xSpeed"] = 1;
        }
    } else if (tank["xSpeed"] > 0) {
        tank["xSpeed"] = 0;
    }
    if (Math.round(tank["xPos"]) > Math.round(koenigseggTopView1Info["xPos"])) {
        tank["xSpeed"] = -1;
        greaterX = tank["xPos"];
        lesserX = koenigseggTopView1Info["xPos"];
        if (distanceX <= 120) {
            tank["xSpeed"] = tank["xSpeed"] * tankRan;
            if (tank["xSpeed"] > -0.4) {
                tank["xSpeed"] = tank["xSpeed"] + -1;
            }
        } else {
            tank["xSpeed"] = -1;
        }
    } else if (tank["xSpeed"] < 0) {
        tank["xSpeed"] = 0;
    }
    if (Math.round(tank["yPos"]) > Math.round(koenigseggTopView1Info["yPos"])) {
        tank["ySpeed"] = -1;
        greaterY = tank["yPos"];
        lesserY = koenigseggTopView1Info["yPos"];
        if (distanceY <= 120) {
            tank["ySpeed"] = tank["ySpeed"] * tankRan;
            if (tank["ySpeed"] > -0.4) {
                tank["ySpeed"] = tank["ySpeed"] + -1;
            }
        } else {
            tank["ySpeed"] = -1;
        }
    } else if (tank["ySpeed"] < 0) {
        tank["ySpeed"] = 0;
    }
    if (Math.round(tank["yPos"]) < Math.round(koenigseggTopView1Info["yPos"])) {
        lesserY = tank["yPos"];
        tank["ySpeed"] = 1;
        greaterY = koenigseggTopView1Info["yPos"];
        if (distanceY <= 120) {
            tank["ySpeed"] = tank["ySpeed"] * tankRan;
            if (tank["ySpeed"] < 0.4) {
                tank["ySpeed"] = tank["ySpeed"] + 1;
            }
        } else {
            tank["ySpeed"] = 1;
        }
    } else if (tank["ySpeed"] > 0) {
        tank["ySpeed"] = 0;
    }

    let angle = 0;

    if (Math.round(tank["yPos"]) == Math.round(koenigseggTopView1Info["yPos"]) && Math.round(tank["yPos"]) == Math.round(koenigseggTopView1Info["yPos"])) {
        tank["ySpeed"] = 0;
    }
    if (Math.round(tank["xPos"]) == Math.round(koenigseggTopView1Info["xPos"]) && Math.round(tank["xPos"]) == Math.round(koenigseggTopView1Info["xPos"])) {
        tank["xSpeed"] = 0;
    }
    if (Math.round(tank["yPos"]) < Math.round(koenigseggTopView1Info["yPos"]) && Math.round(tank["xPos"]) > Math.round(koenigseggTopView1Info["xPos"]) && tank["xPos"] != koenigseggTopView1Info["xPos"] && tank["yPos"] != koenigseggTopView1Info["yPos"]) {
        angle = 225;
    }
    if (Math.round(tank["yPos"]) < Math.round(koenigseggTopView1Info["yPos"]) && Math.round(tank["xPos"]) < Math.round(koenigseggTopView1Info["xPos"]) && tank["xPos"] != koenigseggTopView1Info["xPos"] && tank["yPos"] != koenigseggTopView1Info["yPos"]) {
        angle = 135;
    }
    if (Math.round(tank["yPos"]) > Math.round(koenigseggTopView1Info["yPos"]) && Math.round(tank["xPos"]) > Math.round(koenigseggTopView1Info["xPos"]) && tank["xPos"] != koenigseggTopView1Info["xPos"] && tank["yPos"] != koenigseggTopView1Info["yPos"]) {
        angle = 315;
    }
    if (Math.round(tank["yPos"]) > Math.round(koenigseggTopView1Info["yPos"]) && Math.round(tank["xPos"]) < Math.round(koenigseggTopView1Info["xPos"]) && tank["xPos"] != koenigseggTopView1Info["xPos"] && tank["yPos"] != koenigseggTopView1Info["yPos"]) {
        angle = 45;
    }
    if (Math.round(tank["yPos"]) == Math.round(koenigseggTopView1Info["yPos"]) && Math.round(tank["xPos"]) > Math.round(koenigseggTopView1Info["xPos"])) {
        angle = 270;
    }
    if (Math.round(tank["yPos"]) == Math.round(koenigseggTopView1Info["yPos"]) && Math.round(tank["xPos"]) < Math.round(koenigseggTopView1Info["xPos"])) {
        angle = 90;
    }
    if (Math.round(tank["xPos"]) == Math.round(koenigseggTopView1Info["xPos"]) && Math.round(tank["yPos"]) > Math.round(koenigseggTopView1Info["xPos"])) {
        angle = 0;
    }
    if (Math.round(tank["xPos"]) == Math.round(koenigseggTopView1Info["xPos"]) && Math.round(tank["yPos"]) < Math.round(koenigseggTopView1Info["yPos"])) {
        angle = 180;
    }
    if (Math.round(tank["xPos"]) == Math.round(koenigseggTopView1Info["xPos"]) && Math.round(tank["yPos"]) == Math.round(koenigseggTopView1Info["yPos"])) {
        angle = 0;
    }
    if (tank["xPos"] > PLAYGROUND_WIDTH) {
        tank["xPos"] = -1 * tank["width"];
    }
    if (tank["xPos"] < -1 * tank["width"]) {
        tank["xPos"] = PLAYGROUND_WIDTH;
    }
    if (tank["yPos"] > PLAYGROUND_HEIGHT) {
        tank["yPos"] = -1 * tank["height"];
    }
    if (tank["yPos"] < -1 * tank["height"]) {
        tank["yPos"] = PLAYGROUND_HEIGHT;
    }
    spriteRotate(tank["id"], angle);

    tank["xPos"] += tank["xSpeed"];
    tank["yPos"] += tank["ySpeed"];

    spriteSetXY(tank["id"], tank["xPos"], tank["yPos"]);
};

function shootBullet() {
    addBullet();
};

function health(spriteInfo, textInfo) {
    textInfo["xPos"] = spriteInfo["xPos"];
    textInfo["yPos"] = spriteInfo["yPos"] + 20;
    spriteSetXY(textInfo["id"], textInfo["xPos"], textInfo["yPos"]);

};

var arenaTime = 45;
if (arenaTime != 0) {
    var arenaTimer = setInterval(decrease, 1000);
}

function success() {
    if (arenaTime == 0 && koenigseggTopView1Info["health"] > 0) {
        arenaActive = "success";
        tank["width"] = 200;
        tank["height"] = 200;
        spriteSetAnimation(tank["id"], tank["explosionAnim"]);
        successTextInfo["xPos"] = 0;
        spriteSetX(successTextInfo["id"], successTextInfo["xPos"]);
    }
};

function decrease() {
    if (arenaActive == "true") {
        if (arenaTime != 0) {
            --arenaTime;
        }
    }
};

var lastShot = 1;
var shotWasAt = 0;
function shoot() {
    shotWasAt = currentDate();
    if (shotWasAt >= lastShot + 1000) {
        addBullet();
        lastShot = currentDate();
    }
};

function arenaCollision() {
    koenigseggTopView1Info["health"] = 0;
};

function dead() {
    if (koenigseggTopView1Info["health"] <= 0) {
        koenigseggTopView1Info["health"] = 0;
        arenaActive = "gameOver";
    }
};
function bulletCollide(collIndex, hitSprite) {
    var hitSpriteName = spriteId(hitSprite);
    var hitSpriteIndex = hitSpriteName.substring(6);
    var hitSpriteInfo = allBullets[hitSpriteIndex];

    hitSpriteInfo["xPos"] = 5000;
    hitSpriteInfo["xSpeed"] = 0;
    hitSpriteInfo["ySpeed"] = 0;
    koenigseggTopView1Info["health"] -= 10;
};

function firstScreen() {
    if (arenaActive == "initial") {
        if (koenigseggAgera1Info["xPos"] === 630) {
            splashscreen1Info["yPos"] = 1000;
            spriteSetY(splashscreen1Info["id"], splashscreen1Info["yPos"]);
            koenigseggTopView1Info["yPos"] = 470;
            spriteSetY(koenigseggTopView1Info["id"], koenigseggTopView1Info["yPos"]);
            spriteSetY(bugattiTopView1Info["id"], 480);
            bugattiTopView1Info["yPos"] = 480;
            spriteSetY(lamborghiniTopView1Info["id"], 490);
            lamborghiniTopView1Info["yPos"] = 490;
            whiteVan1Info["yPos"] = 480;
            spriteSetY(whiteVan1Info["id"], whiteVan1Info["yPos"]);
            whiteVan1Info["ySpeed"] = -3;
            spriteSetY(lines1Info["id"], 0);
            lines1Info["yPos"] = 0;
            removeSprite(koenigseggAgera1Info["id"]);
            removeSprite(splashscreen1Info["id"]);
            removeSprite(guy1Info["id"]);
            arenaActive = "false";
        }
    }
};

function secondScreen() {
    if (arenaActive == "false") {
        if (koenigseggTopView1Info["yPos"] < -1 * koenigseggTopView1Info["height"] && bugattiTopView1Info["yPos"] < -1 * bugattiTopView1Info["height"] && lamborghiniTopView1Info["yPos"] < -1 * lamborghiniTopView1Info["height"] || koenigseggTopView1Info["yPos"] < -1 * koenigseggTopView1Info["height"]) {
            topViewRoad1Info["xPos"] = 1000;
            spriteSetX(topViewRoad1Info["id"], topViewRoad1Info["xPos"]);
            lines1Info["xPos"] = 1000;
            spriteSetX(lines1Info["id"], lines1Info["xPos"]);
            splashscreen1Info["yPos"] = 2000;
            spriteSetY(splashscreen1Info["id"], splashscreen1Info["yPos"]);
            lamborghiniTopView1Info["xPos"] = 1000;
            spriteSetX(lamborghiniTopView1Info["id"], lamborghiniTopView1Info["xPos"]);
            bugattiTopView1Info["xPos"] = 1000;
            whiteVan1Info["xPos"] = 1000;
            spriteSetX(whiteVan1Info["id"], whiteVan1Info["xPos"]);
            spriteSetX(bugattiTopView1Info["id"], bugattiTopView1Info["xPos"]);
            removeSprite(topViewRoad1Info["id"]);
            removeSprite(whiteVan1Info["id"]);
            removeSprite(lines1Info["id"]);
            removeSprite(lamborghiniTopView1Info["id"]);
            removeSprite(bugattiTopView1Info);
            tank["yPos"] = 100;
            spriteSetY(tank["id"], tank["yPos"]);
            koenigseggTopView1Info["yPos"] = 400;
            spriteSetY(koenigseggTopView1Info["id"], 400);
            koenigseggTopView1Info["xPos"] = 320;
            spriteSetX(koenigseggTopView1Info["id"], 320);
            areneCountdownInfo["xPos"] = 7;
            spriteSetX(areneCountdownInfo["id"], areneCountdownInfo["xPos"]);
            arenaActive = "true";
        } if (koenigseggTopView1Info["yPos"] > -1 * koenigseggTopView1Info["height"] && (bugattiTopView1Info["yPos"] < -1 * bugattiTopView1Info["height"] || lamborghiniTopView1Info["yPos"] < -1 * lamborghiniTopView1Info["height"])) {
            arenaActive = "gameOver";
        } if (koenigseggTopView1Info["yPos"] > -1 * koenigseggTopView1Info["height"] && (bugattiTopView1Info["yPos"] < -1 * bugattiTopView1Info["height"] && lamborghiniTopView1Info["yPos"] < -1 * lamborghiniTopView1Info["height"])) {
            arenaActive = "gameOver";
        }
    }
};

//Animations (draw funtion):
var draw = function () {
    for (index = 0; index < allBullets.length; index++) {
        moveSpriteNoWrap2(allBullets[index]);
    };

    sprite(playerHealthTextInf0["id"]).text("HP: " + koenigseggTopView1Info["health"]);
    sprite(areneCountdownInfo["id"]).text("Survive for: " + arenaTime);

    instructions();
    gameOver();
    success();

    firstScreen();
    secondScreen();
    moveSpriteNoWrap2(instructionsTextInfo);
    car(bugattiTopView1Info);
    car(lamborghiniTopView1Info);
    car(whiteVan1Info);

    if (arenaActive == "initial") {
        guyFunc();
        forEach2SpritesHit(guy1Info["id"], koenigseggAgera1Info["id"], start);
        moveSpriteNoWrap2(guy1Info);
        movement2(guy1Info);
    }
    if (arenaActive == "false") {
        forEach2SpritesHit(koenigseggTopView1Info["id"], whiteVan1Info["id"], (function () { raceCollision(koenigseggTopView1Info, whiteVan1Info) }));
        forEach2SpritesHit(koenigseggTopView1Info["id"], bugattiTopView1Info["id"], (function () { raceCollision(koenigseggTopView1Info, bugattiTopView1Info) }));
        forEach2SpritesHit(koenigseggTopView1Info["id"], lamborghiniTopView1Info["id"], (function () { raceCollision(koenigseggTopView1Info, lamborghiniTopView1Info) }));
        forEach2SpritesHit(bugattiTopView1Info["id"], lamborghiniTopView1Info["id"], (function () { raceCollision(bugattiTopView1Info, lamborghiniTopView1Info) }));
        forEach2SpritesHit(bugattiTopView1Info["id"], whiteVan1Info["id"], (function () { raceCollision(bugattiTopView1Info, whiteVan1Info) }));
        forEach2SpritesHit(whiteVan1Info["id"], lamborghiniTopView1Info["id"], (function () { raceCollision(whiteVan1Info, lamborghiniTopView1Info) }));
        movement3(koenigseggTopView1Info);
        carRandom(vechicleRan1, bugattiTopView1Info);
        carRandom(vechicleRan2, lamborghiniTopView1Info);
        carRandom(vechicleRan3, whiteVan1Info);
        randomness();
    }
    if (arenaActive == "true") {
        forEachSpriteGroupCollisionDo(koenigseggTopView1Info["id"], bulletGroup1, bulletCollide);
        forEach2SpritesHit(koenigseggTopView1Info["id"], tank["id"], arenaCollision);
        movement4();
        arenaBot();
        health(koenigseggTopView1Info, playerHealthTextInf0);
        shoot();
        dead();
    }
}; // end of draw() funtion


