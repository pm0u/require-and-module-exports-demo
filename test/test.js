const chai = require('chai')
const expect = chai.expect
const main = require('../main')

describe('Module.exports & require demo', function() {
  it('sayHello() returns the string "Hello friend!"', function() {
    expect(main.sayHello()).equal("Hello friend!")
  })
  it('add() correctly performs addition.', function() {
    expect(main.add(3,5)).equal(8)
  })
  it('subtact() correctly performs subtraction.', function() {
    expect(main.subtract(10,5)).equal(5)
  })
})
