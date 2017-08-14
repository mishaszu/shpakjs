const StringFactory = require('./string-factory.js')
const CreateModule = require('./create-module.js')
const Import = require ('./import.js')

function ModuleFactory () {
  let entry
  function parse (filePath, pRoot) {
    let file = Import.read(pRoot, filePath),
        module

    module = StringFactory.parse_file(file)
  }

  return {
    parse: parse
  }
}

module.exports = ModuleFactory()
