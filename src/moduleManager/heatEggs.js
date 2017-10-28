const {S, P} = require('../constManager')
const {Peck} = require('../stringManager')

function Heat(){
  function init(array) {
    P('Start heating eggs').green()
    const eggs = findAllNames(array)
    return eggs
  }

  function findAllNames(array) {
    const eggs = []
    array.forEach((file) => {
      let egg = S.layEgg()
      let peckName = Peck.name(file)
      egg.file = peckName[1]
      egg.name = peckName[0]
      eggs.push(egg)
    })
    return eggs
  }
  return {
    tweet: init
  }
}

module.exports = Heat()
