const {P} = require('../constManager')
const {Peck} = require('../stringManager')

function Import (){
 function init(object) {
    P('start importing').green()
    return replaceImport(object)
  }

  function replaceImport(object) {
    for (egg in object.eggs) {
      let file = object.eggs[egg].file
      let newFile = Peck.replaceImport(file, object.eggs[egg].deps)
      object.eggs[egg].file = newFile
    } 
    return object
  }

  return {
    tweet: init
  }
}

module.exports = Import()
