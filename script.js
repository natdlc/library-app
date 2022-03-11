// sample books
let b1 = new Book('The Fellowship of the Ring (LOTR pt. 1)', 'J.R.R. Tolkien', 448, 'Fantasy', false);
let b2 = new Book('The Kane Chronicles: The Red Pyramid', 'Rick Riordan', 517, 'Science Fiction', true);
// sample books end

//target existing elements
let cardsWrapper = document.querySelector('.cards-wrapper');
// target existing elements end

let myLibrary = [];

function Book(title, author, page, genre, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.genre = genre;
    this.read = read;
}

function addBookToLib(title, author, page, genre, read) {
    let newBook = new Book(title, author, page, genre, read);
    myLibrary.push(newBook);
    //create elements
    
    //card 
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.id = myLibrary.length-1;
    cardsWrapper.appendChild(card);
    
    //cover container
    let coverContainer = document.createElement('div');
    coverContainer.classList.add('cover-container');
    card.appendChild(coverContainer);

    //img
    let imgElem = document.createElement('img');
    imgElem.classList.add('cover');
    imgElem.src = './assets/images/sample.png'
    coverContainer.appendChild(imgElem);

    //book title
    let bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    bookTitle.innerText = title;
    card.appendChild(bookTitle);

    //book info wrapper
    let bookInfoWrapper = document.createElement('div');
    bookInfoWrapper.classList.add('book-info-wrapper');
    card.appendChild(bookInfoWrapper);

    //author
    let bookAuthor = document.createElement('p');
    bookAuthor.classList.add('author');
    bookAuthor.innerText = author;
    bookInfoWrapper.appendChild(bookAuthor);

    //page count
    let pageCount = document.createElement('p');
    pageCount.classList.add('page-count');
    pageCount.innerText = page;
    bookInfoWrapper.appendChild(pageCount);

    //genre
    let bookGenre = document.createElement('p');
    bookGenre.classList.add('genre');
    bookGenre.innerText = genre;
    bookInfoWrapper.appendChild(bookGenre);

    //card buttons container
    let cardBtnsContainer = document.createElement('div');
    cardBtnsContainer.classList.add('card-btns-container');
    card.appendChild(cardBtnsContainer);

    //remove button
    let removeBtn = document.createElement('button');
    removeBtn.id = 'remove-btn';
    removeBtn.innerText = 'Remove';
    cardBtnsContainer.appendChild(removeBtn);

    //radio container
    let radioContainer = document.createElement('div');
    radioContainer.classList.add('radio-container');
    cardBtnsContainer.appendChild(radioContainer);

    //p for read btn
    let p1 = document.createElement('p');
    radioContainer.appendChild(p1);

    //read button
    let readBtn = document.createElement('input');
    readBtn.setAttribute('type', 'radio');
    readBtn.setAttribute('name', `status-book-${myLibrary.length-1}`)
    readBtn.setAttribute('id', `read-book-${myLibrary.length-1}`)
    readBtn.setAttribute('value', 'read');
    p1.appendChild(readBtn);
    let readBtnLabel = document.createElement('label');
    readBtnLabel.setAttribute('for', `read-book-${myLibrary.length-1}`);
    readBtnLabel.innerText = 'Read';
    p1.appendChild(readBtnLabel);

    //p for unread btn
    let p2 = document.createElement('p');
    radioContainer.appendChild(p2);

    //unread button
    let unreadBtn = document.createElement('input');
    unreadBtn.setAttribute('type', 'radio');
    unreadBtn.setAttribute('name', `status-book-${myLibrary.length-1}`)
    unreadBtn.setAttribute('id', `unread-book-${myLibrary.length-1}`)
    unreadBtn.setAttribute('value', 'read');
    p2.appendChild(unreadBtn);
    let unreadBtnLabel = document.createElement('label');
    unreadBtnLabel.setAttribute('for', `unread-book-${myLibrary.length-1}`);
    unreadBtnLabel.innerText = 'Unread';
    p2.appendChild(unreadBtnLabel);
}

addBookToLib('book 1', 'author 1', 111, 'genre1', false);
addBookToLib('book 2', 'author 2', 222, 'genre2', false);
addBookToLib('book 3', 'author', 333, 'genre', false);
addBookToLib('book 4', 'author', 444, 'genre', false);

console.log(myLibrary);