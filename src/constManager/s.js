const M = require('./m')

const ShpakFix = require('./shpak-fix')

class S {
  constructor() {
    this.eggs = {}
  }

  getEgg(name) {
    return this.eggs[name]
  }

  setEgg(name, egg) {
    this.eggs[name] = egg
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
    return 'shpak.config.js'
  }

  static layEgg() {
    return new M()
  }

  static nest() {
    return ShpakFix.idea()
  }
}

module.exports = S
