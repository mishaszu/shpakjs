const fs = require('fs')

function SaveFile () {

  function file(root, destDir, destFile, file) {
    let destination;

    if (destDir) {
      destination = check_dir_tree(root, destDir) + '/' + destFile
    } else {
      destination = root + '/' + destFile
    }

    fs.writeFile(destination, file, function(err){
       if (err) throw err;
    })
    return file
  }

  function check_dir_tree(root, destDir) {
    let dest = destDir.split('/')
    for(let i = 0; i < dest.length; i++) {
      root = root + '/' + dest[i]
      create_dir(root)
    }
    return root
  }

  function create_dir(path) {
    if (!fs.existsSync(path)) {
      fs.mkdir(path, e => {
        if (e) {
          throw 'Cant create directory ' + path
        }
      })
    }
  }

  return {
    file: file
  }
}

module.exports = SaveFile()
