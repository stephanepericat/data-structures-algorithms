class MySet {
  constructor() {
    this.collection = []
  }

  has(element) {
    return this.collection.indexOf(element) !== -1
  }

  add(element) {
    if(!this.has(element)) {
      this.collection.push(element)
      return true
    }

    return false
  }

  remove(element) {
    if(this.has(element)) {
      const index = this.collection.indexOf(element)
      this.collection.splice(index, 1)
      return true
    }

    return false
  }

  union(otherSet) {
    const unionSet = new MySet()
    const firstSet = this.values
    const secondSet = otherSet.values

    firstSet.forEach((e) => unionSet.add(e))
    secondSet.forEach((e) => unionSet.add(e))

    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new MySet()
    const firstSet = this.values

    firstSet.forEach((e) => {
      if(otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })

    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new MySet()
    const firstSet = this.values

    firstSet.forEach((e) => {
      if(!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })

    return differenceSet
  }

  subset(otherSet) {
    const firstSet = this.values
    return firstSet.every((e) => otherSet.has(e))
  }

  get size() {
    return this.collection.length
  }

  get values() {
    return this.collection
  }
}

const setA = new MySet()
const setB = new MySet()
setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
console.log(setA.subset(setB))

