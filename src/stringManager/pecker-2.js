const {p_name} = require('./patterns')

function Peck() {
  function name (file) {
    const name = file.match(p_name)
    return name
  }

  function path () {

  }

  function input () {

  }

  function output() {

  }

  return {
    name: name,
    path: path,
    input: input,
    output: output
  }
}

module.exports = Peck()
