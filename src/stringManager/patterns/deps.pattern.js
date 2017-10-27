function Dep () {

  function formule(file) {
    const DepPattern = /const (.*) = require\((.*?)\)/gm
    return file.match(DepPattern)
  }

  function req(string) {
    const Pattern = /require\((.*)\)/
    return string.match(Pattern);
  }
  
  return {
    formule: formule,
    req: req
  }
}

module.exports = Dep()
