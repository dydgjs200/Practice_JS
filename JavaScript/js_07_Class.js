class House {
  constructor(year, name, window) {
    //생성자 = 클래스 생성 시 속성 초기화
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메소드 정의
  getAge() {
    console.log(this.year);
  }
  getWindow() {
    console.log(this.window);
  }
}

// 클래스를 이용한 객체 만들기
const house = new House(15, "my house", 35);
house.getAge();
console.log(house.year);

// 실습 shape 클래스
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// 실습 클래스 상속
class Rectangle extends Shape {
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

const rect = new Rectangle(3, 4);
console.log(rect.getDiagonal(), rect.getArea());
const triangle = new Triangle(3, 4);
console.log(triangle.getArea());
const circle = new Circle(3, 4, 5);
console.log(circle.getArea());
