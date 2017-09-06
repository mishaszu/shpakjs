function StringFactory () {

  function parse_file (file) {
    //const pipe = map(find_name, find_dep, find_file)
    const pipe = map(find_name, find_dep)
    return pipe(file)
  }
  
  function find_name (file) {
    const NamePattern = /module.exports = (.*)\(\)/
    let name = file.match(NamePattern)[1]
    return {
      file: file,
      name: name
    }
  }
  //TODO separate on smaller files
  function find_dep (obj) {
    //TODO include require
    //TODO include other formating (like other spaces etc)
    const DepPattern = /const (.*) = require\((.*)\)/g
    //TODO include var and let
    const DepNamePattern = /const (.*) =/
    //TODO include require
    const DepReplacePattern = /require\((.*)\)/
    //TODO for more secure find better way to detect, if someone put comment with module name it will find comment insted of function
    const FunctionStarter = new RegExp('.*' + ' ' + obj.name + ' ' + '.*', 'm')
    var file = obj.file,
        allDeps = file.match(DepPattern),
        deps = [],
        depDescription = [],
        params = [],
        moduleStart = '',
        newModuleStart = '',
        moduleStartString = '\n' + file.match(FunctionStarter) + '\n',
        injectDep = ''

    if (allDeps) {
      for (let x = 0, max = allDeps.length; x < max; x++) {
        let dep = allDeps[x],
            name = dep.match(DepNamePattern)[1],
            toReplace = dep.match(DepReplacePattern);
            
        
        depDescription.push(dep.replace(toReplace[0], '$hpak__dep' + (x + 1)))
        params.push('$hpak__dep' + (x + 1))

        file = file.replace(DepPattern, '')
        deps.push({
          name: name,
          path: toReplace[1]
        })
      }
    }
    if (depDescription) {
      injectDep = '(' + params.join() + ')'
      moduleStart = file.match(FunctionStarter)
      newModuleStart = moduleStart[0].replace(/\(\)/, injectDep) + '\n'
      depDescription.forEach((shpak) => {
        newModuleStart += '  ' + shpak + '\n'
      })
      file = file.replace(FunctionStarter, newModuleStart)
      //file = file.replace(FunctionStarter, moduleStartString)
    }

    file = file.replace(/\n\n/g, '\n')
    file = file.replace(/\n\n/g, '\n  ')
    file = file.replace(/\nmodule.exports.*\n/m, '')

    return {
      name: obj.name,  
      file: file, 
      dep: deps
    }
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
