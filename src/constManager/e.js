const e = {
  peep(subject, color) {
    if (color) {
      if (this[color]) {
        this[color](subject)
      } else {
        console.log('\x1b[31m\x1b[47m', 'Wrong Color', '\x1b[0m' )
      }
    } else {
      console.log(subject)
    }
  },
  green(subject) {
    console.log('\x1b[32m', subject, '\x1b[0m')
  },
  red(subject) {
    console.log('\x1b[31m', subject, '\x1b[0m')
  }
}

module.exports = e
