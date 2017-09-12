const {Import} = require('../fileManager/index')

function ParseConst () {
    function parseShpakModule({rootPath, sourceFile}) {
        const file = Import.read(__dirname, "shpak-module.js")
        return {
            file: file,
            root: rootPath,
            source: sourceFile
        }
    }
    function remap(pObject) {
        const file = pObject.file.split('//**BREAKER**//')
        const reBundle = [
            file[0],
            null,
            file[1]
        ]
        return {
            bundle: reBundle,
            root: pObject.root,
            source: pObject.source
        }
    }
    return {
        parseShpakModule: parseShpakModule,
        remap: remap
    }
}

module.exports = ParseConst()