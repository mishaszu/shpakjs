var fs = require('fs');

function SaveFile () {

  function saveFile(root, file) {
    console.log(file)
    fs.writeFile("test___write_file_1.js", file, function(err){
       if (err) throw err;
        console.log("success");
    }); 
    return file
  }

  return {
    save: saveFile
  }
}

module.exports = SaveFile()
