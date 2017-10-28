function Name () {
  function exportName(file) {
    const pattern = /module.exports = (.*)/
    return file.match(pattern)
  }

  function functionName(file) {
    const pattern = /function (.*) \(\) \{/
    return file.match(pattern)
  }

  function replaceName(file, name) {
    const pattern = /function (.*) \(\) \{/
    const newString = `function ${name} () {`
    return file.replace(pattern, newString)
  }


  return {
    exportName: exportName,
    functionName: functionName,
    replaceName: replaceName
  }
}

module.exports = Name()
