const moduleA = require('./numbers')

describe('Numbers', () => {
  describe('Integer Number', () => {

    it('should sum two numbers', () => {
      expect(moduleA.sum(4, 2)).toBe(6);
    });

    it('should sub two numbers', () => {
      expect(moduleA.sub(4, 2)).toBe(2);
    });

    it('should mult two numbers', () => {
      expect(moduleA.mult(4, 2)).toBe(8);
    });

    it('should div two numbers', () => {
      expect(moduleA.div(4, 2)).toBe(2);
    });
  });

  describe('Float Number', () => {
    it('should sum two numbers', () => {
      expect(moduleA.sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should sub two numbers', () => {
      expect(moduleA.sub(0.1, 0.2)).toBeCloseTo(-0.1);
    });

    it('should mult two number', () => {
      expect(moduleA.mult(0.1, 0.2)).toBeCloseTo(0.02);
    });

    it('should div two numbers', () => {
      expect(moduleA.div(0.1, 0.2)).toBeCloseTo(0.5);
    });
  });
})