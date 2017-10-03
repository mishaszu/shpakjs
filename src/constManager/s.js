const M = require('./m')
const E = require('./e')

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

S.addEgg = function(egg){
  const Module = Object.assign(M)
  Module.name = egg
  this.eggs[egg] = Module
}

S.setEggPath = function(egg, path){
  if (this.eggs[egg]) {
    this.eggs[egg].path = path
    return true
  }
  return false
}

S.getEggPath = function(egg){
  if(this.eggs[egg]) {
    return this.eggs[egg].path
  }
  return false
}

S.getEggFullPath = function(egg){
  if (this.eggs[egg]) {
    return this.join(this.root, this.getEggPath(egg) + '.js')
  }
  return false
}

S.setEggFile = function(egg, file) {
  if (this.eggs[egg]) {
    this.eggs[egg].file = file
    return true
  }
  return false
}

S.getEggFile = function(egg) {
  if (this.eggs[egg]) {
    return this.eggs[egg].file
  }
  return false
}

S.setEggDeps = function(egg, deps) {
  if (this.eggs[egg]) {
    this.eggs[egg].deps = deps
    return true
  }
  return false
}

S.getEggDeps = function (egg) {
  if (this.eggs[egg]) {
    return this.eggs[egg].deps
  }
  return false
}

module.exports = S
