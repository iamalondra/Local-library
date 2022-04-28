function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountB.name.last.toLowerCase() < accountA.name.last.toLowerCase() ? 1 : -1 );
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    let id = account.id 
    let borrows = book.borrows
    let count = borrows.reduce((borrowTotal, borrow) => {
     if (id ===  borrow.id) {
       borrowTotal += 1;  
     }
    return borrowTotal;
    }, 0);
    return count + total;
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  let filtered = books
     .filter((book) => book.borrows.some((borrowed) => borrowed.id === account.id && borrowed.returned === false))
     .map((book) => {
         let author = authors.find((author) => book.authorId === author.id)
         book.author = author;
         return book;
      })
  return filtered;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
