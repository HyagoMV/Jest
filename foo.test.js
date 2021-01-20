describe('Promise', () => {

  describe('Constructor', () => {
    it('should pass a function to the construtor', () => {
      new Promise(function () { })
      new Promise(() => { })
    })

    it('should not pass a false value to the construtor', () => {
      try {
        new Promise(false);
      } catch (e) {
        expect(e.name).toMatch('TypeError')
      }
    })

    it('should not pass a true value to the construtor', () => {
      try {
        new Promise(true);
      } catch (e) {
        expect(e.name).toMatch('TypeError')
      }
    })

    it('should not pass a 0 value to the construtor', () => {
      try {
        new Promise(0);
      } catch (e) {
        expect(e.name).toMatch('TypeError')
      }
    })

    it('should not pass a NaN value to the construtor', () => {
      try {
        new Promise(NaN);
      } catch (e) {
        expect(e.name).toMatch('TypeError')
      }
    })

    it('should not pass a Infinity value to the construtor', () => {
      try {
        new Promise(Infinity);
      } catch (e) {
        expect(e.name).toMatch('TypeError')
      }
    })

    it('should not pass a empty [] value to the construtor', () => {
      try {
        new Promise([]);
      } catch (e) {
        expect(e.name).toMatch('TypeError')
      }
    })

    it('should not pass a empty {} value to the construtor', () => {
      try {
        new Promise({});
      } catch (e) {
        expect(e.name).toMatch('TypeError')
      }
    })
  })
})