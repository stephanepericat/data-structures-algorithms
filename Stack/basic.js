const isPalindrome = (word) => {
  const chars = []
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