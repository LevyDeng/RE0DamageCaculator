const calcInput = function(e) {
  var values = e.target.value.split("+")
  for (var i in values) {
    if (values[i].endswith("%")) {
      values[i] /= 100
    }
  }
  var sum = 0
  for (i in values) {
    sum += values[i]
  }
  console.log(sum)
  return sum
}

export default {
  calcInput
}