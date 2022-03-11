/* 

~~Features to add~~

- image upload
- date added
- # of pages read
- 'no books' indicator when library is empty
- placeholders on form
- x button on form
- customize form validation messages

~~Bugs to fix~~

- modal on mobile overflows
- no space below add button in mobile
- submit button generates error (see console)

*/

let cardsWrapper = document.querySelector('.cards-wrapper');
let myLibrary = [];

function Book(title, author, page, genre, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.genre = genre;
    this.read = read;
};

function addBookToLib(title, author, page, genre, read) {
    let newBook = new Book(title, author, page, genre, read);
    myLibrary.push(newBook);

    /* CREATE ELEMENTS */

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
    bookAuthor.innerText = `Author: ${author}`;
    bookInfoWrapper.appendChild(bookAuthor);

    //page count
    let pageCount = document.createElement('p');
    pageCount.classList.add('page-count');
    pageCount.innerText = `Pages: ${page}`;
    bookInfoWrapper.appendChild(pageCount);

    //genre
    let bookGenre = document.createElement('p');
    bookGenre.classList.add('genre');
    bookGenre.innerText = `Genre: ${genre}`;
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
    readBtn.setAttribute('name', `statusBook_${myLibrary.length-1}`)
    readBtn.setAttribute('id', `read-book-${myLibrary.length-1}`)
    readBtn.setAttribute('value', 'true');
    if (read == 'true') readBtn.checked = 'true';
    p1.appendChild(readBtn);

    //read label
    let readBtnLabel = document.createElement('label');
    readBtnLabel.setAttribute('for', `read-book-${myLibrary.length-1}`);
    readBtnLabel.innerText = 'Read';
    p1.appendChild(readBtnLabel);

    //p for to read btn
    let p2 = document.createElement('p');
    radioContainer.appendChild(p2);

    //to read button
    let toReadBtn = document.createElement('input');
    toReadBtn.setAttribute('type', 'radio');
    toReadBtn.setAttribute('name', `statusBook_${myLibrary.length-1}`)
    toReadBtn.setAttribute('id', `to-read-book-${myLibrary.length-1}`)
    toReadBtn.setAttribute('value', 'false');
    if (read == 'false') toReadBtn.checked = 'true';
    p2.appendChild(toReadBtn);

    //to read label
    let toReadBtnLabel = document.createElement('label');
    toReadBtnLabel.setAttribute('for', `to-read-book-${myLibrary.length-1}`);
    toReadBtnLabel.innerText = 'To Read';
    p2.appendChild(toReadBtnLabel);

    //remove btn function 
    removeBtn.addEventListener('click', e => {
        let cardElem = e.path[2];
        let cardTitle = cardElem.children[1].innerText;
        myLibrary.splice(myLibrary.findIndex(book => book.title == cardTitle), 1);
        console.log(myLibrary);
        cardElem.remove();
    })
};

//add book button
let addBookBtn = document.querySelector('#add-book');
let modalWrapper = document.querySelector('.modal-wrapper');
addBookBtn.addEventListener('click', () => {
    modalWrapper.style = 'display: flex';
});

//get form elements
let titleInput = document.querySelector('#title-input');
let authorInput = document.querySelector('#author-input');
let pageInput = document.querySelector('#page-count-input');
let genreInput = document.querySelector('#genre-text-input');

//cancel button from modal
let cancelBtn = document.querySelector('#cancel-btn');
cancelBtn.addEventListener('click', () => {
    modalWrapper.style = 'display: none';
});

//submit button
let submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', () => {
    let bookTitle = titleInput.value;
    let bookAuthor = authorInput.value;
    let pageCount = pageInput.value;
    let genreInfo = genreInput.value;
    let readStatus = document.querySelector('input[name=statusInput]:checked').value;
    addBookToLib(bookTitle, bookAuthor, pageCount, genreInfo, readStatus);
    titleInput.value = '';
    authorInput.value = '';
    pageInput.value = '';
    genreInput.value = '';
    document.querySelector('#read-input').checked = false;
    document.querySelector('#to-read-input').checked = false;
    modalWrapper.style = 'display: none';
})