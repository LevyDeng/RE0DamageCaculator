const numberRules = [
  value => (value || '').toString().length <= 255 || 'Max 255 characters',
  value => {
    const pa = /^\d+.?\d*%?(\+\d+.?\d*%?)*$/
    return pa.test(value.toString()) || '输入格式错误'
  }
]

export default {
  numberRules
}
