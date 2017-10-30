const {P, S} = require('../constManager')

const {Peck} = require('../stringManager')
const {Save} = require('../fileManager')

function Export (){
  function init(object) {
    P('start exporting').green()
    return replaceExport(object)
  }

  function replaceExport(object) {
    for (egg in object) {
      let file = object[egg].file
      object[egg].file = Peck.replaceExport(file, object[egg].name)
    }
    return object
  }

  return {
    tweet: init
  }
}

module.exports = Export()
