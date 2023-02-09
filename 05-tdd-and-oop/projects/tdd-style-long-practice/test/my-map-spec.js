
const chai = require(`chai`);
const expect = chai.expect
const spies = require("chai-spies");
chai.use(spies);

const myMap = require(`../problems/my-map`)

describe(`Custom implementation of Map`, function () {
  let arr = []
  beforeEach(() => {
    arr = [10, 15, 30]
    multiplyByTwo = (num) => {
      return num * 2;
    }
  });

  it(`should return new modified array`, function () {
    expect(myMap(arr, multiplyByTwo)).to.deep.equal([20, 30, 60])
  })

  it(`should not mutate array`, function () {
    myMap(arr, multiplyByTwo);
    expect(arr).to.deep.equal([10, 15, 30])
  })

  it(`should not call default Array.map`, function () {
    const spycall = chai.spy.on(arr, `map`);
    myMap(arr, multiplyByTwo);
    expect(spycall).to.not.have.been.called.once;
  })
  it('Should call the callback is invoked for each element', function () {
    const spycall = chai.spy(multiplyByTwo)
    myMap(arr, spycall);
    expect(spycall).to.have.been.called.exactly(arr.length)
  })

})
