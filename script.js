/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
var KeyIsDown
const KEY_RIGHT = 39;
const KEY_LEFT = 37;
const KEY_UP = 38;
var spelerX = 200; // x-positie van speler
var spelerY = 650; // y-positie van speler
var vijandX = 1000;   // x-positie van vijand
var vijandY = 650;   // y-positie van vijand
var vijandbeweging = 10
var beweegVijand
var vijandsterkerX = 900;
var vijandsterkerY = 880;
var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel
var aantallevens = 3;
var score = 0; // aantal behaalde punten
var geraaktX = 0;
var geraaktY = 0;
var hardgeraaktX = 0;
var hardgeraaktY = 0;






/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("lightblue")
  rect(0, 20, width - 0 * 0, height - 2 * 20);
//gras
fill ("lightgreen");
rect (0, 680, 4240 - 2 * 400, 2800 - 1 * 2000);
  //detail
fill ("brown");
rect(1000, 400, 80, 300);
fill("green");
ellipse(1040, 350, 280, 280);
//detail2
fill ("brown");
rect(190, 400, 80, 300);
fill("green");
ellipse(240, 350, 280, 280);
};
/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
     fill("red");
  ellipse(x, y, 100, 100
);
  

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};

/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("white");
  ellipse(x, y, 100, 100);
};



/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
 vijandX = vijandX - vijandbeweging
   if (vijandX < 0) 
    vijandX = 1500;
  }

/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
 var beweegSpeler = function() { 

if (keyIsDown (KEY_RIGHT)) {
  spelerX = spelerX + 20;
}

if (keyIsDown (KEY_LEFT)) {
  spelerX = spelerX - 20;
}
if (keyIsDown (KEY_UP)) {
  spelerY = spelerY - 20;
}
  if (!keyIsDown(KEY_UP)) {
    spelerY = spelerY + 60;
    //  spelerX = spelerX - 40;
    if (spelerY > 650) { spelerY = 650 };
  }

};
/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
  geraaktX = spelerX - vijandX 
  geraaktX = aantallevens - 1

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    textSize(35)
  fill("red")
  text("LEVENS", 30, 50);
  text(aantallevens, 72, 100);
  return false;

 

};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1380, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
