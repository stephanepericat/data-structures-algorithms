class Stack {
  constructor() {
    this.count = 0
    this.storage = {}
  }

  pop() {
    if(this.count === 0) return undefined

    this.count--
    const result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  push(value) {
    this.storage[this.count] = value
    this.count++
  }

  get size() {
    return this.count
  }
}

const isPalindrome = (word) => {
  const chars = new Stack()
  let rword = ''

  for (let i = 0; i < word.length; i++) {
    chars.push(word[i])
  }

  for (let i = 0; i < word.length; i++) {
    rword += chars.pop()
  }

  if(rword === word) {
    console.log(`${word} is a palindrome`)
  } else {
    console.log(`${word} is NOT a palindrome`)
  }
}

isPalindrome('racecar')
isPalindrome('freeCodeCamp')