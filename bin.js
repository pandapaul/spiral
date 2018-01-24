#! /usr/bin/env node

const distanceToCoords = require('./index').distanceToCoords

const n = process.argv[2]

if (!n && n !== 0) {
  throw new Error('please provide a number')
}

process.stdout.write(JSON.stringify(distanceToCoords(n)))
