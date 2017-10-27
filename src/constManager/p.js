function P(element) {
  this.counter = ++this.counter || 0;
  return new Color(element, this.counter)
}

class Color {
  constructor(element, counter) {
    this.content = element
    this.num = counter
  }
  
  red(desc) {
    if (desc) {
      console.log('\x1b[31m', this.num + '-->\n', ('<' + desc + '>\n'), this.content, '\n', '\x1b[0m')
    } else {
      console.log('\x1b[31m', this.num + '-->\n', this.content, '\n', '\x1b[0m')
    }
  }
  
  green(desc) {
    if (desc) {
    console.log('\x1b[32m', this.num + '-->\n', ('<' + desc + '>\n'), this.content, '\n', '\x1b[0m')
    } else {
      console.log('\x1b[32m', this.num + '-->\n', this.content, '\n', '\x1b[0m')
    }
  }
}

module.exports = P
