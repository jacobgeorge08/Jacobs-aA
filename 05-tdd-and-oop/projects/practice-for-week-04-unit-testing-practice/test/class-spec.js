const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  let field;
  beforeEach(() => {
    field = new Word("track");
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(field.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(field.word).to.equal(`track`);
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(field.removeVowels()).to.equal(`trck`);
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(field.removeConsonants()).to.equal(`a`);
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(field.pigLatin()).to.equal(`acktray`);
    });
  });
});
