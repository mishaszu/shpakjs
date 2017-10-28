const {DepsPattern, NamePattern} = require('./patterns')
const {P, S} = require('../constManager')

function Peck() {
  function name (file) {
    const name1 = NamePattern.functionName(file)[1].toLowerCase()
    let name2 = NamePattern.exportName(file)[1]
    name2 = name2.slice(0, name2.length - 2).toLowerCase()
    
    if (name1 !== name2) {
      P('Names are not equal!').red()
      P(name1).red('name from function')
      P(name2).red('name from module')
    }
    return name1
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
        deps.push(DepsPattern.name(dep).toLowerCase())
      })
      return deps
    }
    return false
  }

  function input () {

  }

  function output() {

  }

  return {
    name: name,
    depFiles: depFiles,
    depNames: depNames,
    input: input,
    output: output
  }
}

module.exports = Peck()
