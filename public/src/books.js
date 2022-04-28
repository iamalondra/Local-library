function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) { 
 let returned = books.filter((book) => book.borrows.every((borrowed) => borrowed.returned === true))
 let checkedOut = books.filter((book) => book.borrows.some((borrowed) => borrowed.returned === false))
 return [checkedOut, returned];
}

function getBorrowersForBook(book, accounts) {
  let newArray = accounts.map((account) => {
     let transaction = book.borrows.find((borrow) => account.id === borrow.id)
    if(transaction !== undefined){
      let newObj = {...account, returned : transaction.returned};
      return newObj
    }
  }).filter((element) => element !== undefined)
  return newArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
