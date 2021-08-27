let myLibrary = [];

document.getElementById('showBooks').addEventListener('click', function() {
    //console.log('clicked')
    showLibrary();
});

document.getElementById('newBook').addEventListener('click', function() {
    showForm();
});

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    };
};

function addBookToLibrary (Book) {
    myLibrary.push(Book)
};

function showLibrary () {
    for (let i = 0; i < myLibrary.length; i++) {
        let newBook = document.createElement('div')
        newBook.textContent = myLibrary[i]['title'];
        document.getElementById('library').appendChild(newBook);
    };
};

function showForm () {
}