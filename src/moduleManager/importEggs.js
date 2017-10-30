const {P} = require('../constManager')
const {Peck} = require('../stringManager')

function Import (){
 function init(object) {
    P('start importing').green()
    return replaceImport(object)
  }

  function replaceImport(object) {
    for (egg in object) {
      let file = object[egg].file
      object[egg].file = Peck.replaceImport(file, object[egg].deps)
    } 
    return object
  }

  return {
    tweet: init
  }
}

module.exports = Import()
