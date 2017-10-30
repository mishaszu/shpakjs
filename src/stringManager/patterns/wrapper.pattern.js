function Wrap () {
  function wrap(file, string) {
    return `function(${string}) {\n${file}\n}`
  }

  function shpakWrapper(file, depsString, nameString) {
    return `{\nname: '${nameString}',\ndeps: [${depsString}],\nrun: ${file}\n}`
  }

  return {
    wrap: wrap,
    shpakWrapper: shpakWrapper
  }
}

module.exports = Wrap()
