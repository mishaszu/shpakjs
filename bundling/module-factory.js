const StringFactory = require('./string-factory.js')
const CreateModule = require('./create-module.js')
const Import = require ('./import.js')

function ModuleFactory () {
  function parse (filePath, pRoot) {
    let file = Import.read(pRoot, filePath),
        module,
        folderPath = filePath.split('/') 

    folderPath.splice(-1,1)
    folderPath = folderPath.join('/')

    module = StringFactory.parse_file(file)
    if (module.dep) {
      for(let x = 0, max = module.dep.length; x < max; x++) {
        let path = module.dep[x].path
        path = path.slice(3, path.length)
        path = path.slice(0, path.length - 1)
        module.dep[x] = parse(folderPath + '/' + path, pRoot)
      }
    }
    return module
  }

  return {
    parse: parse
  }
}

module.exports = ModuleFactory()
