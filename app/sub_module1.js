function SubModule1 () {
  function run3 () {
    return ' | Run from Sub Module 1 | '
  }
  return {
    run: run3
  }
}

module.exports = SubModule1()
