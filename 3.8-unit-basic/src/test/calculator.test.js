const Calculator = require('../calculator.js')

describe('Calculator', () => {
  let cal;

  beforeEach(()=>{
    cal = new Calculator()
  })

  it('inits with 0', () => {
    expect(cal.value).toBe(0)
  })

  it('sets', () => {
    cal.set(9)
    expect(cal.value).toBe(9)
  })

  it('clear', () => {
    cal.set(9)
    cal.clear()
    expect(cal.value).toBe(0)
  })
describe('divides', () => {
  it('0/0 === NaN', () => {
    cal.divide(0)
    expect(cal.value).toBe(NaN)
  })
  it('0/1 === Infinity', () => {
    cal.set(1)
    cal.divide(0)
    expect(cal.value).toBe(Infinity)
  })
  it('4/4 === 1', () => {
    cal.set(4)
    cal.divide(4)
    expect(cal.value).toBe(1)
  })
})
})