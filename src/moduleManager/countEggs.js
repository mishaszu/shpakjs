const {S, P} = require('../constManager')
const {Peck} = require('../stringManager')

function Count (){
  function init(array) {
    P('Start counting eggs').green()
    const Nested = findDeps(array)
    return 'test'
  }

  function findDeps(array) {
    const Nest = new S()
    
    array.forEach((egg) => {
      Nest.setEgg(egg.name, egg)
    })
    array.forEach((egg) => {
      let deps = Peck.depNames(egg.file)
      if (deps) {
        deps.forEach((dep) => {
          if (Nest.eggs[dep]) {
            P(dep, 'eggAdd').cyan('dep added to egg: ' + egg.name)
            Nest.eggs[egg.name].deps.push(dep)
          } else {
            throw `dep ${dep} is not found in initialized modules. Check names.`
          }
        })
      }
    })
    return Nest
  }

  return {
    tweet: init
  }
}

module.exports = Count()
