let myLibrary = [];

document.getElementById('book-btn').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block'
});

document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'none';
})

const form = document.querySelector('form')
document.getElementById('bookForm').addEventListener('submit', event => {
  // submit event detected
  event.preventDefault()  // prevents page from refreshing
  const formElements = document.getElementById("bookForm").elements;
  const title = formElements[0].value
  const author = formElements[1].value
  const pages = formElements[2].value
  const read = formElements[3].value
  const newBook = new Book(title, author, pages, read)
  addBookToLibrary(newBook)
  document.getElementById("bookForm").reset()
  showLibrary()
  removeBook();
});

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
};

function addBookToLibrary (Book) {
    myLibrary.push(Book);
};

function showLibrary () {
    document.getElementById('library').textContent = ''
    for (let i = 0; i < myLibrary.length; i++) {
        const newBook = document.createElement('div')
        const bookId = 'book' + [i];
        newBook.setAttribute('id', bookId)
        newBook.setAttribute('class', 'book')
        newBook.innerHTML = `
        Title: ${myLibrary[i]['title']}<br>
        Author: ${myLibrary[i]['author']}<br>
        Pages: ${myLibrary[i]['pages']}<br>
        Read <input type="checkbox"><br>
        <button class='remove' id='${i}' >Remove Book</button>`;
        document.getElementById('library').appendChild(newBook);
    };
};

function removeBook() {
    const elements = document.querySelectorAll('.remove');
    elements.forEach(element => {
        element.addEventListener('click', (e)=>{   
        const newNum = parseInt(e.currentTarget.id);
        const parentId  = e.currentTarget.parentNode.id;
        const el = document.getElementById(parentId)
        myLibrary.splice(newNum,1);
        document.getElementById(parentId).style.cssText = `display: none;`
        });
    });
};