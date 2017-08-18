const StringFactory = require('./string-factory.js')
const CreateModule = require('./create-module.js')
const Import = require ('./import.js')

function ModuleFactory () {
  let modules = []
  function forge (filePath, pRoot) {
    let forgeModules = map(parse, prepareModules)
    let tester = forgeModules({file: filePath, root: pRoot})
    return tester 
  }
  function parse (pPath) {
    let file = Import.read(pPath.root, pPath.file),
        module,
        folderPath = pPath.file.split('/') 

    folderPath.splice(-1,1)
    folderPath = folderPath.join('/')

    module = StringFactory.parse_file(file)
    if (module.dep) {
      for(let x = 0, max = module.dep.length; x < max; x++) {
        let path = module.dep[x].path
        path = path.slice(3, path.length - 1)
        module.dep[x] = parse({file: folderPath + '/' + path, root: pPath.root})
      }
    }
    return module
  }

  function prepareModules (pModules) {
    const quotes = ['{\n', '}\n']
    const name = ['name: "', '"']
    const deps = ['\ndeps: [',']']
    const run = ['\nrun: ', '']
    let string = [],
        collectionDeps = []

    string.push(name[0] + pModules.name + name[1])
    if (pModules.dep.length) {
      pModules.dep.forEach((d) => {
        collectionDeps.push('"' + d.name + '"')
        prepareModules(d)
      })
    }
    string.push(deps[0] + collectionDeps.join() + deps[1])
    string.push(run[0] + pModules.file + run[1])

    modules.push(quotes[0] + string.join() + quotes[1])
    return modules
  }

  function map () {
    var args = arguments
    return function(p) {
      for(var x = 0, max = args.length; x < max; x++) {
        p = args[x](p)
      }
      return p
    }
  }

  return {
    forge: forge
  }
}

module.exports = ModuleFactory()
