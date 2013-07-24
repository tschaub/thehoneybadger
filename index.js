var util = require('util');
var EventEmitter = require('events').EventEmitter;

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
  setTimeout(done, 500);
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
  for (var i = 1; i < 1000; ++i) {
    this.emit('stung');
  }
  return true;
};


/**
 * Unleash the honey badger.
 * @type {HoneyBadger}
 */
exports = module.exports = new HoneyBadger();
