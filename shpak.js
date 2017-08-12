const root = __dirname
const Import = require ('./bundling/import.js')
const MainModule = require('./bundling/main-module.js')

MainModule.test()

function Shpak () {

  function read(URL) {
    return Import.read(root, URL)
  }

  return {
    read: read
  }
}

var $ = Shpak();

var test = $.read("test.txt")

//module.exports = Shpak()