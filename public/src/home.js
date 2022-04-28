//This is a helper function
function formatObj (counts){
   const results =[];
  //loop through counts 
  for(let key in counts){
  //create a new object key value pairs 
  const newObj ={'name': key, 'count': counts[key]}  
  //push new objects into the array 
    results.push(newObj);
  }
  return results;
}
//end helper function

function getTotalBooksCount(books) { 
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length; 
}

function getBooksBorrowedCount(books) { //i think it would be reduce 
 //creat a result 0
  let result = 0; 
  //loop through books 
  for(let i=0; i < books.length; i++){
    let book = books[i];
    //check if current book is borrowed 
    if (book.borrows.some((borrowed) => borrowed.returned === false)){
      //add one to result
      result += 1;
    }
  }
  //return result 
  return result;
}


function getMostCommonGenres(books) {//probably sort after reducing or something like that
  let counts = {}; 
  //loop through books 
  for(let i=0; i<books.length; i++){
    //create current genre 
    let current = books[i].genre 
    //add books.genre as the key in counts +1
    if (counts[current] === undefined){
       counts[current] = 0;
    }
    counts[current] += 1;
  }
  let results = formatObj(counts);
  
  let sortedResults = results.sort((resultA, resultB) => resultB.count - resultA.count)
  return sortedResults.slice(0, 5);
}

//HERE
function getMostPopularBooks(books) {//probably sort after reducing or something like that
  const counts ={};
  //loop through books 
  for(let i=0; i<books.length; i++){
    //create current genre 
    const current = books[i] 
    //add books.genre as the key in counts +1
       counts[current.title] = current.borrows.length; 
  }
  let results = formatObj(counts);
  
  const sortedResults = results.sort((resultA, resultB) => resultB.count - resultA.count)
  return sortedResults.slice(0, 5);
}

//AND HERE TOO 
function getMostPopularAuthors(books, authors) {//probably sort, find after reducing or something like that
  //creat an object 
  const counts = {};
  //loop through books 
  for(let i = 0; i<books.length; i++){
    //create a current book variable 
    const current = books[i];
    //find author by id current.authorId === authors.id 
    let author = authors.find((author) => current.authorId === author.id)
    //const authorName = `${author.name.first} ${author.name.last}`
    const authorName = `${author.name.first} ${author.name.last}`; 
    //let object[authorName] = current.borrows.length
    counts[authorName] = current.borrows.length
  }
     const results = formatObj(counts);

  //sort results by count 
  const sortedResults = results.sort((resultA, resultB) => resultB.count - resultA.count)
  //return sliced array 
  return sortedResults.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
