//class 정의
class Employee {
  //생성자
  constructor(part, name, price) {
    this.part = part;
    this.name = name;
    this.price = price;
  }
  //set 함수(setter)
  set price(value) {
    if (value < 0 || isNaN(value)) {
      this._price = 0;
    } else {
      this._price = value;
    }
  }
  //get 함수(getter)
  get price() {
    return this._price;
  }
  get info() {
    const result = `[${this.part}] ${this.name}의 시급: ${this.price}`;
    return result;
  }
  //일반 함수
  incresePrice = () => {
    this.price += 20000;
  };
}

//class 상속
class DevelopmentPart extends Employee {
  constructor(name, price) {
    super("개발", name, price);
  }
}

class DesignPart extends Employee {
  constructor(name, price) {
    super("디자인", name, price);
  }
}
//선언
const cat = new DevelopmentPart("고양이", 30000);
console.log(cat.info);
console.log(cat.price); //보호X
const frog = new DesignPart("개구리", 30000);
console.log(frog.info);
console.log(frog.price); //보호X
