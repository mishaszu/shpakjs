const e = {
  counter: 0,
  peep(subject, color, note) {
    note = note || ''
    if (color) {
      if (this[color]) {
        this[color](subject, note)
      } else {
        console.log('\x1b[31m\x1b[47m', this.counter++ + '-->\n', note || '\n', 'Wrong Color', '\x1b[0m' )
      }
    } else {
      console.log(subject)
    }
  },
  green(subject, note) {
    console.log('\x1b[32m', this.counter++ + '-->\n', ('<' + note + '>\n'), subject, '\n', '\x1b[0m')
  },
  red(subject, note) {
    console.log('\x1b[31m', this.counter++ + '-->\n', ('<' + note + '>\n'), subject, '\n', '\x1b[0m')
  }
}

module.exports = e
