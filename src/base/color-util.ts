export function randomColor() {
  let letters = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ]
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function appendFront0(numStr: string): string {
  if (numStr.length !== 2) {
    return '0' + numStr
  } else {
    return numStr
  }
}

export function getColorStrFromCanvas(
  context: any,
  xIndex: number,
  yIndex: number
): string {
  let pixelData = context.getImageData(xIndex, yIndex, 1, 1).data
  // getImageData: 对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
  //对应rgb,每个两位，转化成16进制的，调用appendFront0。只有一位的话，补零
  return (
    '#' +
    appendFront0(pixelData[0].toString(16)) +
    appendFront0(pixelData[1].toString(16)) +
    appendFront0(pixelData[2].toString(16))
  )
}
