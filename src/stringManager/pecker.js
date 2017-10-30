const {DepsPattern, NamePattern, ExportPattern, ImportPattern, WrapPattern} = require('./patterns')
const {P, S} = require('../constManager')

function Peck() {
  function name (file) {
    const name1 = NamePattern.functionName(file)[1].toUpperCase()
    let name2 = NamePattern.exportName(file)[1]
    name2 = name2.slice(0, name2.length - 2).toUpperCase()
    if (name1 !== name2) {
      P('Names are not equal!').red()
      P(name1).red('name from function')
      P(name2).red('name from module')
    }
    file = NamePattern.replaceName(file, name1)
    return [name1, file]
  }

  function depFiles (file, path) {
    const search = DepsPattern.formule(file)
    const depsStrings = []
    const deps = []
    let dir = path.split('/')
    dir.pop()
    dir = dir.join('/')
    
    if (search) {
      search.forEach((module) => {
        depsStrings.push(DepsPattern.req(module)[1])
      })
      
      depsStrings.forEach((path) => {
        path = path.slice(1,path.length-1)
        path = S.join(dir, path)
        deps.push(path)
      })
     
      return deps
    }
    return false
  }

  function depNames(file) {
    const search = DepsPattern.formule(file)
    const deps = []
    if (search) {
      search.forEach((dep) => {
        deps.push(DepsPattern.name(dep).toUpperCase())
      })
      return deps
    }
    return false
  }

  function replaceExport(file, name) {
    return ExportPattern.replace(file, name)
  }

  function replaceImport(file, deps) {
    let newFile = file
    deps.forEach((dep) => {
      let nameCheck = ImportPattern.check(newFile)[1];
      if (nameCheck.toUpperCase() === dep) {
        newFile = ImportPattern.replace(newFile, nameCheck)
      } else {
        P(dep).red("Can't set require.")
      }
    })
    P(newFile)
    return newFile
  }

  function bundle (file, deps, name) {
    let string = [],
        rawString = deps.join(','),
        newFile

    deps.forEach((dep) => {
      string.push(`'${dep}'`)
    })

    string = string.join(',')

    newFile = WrapPattern.wrap(file,rawString)
    return WrapPattern.shpakWrapper(newFile, string, name)
  }

  return {
    name: name,
    depFiles: depFiles,
    depNames: depNames,
    bundle: bundle,
    replaceExport: replaceExport,
    replaceImport: replaceImport
  }
}

module.exports = Peck()
