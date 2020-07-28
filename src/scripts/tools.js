const calcInput = function(inputValue) {
  inputValue = inputValue.toString()
  var values = inputValue.split("+")
  for (var i in values) {
    if (values[i].endsWith("%")) {
      var s = values[i].split('')
      s.pop()
      s=s.join('')
      if (isNaN(s)) {
        return 0
      }
      values[i] = Number(s)/100
    }
  }
  var sum = 0
  for (i in values) {
    if (isNaN(values[i])) {
      return 0
    }
    sum += Number(values[i])
  }
  return sum
}

export default {
  calcInput
}