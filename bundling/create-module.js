function CreateModule () {
  function test () {
    console.log("test")
  }
  return {
    test: test
  }
}

module.exports = CreateModule()
