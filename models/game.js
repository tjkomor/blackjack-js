var Deck = require('./deck')
var Dealer = require('./dealer')

function Game (dealer, player){
  this.dealer = dealer
  this.player = player
}

Game.prototype.startGame = function(){
  this.dealer.shuffle()
  this.dealer.dealCard(this.player);
  this.dealer.dealCard(this.dealer)
  this.dealer.dealCard(this.player)
  this.dealer.dealCard(this.dealer)
}

Game.prototype.outcome = function(){
  if(this.dealer.score() > this.player.score()){
    return "You lost, pledge."
  } else if(this.dealer.score() === this.player.score()){
    return "Tie"
  } else
  return "You Won!"
}




module.exports = Game
