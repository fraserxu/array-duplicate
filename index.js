var indexOf = require('indexof')

function duplicated (a, b) {
  var idx, len
  var res = []

  for (idx = 0, len = a.length; idx < len; ++idx) {
    if (indexOf(b, a[idx]) > -1) {
      res.push(a[idx])
    }
  }
  for (idx = 0, len = b.length; idx < len; ++idx) {
    if (indexOf(a, b[idx]) > -1 && indexOf(res, b[idx]) === -1) {
      res.push(b[idx])
    }
  }
  return res
}

module.exports = duplicated
