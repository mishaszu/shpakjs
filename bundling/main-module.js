function MainModule () {
  var ModuleHeader = `
    (function (dep){
      var mapper = {};
      var shpak_modules = {};
    
      dep.forEach((dep) => {
        mapper[dep.name] = dep;
      })
      Object.keys(mapper).forEach((key) =>{
        if ( !shpak_modules[mapper[key].name]) {
          registerDep(mapper[key])
          console.log(shpak_modules.module1.add())
        }
      })
    
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
    })(
      [
  `,
      ModuleFooter = `
    ])
  `,
      Modules = `
        {
          name: "module1",
          deps: ["module2", "module3"],
          run: function(dep1, dep2) {
            function add() {
              return "this is depediencies " + dep1.add2() + " and " + dep2.add3()
            }
            return {
              add: add
            }
          }
        },
        {
          name: "module2",
          deps: ["module3"],
          run: function(dep1) {
            function add() {
              return "its module 2 with " + dep1.add3()
            }
            return {
              add2: add
            }
          }
        },
        {
          name: "module3",
          deps: [],
          run: function() {
            function add() {
              return "it's module 3"
            }
            return {
              add3: add
            }
          }
        }
      `

  function test() {
    eval(ModuleHeader + Modules + ModuleFooter)
  }

  return {
    test: test
  }
}

module.exports = MainModule();