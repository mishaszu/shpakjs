const pipe = require('b-pipe')

const {StringFactory} = require('../stringManager')
const {ParseConst} = require('../constManager')

const Sort = require('./sortEggs')
const Heat = require('./heatEggs')
const Hatch = require('./hatchEggs')

function ModuleFactory () {
  function hatching(path){
    const hatching_pipe = pipe(Sort.tweet, Heat.tweet, Hatch.tweet)
    return hatching_pipe(path)
  }

  return {
    hatching: hatching
  }
}

module.exports = ModuleFactory()