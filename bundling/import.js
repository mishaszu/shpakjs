const fs = require('fs')

function ImoportFile () {

  function readFileSync(ROOT, URL) {
    const file = fs.readFileSync(ROOT + "/" + URL, 'utf8')
    return file
  }

  return {
    read: readFileSync,
  }
}

module.exports = ImoportFile()
