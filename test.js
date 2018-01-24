const test = require('ava').test
const chance = require('chance')()
const { indexToPoint, pointToIndex } = require('./')

const someIndexToPointResults = []

test.before('setup', t => {
  while (someIndexToPointResults.length < 100) {
    const index = chance.integer({ min: 0, max: 10000 })
    const point = indexToPoint(index)
    someIndexToPointResults.push({ index, point })
  }
})

test('pointToIndex should be the reverse of indexToPoint', t => {
  someIndexToPointResults.forEach(res => {
    t.is(pointToIndex(res.point), res.index)
  })
})
