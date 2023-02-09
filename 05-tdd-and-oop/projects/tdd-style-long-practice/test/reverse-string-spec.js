// Your code here
const { expect } = require(`chai`);
const reverseString = require(`../problems/reverse-string`)

describe(`Testing reverse`, function () {

  it(`should return fun`, function () {
    expect(reverseString(`fun`)).to.equal(`nuf`)
  })

  it(`Throw an error if not string`, function () {
    expect(() => reverseString(5)).to.throw(TypeError);
  })
})
