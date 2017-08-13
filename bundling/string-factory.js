function ModulesFactory () {
  function test () {
    console.log("test")
  }
  return {
    test: test
  }
}

module.exports = ModulesFactory()
