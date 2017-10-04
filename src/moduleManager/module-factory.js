const pipe = require('b-pipe')

const {StringFactory} = require('../stringManager')
const {ParseConst} = require('../constManager')

const Sort = require('./sortEggs')
const Heat = require('./heatEggs')
const Hatch = require('./hatchEggs')

/**
 * 1.
 * -parse name
 * -parse dep path
 * -iterate throught all modules
 *
 * 2.
 * -replace all requires
 * -replace all exports
 * -wrap with shpak module
 *
 * op. 3.
 * -testing
 */

function ModuleFactory () {
  function hatching(s){
    const hatching_pipe = pipe(Sort.tweet, Heat.tweet, Hatch.tweet)
    return hatching_pipe(s)
  }

  return {
    hatching: hatching
  }
}

module.exports = ModuleFactory()
