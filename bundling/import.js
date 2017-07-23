const fs = require('fs')
function ImoportFile () {

  function test() {
    console.log(__dirname);
  }

  function readFileSync(ROOT, URL) {
    const file = fs.readFileSync(ROOT + "/" + URL, 'utf8')
    return file
  }

  return {
    read: readFileSync,
    test: test
  }
}

module.exports = ImoportFile()
