const root = __dirname
const {SaveFile} = require('./src/fileManager')
const {ModuleFactory} = require('./src/moduleManager')

function Shpak () {
  let ENRTYPOINT

  function loadEntryPoint () {
    const entryFile = root + '/shpakjs.config.js'
    try {
      ENTRYPOINT = require(entryFile)
    } catch (err) {
      throw(err)
    }
    return  ENTRYPOINT.entry
  }

  function saveBundle ({rootPath, sourceFile}) {
    const modules = ModuleFactory.forge({
      rootPath: rootPath,
      sourceFile: sourceFile
    })
    return modules;
  }

  return {
    start: loadEntryPoint,
    save: saveBundle
  }
}


//**TEST FIELD**//
var $ = Shpak()

var filePath = $.start(root)
var modules = $.save({sourceFile: filePath, rootPath: root})

console.log(modules, '| shpak.js');

// var modules = $.parseEntryPoint(filePath, root)

//module.exports = Shpak()