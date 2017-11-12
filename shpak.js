const pipe = require('b-pipe')
const {ModuleFactory} = require('./src/moduleManager')
const {Save} = require('./src/fileManager')

const {S, P} = require('./src/constManager')

function Shpak () {
  const conf = {
    entry: '',
    destDir: '',
    destFile: ''
  }
  function process () {
    const s_pipe = pipe(loadEntryPoint, parseModules, saveModule)
    return s_pipe()
  }
  function loadEntryPoint () {
    let entryFile
    try {
      entryFile = require(S.join(__dirname,S.entry()))
    } catch (e) {
      throw 'There is no entry file <shpak.config.js>'
    }

    conf.entry = S.join(__dirname, entryFile.entry)

    conf.destDir = entryFile.destDir ? S.join(__dirname, entryFile.destDir) : __dirname

    if (entryFile.destFile) {
      conf.destFile = dir_switch(
        conf.destDir,
        __dirname,
        entryFile.destFile
      )
    } else {
      let entryParts = entryFile.entry.split('/')
      entryParts = entryParts[entryParts.length - 1].split('.')

      conf.destFile = dir_switch(
        conf.destDir,
        __dirname,
        `${entryParts[0]}__shpak.${entryParts[1]}`
      )
    }
    return true;
  }
  function parseModules () {
    const file = ModuleFactory.hatching(conf.entry)
    try {
      Save.file(__dirname, file)
    } catch (err) {
      P("Can't save file")
    }
  }
  function saveModule () {

  }
  function dir_switch(var1, var2, value) {
    let dest
    if (var1) {
      dest = S.join(var1, value)
    } else {
      dest = S.join(var2, value)
    }
    return dest
  }
  return {
    doIt: process
  }
}

var $ = Shpak()
$.doIt()
