function SortEggs() {
  function tweet(s){
    s.e.peep('Start sorting', 'green')
    const _ = Object.assign(s)
    return _
  }
  
  return {
    tweet: tweet
  }
}

module.exports = SortEggs()
