const {P} = require('../constManager')

function Heat(){
  function tweet(array) {
    array.forEach((ele) => {
      P(ele).red('all files')
    })
    return 'test'
  }
  return {
    tweet: tweet
  }
}

module.exports = Heat()
