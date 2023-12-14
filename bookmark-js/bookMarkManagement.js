const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
bookMakkManagement
class BookMark {
  constructor(isbn, totalPages) {
    totalPages = totalPages === undefined ? 0 : totalPages

    this.isbn = isbn
    this.totalPages = totalPages
    this.bookMarks = []
  }

  addBookMark(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.bookMarks.push(pageNumber)
    }
    return this.bookMarks.length
  }

  removeBookMark(pageNumber) {
    const index = this.bookMarks.indexOf(pageNumber)
    if (index !== -1) {
      this.bookMarks.splice(index, 1)
      return pageNumber
    }
    return undefined
  }

  goToFirstBookMark() {
    if (this.bookMarks.length === 0) {
      return undefined
    }
    return this.bookMarks[0]
  }

  goToLastBookMark() {
    if (this.bookMarks.length === 0) {
      return undefined
    }
    return this.bookMarks[this.bookMarks.length - 1]
  }

  getBookMarks() {
    return this.bookMarks
  }
}
//module.exports = BookMark
