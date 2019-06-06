function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.printPosition = function() {
  console.log(`(${this.x}, ${this.y})`)
}

const p = new Point(1, 2)
console.dir(Point)
console.dir(p)

p.printPosition()

printPosition = p.printPosition()
printPosition() // error
