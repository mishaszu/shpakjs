const pipe = require('b-pipe')
const {Read} = require('../fileManager')

function shpakFix () {
  function idea(path) {
    const shpakModule_pipe = pipe(parseShpakModule, remap)
    return shpakModule_pipe(path)
  }

  function parseShpakModule(path) {
    return Read.file(path + "shpak-module.js")
  }
  function remap(string) {
    const file = string.split('//**BREAKER**//')
    const fileMore = [
        file[0],
        null,
        file[1]
    ]
    return fileMore
  }
  return {
    idea: idea
  }
}

module.exports = shpakFix()