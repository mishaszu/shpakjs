const fs = require('fs')

function SaveFile () {

  function file(root, file) {
    fs.writeFile("test__write_file_1.js", file, function(err){
       if (err) throw err;
    })
    return file
  }

  return {
    file: file
  }
}

module.exports = SaveFile()
