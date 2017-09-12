(function (dep){
  var mapper = {};
  var shpak_modules = {};

  dep.forEach((dep) => {
    mapper[dep.name] = dep;
  })
  Object.keys(mapper).forEach((key) =>{
    if ( !shpak_modules[mapper[key].name]) {
      registerDep(mapper[key])
    }
  })
  console.log(shpak_modules.MainModule.run())

  function registerDep (dep) {
    if (dep.deps.length) {
      var depArr = [];
      dep.deps.forEach((subDep) => {
        var sub = mapper[subDep]
        if ( !shpak_modules[sub.name] ) {
          registerDep(sub)
        }
        depArr.push(shpak_modules[sub.name])
      })
      shpak_modules[dep.name] = dep.run(...depArr);
    } else {
      if ( !shpak_modules[dep.name] ) {
        shpak_modules[dep.name] = dep.run()
      }
    }
  }
})
([
//**BREAKER**//    
])
