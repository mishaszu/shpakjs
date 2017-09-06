var fs = require('fs');

function SaveFile () {

  function saveFile(root, dest, fileName, data) {
    const dir = root + '/' + dest

    if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
    }   
    fs.writeFile(dir + fileName, data, function(err){
       if (err) throw err;
        console.log('File: ' + fileName + ' saved!');
    }); 
  }

  return {
    save: saveFile
  }
}

module.exports = SaveFile()
