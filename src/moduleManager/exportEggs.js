const {P} = require('../constManager')

const {Peck} = require('../stringManager')

function Export (){
  function init(object) {
    P('start exporting').green()
    return replaceExport(object)
  }

  function replaceExport(object) {
    for (egg in object.eggs) {
      let file = object.eggs[egg].file
      let newFile = Peck.replaceExport(file, object.eggs[egg].name)
      object.eggs[egg].file = newFile
    }
    return object
  }

  return {
    tweet: init
  }
}

module.exports = Export()
