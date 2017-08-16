const Module1 = require('./module1.js')
const Module2 = require('./module2.js')

function MainModule () {
  function run1 () {
    return ' | Run from Main Module | ' + Module1.run() + Module2.run()
  }
  return {
    run: run1
  }
}

module.exports = MainModule()
