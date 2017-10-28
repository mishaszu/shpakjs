function Export() {
  function replace(file, name) {
    const pattern = /module.exports = (.*)/
    const newString = `return ${name}()`
    return file.replace(pattern, newString)
  }
  
  return {
    replace: replace
  }
}

module.exports = Export()
