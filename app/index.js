const module1 = require('./module1.js')
const module2 = require('./module2.js')

function MainModule () {
  function run1 () {
    return ' | Run from Main Module | ' + module1.run() + module2.run()
  }
  return {
    run: run1
  }
}

module.exports = MainModule()
