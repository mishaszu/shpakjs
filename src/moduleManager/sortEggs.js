const {Read} = require('../fileManager')
const {Peck} = require('../stringManager')
const {E, S} = require('../constManager')

function SortEggs() {
  function tweet(s){
    s.e.peep('Start sorting', 'green', 'Sorting eggs proc')
    const _ = Object.create(s, {})
    init(_) 
    return _
  }

  function init(s){
    const _ = Object.assign(s)
    const files = parseAllModules(_.join(_.root,_.entry), [])
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
