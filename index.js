const indexToPoint = index => {
  const calc = () => {
    var k = Math.ceil((Math.sqrt(index) - 1) / 2)
    var t = (2 * k + 1)
    var m = Math.pow(t, 2)

    t = t - 1

    if (index >= m - t) {
      return [k - (m - index), -k]
    } else {
      m = m - t
    }

    if (index >= m - t) {
      return [-k, -k + (m - index)]
    } else {
      m = m - t
    }

    if (index >= m - t) {
      return [-k + (m - index), k]
    } else {
      return [k, k - (m - index - t)]
    }
  }

  indexToPoint.res[index] = indexToPoint.res[index] || calc()
  return indexToPoint.res[index]
}

indexToPoint.res = []

const pointToIndex = ([x, y]) => {
  const key = JSON.stringify([x, y])

  // LOLZ "calc"
  const calc = () => {
    let index = 0
    while (JSON.stringify(indexToPoint(index)) !== key) {
      index++
    }
    return index
  }

  pointToIndex.res[key] = pointToIndex.res[key] || calc()
  return pointToIndex.res[key]
}

pointToIndex.res = []

const prepop = () => {
  pointToIndex([-50, 50])
}

prepop()

module.exports = {
  indexToPoint,
  pointToIndex
}
