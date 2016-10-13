'use strict'

let fs = require('fs')
let path = require('path')

let funFun = 'require("glitter-bomb");'
let pkg = require(path.resolve(__dirname, '../../', 'package.json'))
let main = pkg.main
let file = fs.readFileSync(path.resolve(__dirname, '../../', main)).toString()
let lines = file.split('\n')
let firstLine = lines[0]
let i = 0

while (lines[i].indexOf('use strict') > -1 || lines[i].indexOf('#!') > -1) {
  i++
}

if (i > 0) {
  lines = [lines[i-1], funFun].concat(lines.slice(i))
} else {
  lines = [funFun].concat(lines)
}

fs.writeFileSync(path.resolve(__dirname, '../../', main), lines.join('\n'))
