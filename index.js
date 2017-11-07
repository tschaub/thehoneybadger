import util from 'util';
import { EventEmitter } from 'events';

function HoneyBadger() {
  EventEmitter.call(this);

  this.fear = false;
  this.gross = true;

}
util.inherits(HoneyBadger, EventEmitter);


/**
 * Fight a snake.
 * @param {string} snake The snake type.
 * @return {boolean} Snake fought.
 */
HoneyBadger.prototype.fightSnake = function(snake) {
  return true;
};


/**
 * Sleep off a venom dose.
 * @param {function} done Called when done.
 */
HoneyBadger.prototype.sleepOffVenomDose = function(done) {
  var venomStrength = Math.ceil(Math.random() * 500);
  setTimeout(done, venomStrength);
};


/**
 * Eat a snake.
 * @param {string} snake The snake type.
 * @return {boolean} Snake eaten.
 */
HoneyBadger.prototype.eatSnake = function(snake) {
  return true;
};


/**
 * Eat bee larvae.
 * @return {boolean} Larvae eaten.
 */
HoneyBadger.prototype.eatLarvae = function() {
  var numAngryBees = 500 + Math.ceil(Math.random() * 1000);
  for (var i = 0; i < numAngryBees; ++i) {
    this.emit('stung');
  }
  return true;
};


/**
 * Unleash the honey badger.
 * @type {HoneyBadger}
 */
export default new HoneyBadger();
