const numbers = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
const leftUnits = ['元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '万', '拾', '佰', '仟'];
const rightUnits = ['角', '分'];

const rmb = (value) => {
  if (Object.prototype.toString.call(value) === '[object String]') {
    value = Number(value);
  }
  if ((Object.prototype.toString.call(value) === '[object Number]' && value >= 0.01)) {
    const fragment = [];
    const [leftValues, rightValues] = String(value)
      .split('.')
      .map(part => part.split('').map(i => i * 1));
    let leftUnitIndex = 0;
    for (let i = leftValues.length - 1; i >= 0; i--) {
      if ((i === leftValues.length - 1
        || (i === leftValues.length - 5 && leftValues.length < 9) // 若不及亿位总是显示万位
        || i === leftValues.length - 9
        || i === leftValues.length - 13)
        || (leftValues[i] > 0 && leftUnitIndex < leftUnits.length)) { // 元、万、亿，万（亿）或当前位不为0
        fragment.unshift(leftUnits[leftUnitIndex++]);
      } else {
        leftUnitIndex++;
      }
      if (leftValues[i] > 0 || (i < leftValues.length - 1 && leftValues[i + 1] > 0) && leftValues[i] != 0) { // 当前位或低一位不为0
        fragment.unshift(numbers[leftValues[i]]);
      } else if (leftValues[0] == 0 && leftValues.length == 1) {
        fragment.unshift(numbers[leftValues[i]]);
      }
    }

    if (!rightValues || (rightValues[0] === 0 && rightValues[1] === 0)) { // 没有小数位或小数位都为0
      fragment.push('整');
    } else {
      // 角
      if (rightValues.length > 0) {
        fragment.push(numbers[rightValues[0]]);
        if (rightValues[0] > 0) { // 角位不为0
          fragment.push(rightUnits[0]);
        }
      }
      // 分
      if (rightValues.length > 1 && rightValues[1] > 0) {
        fragment.push(numbers[rightValues[1]]);
        fragment.push(rightUnits[1]);
      }
    }
    return fragment.join('');
  }
  return '零元整';
};

module.exports = rmb;
