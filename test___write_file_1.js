{
name: "SubModule1",
deps: [],
run: function SubModule1 () {
  function run3 () {
    return ' | Run from Sub Module 1 | '
  }
  return {
    run: run3
  }
}
module.exports = SubModule1()
}
,{
name: "Module1",
deps: ["SubModule1"],
run: 
function Module1 ($hpak__dep1) {
  const Module1sub = $hpak__dep1
  function run2 () {
    return ' | Run from Module 1 | ' + Module1sub.run()
  }
  return {
    run: run2
  }
}
}
,{
name: "Module2",
deps: [],
run: function Module2 () {
  function run2 () {
    return ' | Run from Module 2 | '
  }
  return {
    run: run2
  }
}
module.exports = Module2()
}
,{
name: "MainModule",
deps: ["Module1","Module2"],
run: 
function MainModule ($hpak__dep1,$hpak__dep2) {
  const Module1 = $hpak__dep1
  const Module2 = $hpak__dep2
  function run1 () {
    return ' | Run from Main Module | ' + Module1.run() + Module2.run()
  }
  return {
    run: run1
  }
}
}
