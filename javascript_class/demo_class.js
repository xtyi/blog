class Point {
  x = 0
  y = 0
  color = 'blue'

  static s = 'hi'

  static foo() {
    console.log(this.s)
  }

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  printPosition = () => {
    console.log(`(${this.x}, ${this.y})`)
  }
}

const p = new Point(1, 2)

console.dir(p)
console.dir(Point)

p.printPosition()

printPosition = p.printPosition
printPosition()
