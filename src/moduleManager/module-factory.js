const pipe = require('b-pipe')

const {StringFactory} = require('../stringManager')
const {ParseConst} = require('../constManager')

const Nest = require('./prepareNest')
const Sort = require('./sortEggs')
const Heat = require('./heatEggs')
const Hatch = require('./hatchEggs')

/**
 * 1.
 * -parse name
 * -parse all dependencies
 * -parse all modules
 * -parse file
 *
 * 2.
 * -replace all requires
 * -replace all exports
 * -wrap with shpak module
 *
 * op. 3.
 * -testing
 */

const map = require('b-pipe')

function ModuleFactory () {
  function hatching(s){
    const hatching_pipe = pipe(Nest.tweet, Sort.tweet, Heat.tweet, Hatch.tweet)
    return hatching_pipe(s)
  }

  return {
    hatching: hatching
  }
}

module.exports = ModuleFactory()
