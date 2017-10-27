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
      egg.file = file
      egg.name = Peck.name(file)
      eggs.push(egg)
    })
    return eggs
  }
  return {
    tweet: init
  }
}

module.exports = Heat()
