function Name () {
  function exportName(file) {
    const pattern = /module.exports = (.*)/
    return file.match(pattern)
  }

  function functionName(file) {
    const pattern = /function (.*) \(\) \{/
    return file.match(pattern)
  }


  return {
    exportName: exportName,
    functionName: functionName
  }
}

module.exports = Name()
