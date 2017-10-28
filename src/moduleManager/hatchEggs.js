const {P} = require('../constManager')

function Hatch (){
  function tweet(s) {
    P('start hatching').green()
    return 'test'
  }

  return {
    tweet: tweet
  }
}

module.exports = Hatch()
