// Write your student id, firstname, and lastname in a single line comment here
// 65130500115 Lalita Benjamanukul
function isPasswordValid(password) {
  // write your code here...
  // if (password === undefined || password === null) {
  //   return false
  // } else if (password.length < 8) {
  //   return false
  // } else if (!/[A-Z]/.test(password)) {
  //   return false
  // } else if (!/[a-z]/.test(password)) {
  //   return false
  // } else if (!/[0-9]/.test(password)) {
  //   return false
  // } else if (!/[@#$%^&\*!]/.test(password)) {
  //   return false
  // } else {
  //   return true
  // }

  if (password === undefined || password === null) {
    return false
  }

  if (password.length < 8) {
    return false
  }

  if (!/[A-Z]/.test(password)) {
    return false
  }

  if (!/[a-z]/.test(password)) {
    return false
  }

  const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (!digit.some((number) => password.includes(number))) {
    return false
  }

  const specialChar = ['@', '#', '$', '%', '^', '&', '*', '!']
  if (!specialChar.some((char) => password.includes(char))) {
    return false
  }

  return true
}


module.exports = isPasswordValid
