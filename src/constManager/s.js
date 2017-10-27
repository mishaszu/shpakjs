const M = require('./m')

const ShpakFix = require('./shpak-fix')

class S {
  constructor() {
    this.eggs = {}
  }

  static join() {
    const args = arguments
    const arr = []
    for(let x = 0; x < args.length; x++){
      arr.push(args[x])
    }
    return arr.join('/')
  }

  static entry() {
    return 'shpakjs.config.js'
  }

  static layEgg() {
    return new M()
  }

  static nest() {
    return ShpakFix.idea()
  }
}

module.exports = S
