const fs = require('fs')

function Read () {

  function readFileSync(path) {
    return fs.readFileSync(path, 'utf8')
  }

  return {
    file: readFileSync,
  }
}

module.exports = Read()