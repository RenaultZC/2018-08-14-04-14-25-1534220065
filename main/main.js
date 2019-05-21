module.exports = function main(num) {
  num += ''
  let arr = [
    '._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.',
    '|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|',
    '|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|'
  ]
  let result = [
    [],
    [],
    []
  ]
  for (let i = 0; i < 3; i ++) {
    arr[i] = arr[i].split('   ')
  }
  for (let i = 0, len = num.length; i < len ; i ++) {
    result[0].push(arr[0][num[i]])
    result[1].push(arr[1][num[i]])
    result[2].push(arr[2][num[i]])
  }
  result[0] = result[0].join(' ')
  result[1] = result[1].join(' ')
  result[2] = result[2].join(' ')
  result = result.join('\n')
  result += '\n'
  return result
};