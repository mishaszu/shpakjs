const root = __dirname
const MainModule = require('./bundling/main-module.js')
const ModuleFactory = require('./bundling/module-factory.js')


MainModule.test()

function Shpak () {
  let ENRTYPOINT

  function loadEntryPoint () {
    const entryFile = root + "/shpakjs.config.js"
    try {
      ENTRYPOINT = require(entryFile)
    } catch (err) {
      throw(err)
    }
    return  ENTRYPOINT.entry
  }

  function parseEntryPoint (pStringFile) {
    const modules = ModuleFactory.parse(pStringFile, root)
    console.log(modules)
  }

  return {
    loadEntryPoint: loadEntryPoint,
    parseEntryPoint: parseEntryPoint
  }
}

var $ = Shpak()

var filePath = $.loadEntryPoint()
var modules = $.parseEntryPoint(filePath, root)

//module.exports = Shpak()