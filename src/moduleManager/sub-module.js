const {StringFactory} = require('../stringManager/index')
const {Import} = require('../fileManager/index')

/**
  *
  * 1. loop through all dependiencies and create object array
  *   - find name
  *   - find dependiencies
  * 2. manage file string
  *   - replace shpak dependiencies with require
  *   - delete all exports
  * 3. serialize
  *   - change objects to strings
  * 4. join everying
  *
  */

function CreateModule () {
  let modules = []
  
  function _parseAllFiles({root, bundle, source, rawModules, pathObject}) {
    let file = Import.read(pathObject.sourceDir, pathObject.sourceFile)
        module = StringFactory.parseDependiencies(file)
        
    console.log(file);
  }
  
  function _loopThroughOld () {
    let file = Import.read(root, source),
        module,
        folderPath = (root + '/' + source).split('/') 

    folderPath.splice(-1,1)
    folderPath = folderPath.join('/')

    module = StringFactory.parse_file(file)
    if (module.dep) {
      for(let x = 0, max = module.dep.length; x < max; x++) {
        let path = module.dep[x].path
        path = path.slice(3, path.length - 1)
        module.dep[x] = parse({source: path, root: folderPath})
      }
    }
    return module
  }
  
  function _parseSourceDirectory (root, source) {
    let dir,
        file,
        temp = root + '/' + source
        
    dir = temp.split('/')
    file = dir.splice(-1,1)[0]
    dir = dir.join('/')
    return {
      sourceFile: file,
      sourceDir: dir
    }
  }
  
  
  
  function parse ({root, source, bundle}) {
    const sourceFileProperties = _parseSourceDirectory(root, source)
    const rowModules = _parseAllFiles({
      root: root,
      source: source,
      bundle: bundle,
      rowModules: [],
      pathObject: sourceFileProperties
    })
  }

  function serialize (pModules) {
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
        serialize(d)
      })
    }
    string.push(deps[0] + collectionDeps.join() + deps[1])
    string.push(run[0] + pModules.file + run[1])

    modules.push(quotes[0] + string.join() + quotes[1])
    return modules
  }
  
  function join (array) {
    
  }
  return {
    parse: parse,
    serialize, serialize,
    join: join
  }
}

module.exports = CreateModule()
