export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  //side1^2 + side2^2 = side3^2

  get isEquilateral() {
    if (this.side1 == this.side2 && this.side1 == this.side3 && this.side2 == this.side3 && this.side1 != 0) {
      return true
    } else {
      return false;
    }
  }

  get isIsosceles() {
    if (this.side1 == this.side2 && this.side1 + this.side2 > this.side3 || this.side1 == this.side3 && this.side1 + this.side3 > this.side2 || this.side2 == this.side3 && this.side2 + this.side3 > this.side1) {
      return true
    } else {
      return false
    }
  }

  get isScalene() {
    if (this.side1 != this.side2 && this.side1 != this.side3 && this.side2 != this.side3 && this.side1 + this.side2 > this.side3 && this.side1 + this.side3 > this.side2 && this.side2 + this.side3 > this.side1) {
      return true
    } else {
      return false
    }
  }
}
// export class Triangle {
//   constructor(side1, side2, side3) {
//     this.sides = [side1, side2, side3].sort();
//   }

//   kind() {
//     const ts = this.sides;
//     if (ts[0] + ts[1] <= ts[2]) return 'illegal';
//     if (ts[0] === ts[1] && ts[1] === ts[2]) return 'equilateral';
//     if (ts[0] === ts[1] || ts[1] === ts[2]) return 'isosceles';
//     return 'scalene';
//   };
// }