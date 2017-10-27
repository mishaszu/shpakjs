const {Read} = require('../fileManager')
const {Peck} = require('../stringManager')
const {P, S} = require('../constManager')

function SortEggs() {
  function tweet(path){
    P('Start sorting').green()
    return init(path) 
  }

  function init(path){
    const files = parseAllModules(path, [])
    return files
  }

  function parseAllModules(path, array){
    const file = Read.file(path)
    const source = []
    const deps = Peck.deps(file, path)
    
    if (deps) {
      deps.forEach((dep) => {
        array.concat(parseAllModules(dep, array))
      })
    }
    
    array.push(file)
    return array
  }
  
  return {
    tweet: tweet
  }
}

module.exports = SortEggs()
