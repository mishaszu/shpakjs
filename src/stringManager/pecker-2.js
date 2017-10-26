const {DepsPattern} = require('./patterns')
const {E, S} = require('../constManager')

function Peck() {
  function name (file) {
    return 'MainModule'
  }

  function deps (file, path) {
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

  function path () {

  }

  function input () {

  }

  function output() {

  }

  return {
    name: name,
    path: path,
    deps: deps,
    input: input,
    output: output
  }
}

module.exports = Peck()
