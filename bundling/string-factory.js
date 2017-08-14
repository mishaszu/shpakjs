function StringFactory () {
  function parse_file (file) {
    //const pipe = map(find_name, find_dep, find_file)
    const pipe = map(find_name, find_dep)
    pipe(file)
    //return pipe(file)
  }
  function find_name (file) {
    const NamePattern = /module.exports = (.*)\(\)/
    let name = file.match(NamePattern)[1]
    return {
      file: file,
      name: name
    }
  }
  function find_dep (obj) {
    const file = obj.file
    const DepPattern = /const (.*) = require\((.*)\)/g
    var allDeps = file.match(DepPattern)

    //return Object.assign(obj, {dep: deps})
  }
  function find_file (obj) {

    return Object.assign(obj, {file: file})
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
    parse_file: parse_file
  }
}

module.exports = StringFactory()
