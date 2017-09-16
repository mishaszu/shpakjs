const {StringFactory} = require('../stringManager')
const {ParseConst} = require('../constManager')
const SubModule = require('./sub-module')

const map = require('b-pipe')

function ModuleFactory () {
  function forge ({rootPath, sourceFile}) {
    const bundleForge = map(
      ParseConst.parseShpakModule,
      ParseConst.remap,
      SubModule.parse
    //   SubModule.serialize
    )
    
    return bundleForge(arguments[0])
  }

  return {
    forge: forge
  }
}

module.exports = ModuleFactory()
