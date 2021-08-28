const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Pls use multiply method');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};
