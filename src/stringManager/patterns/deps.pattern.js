function Dep () {

  function formule(file) {
    const DepPattern = /const (.*) = require\((.*?)\)/gm
    return file.match(DepPattern)
  }

  function req(string) {
    const Pattern = /require\((.*)\)/
    return string.match(Pattern);
  }

  function name(string) {
    const Pattern = /const (.*) =/
    return string.match(Pattern)[1]
  }
  
  return {
    formule: formule,
    req: req,
    name: name
  }
}

module.exports = Dep()
