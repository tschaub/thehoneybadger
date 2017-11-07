import hb from './index';
import { expect } from 'chai';

describe('the honey badger', function() {

  it('is fearless', function() {
    expect(hb.fear).to.be.false;
  });

  it('fights snakes', function() {
    expect(hb.fightSnake).to.not.throw(Error);
  });

  it('sleeps off venom doses', function(done) {
    hb.sleepOffVenomDose(done);
  });

  it('eats snakes', function() {
    expect(hb.eatSnake('cobra')).to.be.true;
  });

  it('is gross', function() {
    expect(hb.gross).to.be.true;
  });

  it('gets stung by bees while eating larvae', function() {
    var stings = 0;
    hb.on('stung', function() {
      ++stings;
    });

    hb.eatLarvae();
    expect(stings).to.be.above(500);
  });

});
