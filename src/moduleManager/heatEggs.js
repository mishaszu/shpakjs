function Heat(){
  function tweet(s) {
    s.e.peep('Modules reformating', 'green')
    const _ = Object.assign(s)
    return _
  }
  return {
    tweet: tweet
  }
}

module.exports = Heat()
