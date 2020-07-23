const calcInput = function(inputValue) {
  var values = inputValue.split("+")
  for (var i in values) {
    if (values[i].endsWith("%")) {
      var s = values[i].split('')
      s.pop()
      values[i] = Number(s.join(''))/100
    }
  }
  var sum = 0
  for (i in values) {
    sum += Number(values[i])
  }
  return Number(sum)
}

export default {
  calcInput
}