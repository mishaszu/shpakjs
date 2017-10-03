function Hatch (){
  function tweet(s) {
    s.e.peep('Modules parsing', 'green')
    const _ = Object.assign(s)
    return _
  }

  return {
    tweet: tweet
  }
}

module.exports = Hatch()
