var constManager = require('./constManager/index'),
    fileManager = require('./FileManager/index'),
    stringManager = require('./stringManager/index'),
    moduleManager = require('./moduleManager/index')

module.exports = {
    ParseConst: constManager.ParseConst,
    ModuleFactory: moduleManager.ModuleFactory,
    SaveFile: fileManager.SaveFile,
    Import: fileManager.Import,
    StringFactory: stringManager.StringFactory
}
