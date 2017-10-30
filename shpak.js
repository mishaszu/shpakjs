const pipe = require('b-pipe')
const {ModuleFactory} = require('./src/moduleManager')
const {Save} = require('./src/fileManager')

const {S, P} = require('./src/constManager')

function Shpak () {
  function process () {
    const s_pipe = pipe(loadEntryPoint, parseModules, saveModule)
    return s_pipe()
  }
  function loadEntryPoint () {
    try {
      return S.join(__dirname, require(S.join(__dirname,S.entry())).entry)
    } catch (err) {
      //TODO add error object assignation
    }
  }
  function parseModules (path) {
    const file = ModuleFactory.hatching(path)
    try {
      Save.file(__dirname, file)
    } catch (err) {
      P("Can't save file")
    }
  }
  function saveModule () {

  }
  return {
    doIt: process
  }
}

var $ = Shpak()
$.doIt()
