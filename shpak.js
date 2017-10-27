const pipe = require('b-pipe')
const {ModuleFactory} = require('./src/moduleManager')

const {S} = require('./src/constManager')

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
    ModuleFactory.hatching(path)
  }
  function saveModule () {

  }
  return {
    doIt: process
  }
}

var $ = Shpak()
$.doIt()
