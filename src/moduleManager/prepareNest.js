/**
 * 1) read main file
 */

function Nest() {
  function tweet (s) {
    s.e.peep('Start preparing', 'green')
    const _ = Object.assign(s)
    return _
  }
  return {
    tweet: tweet
  }
}

module.exports = Nest()
