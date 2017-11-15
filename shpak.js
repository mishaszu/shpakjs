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
    let entryFile,
      destDir

    try {
      entryFile = require(S.join(__dirname,S.entry()))
    } catch (e) {
      throw 'There is no config file <shpak.config.js>'
    }

    if (entryFile.entry) {
      conf.entry = S.join(__dirname, entryFile.entry)
    } else {
      throw 'There is no entry file in config'
    }

    conf.destDir = entryFile.destDir ? entryFile.destDir : null

    if (entryFile.destFile) {
      conf.destFile = entryFile.destFile
    } else {
      let entryParts = entryFile.entry.split('/').pop().split('.')
      conf.destFile = `${entryParts[0]}__shpak.${entryParts[1]}`
    }

    return true;
  }
  function parseModules () {
    return ModuleFactory.hatching(conf.entry)
  }
  function saveModule (file) {
    Save.file(__dirname, conf.destDir, conf.destFile, file)
    P('File saved').green()
  }
  return {
    doIt: process
  }
}

var $ = Shpak()
$.doIt()
