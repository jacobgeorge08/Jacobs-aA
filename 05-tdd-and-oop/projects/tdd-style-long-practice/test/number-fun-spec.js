// Your code here
const { expect } = require(`chai`);
const { returnsThree, reciprocal } = require(`../problems/number-fun`)


describe(`Tests for return3 fn`, function () {

  it(`should return 3`, function () {
    expect(returnsThree()).to.equal(3)
  })
})

describe(`Tests for reciprocal`, function () {

  context(`Outside acceptable range`, function () {
    expect(function () { reciprocal(0) }).to.throw(TypeError)

    expect(function () { reciprocal(-50) }).to.throw(TypeError)
  })
})

context(`within acceptable range`, function () {
  it(`Return Reciprocal of Arg`, function () {
    expect(reciprocal(5)).to.equal(1 / 5);
    expect(reciprocal(1)).to.equal(1)
  })
})
