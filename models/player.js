function Player (){
  this.hand = []
}

Player.prototype.score = function (){
  return Number(this.hand[0].split(":")[1]) + Number(this.hand[1].split(":")[1])
}


module.exports = Player
