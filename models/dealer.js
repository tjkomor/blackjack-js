var Deck = require('./deck')
var Player = require('./player')

function Dealer(){
  var deck = new Deck
  this.deckOfCards = deck.cards
  this.hand = []
}
Dealer.prototype.dealCard = function(person){
  person.hand.push(this.deckOfCards.shift())
}

Dealer.prototype.score = function (){
  return Number(this.hand[0].split(":")[1]) + Number(this.hand[1].split(":")[1])
}

Dealer.prototype.shuffle = function (){
  this.deckOfCards = shuffle(this.deckOfCards)
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

module.exports = Dealer
