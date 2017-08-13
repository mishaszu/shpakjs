const root = __dirname
const Import = require ('./bundling/import.js')
const MainModule = require('./bundling/main-module.js')


MainModule.test()

function Shpak () {
  let ENRTYPOINT

  function read(URL) {
    return Import.read(root, URL)
  }

  function loadEntryPoint () {
    const entryFile = root + "/shpakjs.config.js"
    try {
      ENTRYPOINT = require(entryFile)
    } catch (err) {
      throw(err)
    }
  }

  return {
    read: read,
    loadEntryPoint: loadEntryPoint
  }
}

var $ = Shpak()

var test = $.read("test.txt")

$.loadEntryPoint()

//module.exports = Shpak()