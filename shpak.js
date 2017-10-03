const pipe = require('b-pipe')
const {ModuleFactory} = require('./src/moduleManager')

const {S} = require('./src/constManager')
S.init(__dirname)

function Shpak () {
  function process () {
    const _ = Object.assign(S)
    const s_pipe = pipe(loadEntryPoint, parseModules, saveModule)
    s_pipe(_)
  }
  function loadEntryPoint (s) {
    const _ = Object.assign(s)
    try {
      _.entry = require(s.join(s.root,s.config)).entry
    } catch (err) {
      //TODO add error object assignation
    }
    return _
  }
  function parseModules (s) {
    const _ = Object.assign(s)
    ModuleFactory.hatching(_)
    return _
  }
  function saveModule (s) {
    const _ = Object.assign(s)
    return _
  }
  return {
    doIt: process
  }
}


//**TEST FIELD**//
var $ = Shpak()
$.doIt()
// var modules = $.parseEntryPoint(filePath, root)

//module.exports = Shpak()
