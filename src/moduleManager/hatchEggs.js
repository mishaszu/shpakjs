const pipe = require('b-pipe')

const {P, S} = require('../constManager')
const {Peck} = require('../stringManager')

function Hatch (){
  function init(object) {
    P('start hatching').green()
    const hatch_pipe = pipe(wrapFiles, wrapShpak)
    return hatch_pipe(object)
  }

  function wrapFiles(object) {
    const depsArray = []
    for (egg in object) {
      depsArray.push(Peck.bundle(
        object[egg].file, 
        object[egg].deps,
        object[egg].name
      ))
    }
    return depsArray.join(',\n')
  }

  function wrapShpak(string) {
    const Nest = S.nest()
    Nest[1] = string
    return Nest.join('\n')
  }

  return {
    tweet: init
  }
}

module.exports = Hatch()
