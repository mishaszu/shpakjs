const {Read} = require('../fileManager')
const {Peck} = require('../stringManager')

function SortEggs() {
  function tweet(s){
    s.e.peep('Start sorting', 'green')
    const _ = Object.create(s, {})
    init(_) 
    _.e.peep(_, 'red')
    return _
  }

  function init(s){
    const _ = Object.assign(s)
    //parseAllModules(_, _.join(_.root,_.entry))
    _.e.peep(_.eggs, 'red')
    return _
  }

  function parseAllModules(_, path){
    const egg = _.layEgg()
    let deps
    egg.path = path
    egg.file = Read.file(path)
    egg.name = Peck.name(egg.file)
    deps = Peck.deps(egg.file)
    deps.forEach((dep) => {
      egg.deps.push(dep[0])
      //parseAllModules(_, dep[1])
    })
    _.registerEgg(egg)
  }
  
  return {
    tweet: tweet
  }
}

module.exports = SortEggs()
