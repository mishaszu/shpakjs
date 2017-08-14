function Module2 () {
  function run2 () {
    return ' | Run from Module 2 | '
  }
  return {
    run: run2
  }
}

module.exports = Module2()
