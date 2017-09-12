const fs = require('fs')

function ImoportFile () {

  function readFileSync(ROOT, URL) {
    return fs.readFileSync(ROOT + "/" + URL, 'utf8')
  }

  return {
    read: readFileSync,
  }
}

module.exports = ImoportFile()