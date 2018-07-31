const assert = require('power-assert');
const rmb = require('../index.js');

describe('rmb', function () {
  it('1.1 to 壹元壹角', function () {
    assert(rmb(1.1) === '壹元壹角');
  });

  it('10.01 to 壹拾元零壹分', function () {
    assert(rmb(10.01) === '壹拾元零壹分');
  });

  it('100.01 to 壹佰元零壹分', function () {
    assert(rmb(100.01) === '壹佰元零壹分');
  });

  it('1001.11 to 壹仟零壹元壹角壹分', function () {
    assert(rmb(1001.11) === '壹仟零壹元壹角壹分');
  });

  it('"abc" to 零元整', function () {
    assert(rmb("abc") === '零元整');
  });

  it('0 to 零元整', function () {
    assert(rmb(0) === '零元整');
  });

  it('1 to 壹元整', function () {
    assert(rmb(1) === '壹元整');
  });

  it('10 to 壹拾元整', function () {
    assert(rmb(10) === '壹拾元整');
  });

  it('210 to 贰佰壹拾元整', function () {
    assert(rmb(210) === '贰佰壹拾元整');
  });

  it('3210 to 叁仟贰佰壹拾元整', function () {
    assert(rmb(3210) === '叁仟贰佰壹拾元整');
  });

  it('43210 to 肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(43210) === '肆万叁仟贰佰壹拾元整');
  });

  it('543210 to 伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(543210) === '伍拾肆万叁仟贰佰壹拾元整');
  });

  it('6543210 to 陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(6543210) === '陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('76543210 to 柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(76543210) === '柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('876543210 to 捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(876543210) === '捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('9876543210 to 玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(9876543210) === '玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('109876543210 to 壹仟零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(109876543210) === '壹仟零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('1009876543210 to 壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(1009876543210) === '壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('4321009876543210 to 肆仟叁佰贰拾壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(4321009876543210) === '肆仟叁佰贰拾壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });
});
