const E = require('./e')
const M = require('./m')

const ShpakFix = require('./shpak-fix')

const S = {
  config: 'shpakjs.config.js',
  e: E,
  eggs: {},
  entry: '',
  root: '',
  nest: ''
}

S.join = function(){
  const args = arguments
  const arr = []
  for(let x = 0; x < args.length; x++){
    arr.push(args[x])
  }
  return arr.join('/')
}

S.init = function(root){
  this.root = root
  nest = ShpakFix.idea(__dirname + '/')
}

S.layEgg = function() {
  return Object.create(M, {})
}

S.registerEgg = function(egg) {
  this.eggs[egg.name] = egg
}


module.exports = S
