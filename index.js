'use strict'

if (console) {
  let colors = require('colors/safe')
  let format = require('util').format

  let log = console.log.bind(console.log)

  console.log = function () {
    let boringOutput = format.apply(null, arguments)
    let funOutput = colors.random(boringOutput)

    log(funOutput)
  }
}
