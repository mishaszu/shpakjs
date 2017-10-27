const {P} = require('../constManager')

function Hatch (){
  function tweet(s) {
    return 'test'
  }

  return {
    tweet: tweet
  }
}

module.exports = Hatch()
