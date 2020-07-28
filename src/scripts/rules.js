const numberRules = [
  value => value!=undefined || '',
  value => (value || '').toString().length <= 255 || 'Max 255 characters',
  value => {
    const pa = /^\d+\.?\d*%?(\+\d+\.?\d*%?)*$/
    return pa.test(value.toString()) || '输入格式错误,仅支持[0-9].+%'
  }
]

const pureNumberRules = [
  value => value!=undefined || '',
  value => (value || '').toString().length <= 255 || 'Max 255 characters',
  value => {
    const pa = /^\d+\.?\d*%?$/
    return pa.test(value.toString()) || '输入格式错误,仅支持[0-9].%'
  }
]

export default {
  numberRules,
  pureNumberRules
}
