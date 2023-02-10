// Your code here
const chai = require(`chai`);
const expect = chai.expect;
const Person = require(`../problems/person`);


describe(`Testing properties of Person`, function () {
  let jacob;
  let erin;
  beforeEach(() => {
    jacob = new Person("Jacob", 27);
    erin = new Person(`Erin`, 30);
  });

  it(`should have a name and age property`, function () {
    expect(jacob.name).to.exist;
    expect(jacob.age).to.exist
  })

  it(`should assign proper name and age`, function () {
    expect(jacob.name).to.equal(`Jacob`);
    expect(jacob.age).to.equal(27)
  })

  it(`Should return a string saying hello`, function () {
    expect(jacob.sayHello()).to.equal(`hello Im Jacob`);
  })

  it(`should return correct string for visitation`, function () {

    expect(jacob.visit(erin)).to.equal(`Jacob visits Erin`)
  })

  it('switchVisit(otherPerson) should invoke visit passing in the current instance', function () {
    expect(jacob.switchVisit(erin)).to.deep.equal('Erin visits Jacob');
  })
})

describe(`update function of person`, function () {
  let jacob;
  beforeEach(() => {
    jacob = new Person("Jacob", 27);
  });

  context(`incoming arg is not an object`, function () {
    it(`TypeError. Not an Object`, function () {
      let lol = 23;
      expect(() => jacob.update(lol)).to.throw(TypeError)
    })
  })

  context(`Should have name and age props`, function () {

    it(`Throw type error if no name age props`, function () {
      let jess = { name: `Jess` };
      expect(() => jacob.update(jess)).to.throw(TypeError)
    })

    it(`object has name and age props; update`, function () {
      let jess = { name: `Jess`, age: 24 };
      jacob.update(jess)
      expect(jacob.name).to.equal(`Jess`);
      expect(jacob.age).to.equal(24);
    })
  })
})
describe(`tryUpdate(obj) instance method`, function () {
  let jacob;
  let erin;
  let max;
  beforeEach(() => {
    jacob = new Person("Jacob", 27);
    erin = new Person(`Erin`, 40)
    max = 50;
  });

  context(`tryUpdate worked`, function () {
    it(`Should update instance and return true`, function () {
      jacob.update(erin)

      expect(jacob.name).to.equal(`Erin`)
      expect(jacob.age).to.equal(40);

      expect(jacob.tryUpdate(erin)).to.equal(true);
    })
  })

  context(`tryUpdate didnt work`, function () {
    it(`should return false`, function () {

      expect(jacob.tryUpdate(max)).to.equal(false);
    })
  })
}
)

describe('Static greet function', function () {

  let arr;
  let jacob;
  let erin;

  beforeEach(() => {
    jacob = new Person("Jacob", 27);
    erin = new Person(`Erin`, 40)
    arr = [jacob, erin];
  });

  it('calls the sayHello method for each element of the array', function () {
    const hi1 = chai.spy.on(jacob, 'sayHello');
    const hi2 = chai.spy.on(erin, 'sayHello');
    Person.greetAll(arr);
    expect(hi1).to.have.been.called.once;
    expect(hi2).to.have.been.called.once;
  });

  it('returns an array of the strings returned by sayHello', function () {
    const greetings = ['hello Im Jacob', "hello Im Erin"];
    const greet = Person.greetAll(arr);
    expect(greet).to.eql(greetings);
  })
})
