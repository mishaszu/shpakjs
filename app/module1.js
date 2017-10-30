const SubModule1 = require('./sub_module1.js')

function Module1 () {
  function run2 () {
    return ' | Run from Module 1 | ' + SubModule1.run()
  }
  return {
    run: run2
  }
}

module.exports = Module1()
