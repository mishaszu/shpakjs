function Import() {
  function replace(file, name) {
    const pattern = /const (.*) = require\((.*)\)/
    const newString = `const ${name} = ${name.toUpperCase()}`
    return file.replace(pattern, newString)
  }

  function check(file) {
    const pattern = /const (.*) = require\(/
    return file.match(pattern)
  }
  
  return {
    replace: replace,
    check: check
  }
}

module.exports = Import()
