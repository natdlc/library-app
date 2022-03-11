/* 

fix remove feature in terms of library array and card index in dom

*/

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
};

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
    readBtn.setAttribute('value', 'true');
    if (read == 'true') readBtn.checked = 'true';
    p1.appendChild(readBtn);

    //read label
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
    unreadBtn.setAttribute('value', 'false');
    if (read == 'false') unreadBtn.checked = 'true';
    p2.appendChild(unreadBtn);

    //unread label
    let unreadBtnLabel = document.createElement('label');
    unreadBtnLabel.setAttribute('for', `unread-book-${myLibrary.length-1}`);
    unreadBtnLabel.innerText = 'Unread';
    p2.appendChild(unreadBtnLabel);

    //remove btn function 
    removeBtn.addEventListener('click', e => {
        let cardIndex = e.path[2].dataset.id;
        e.path[2].remove();
        // myLibrary.splice(cardIndex, 1)
        console.log(cardIndex);
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
    modalWrapper.style = 'display: none';
    let bookTitle = titleInput.value;
    let bookAuthor = authorInput.value;
    let pageCount = pageInput.value;
    let genreInfo = genreInput.value;
    let readStatus = document.querySelector('input[name=status-input]:checked').value;
    addBookToLib(bookTitle, bookAuthor, pageCount, genreInfo, readStatus);
    titleInput.value = '';
    authorInput.value = '';
    pageInput.value = '';
    genreInput.value = '';
    document.querySelector('#read-input').checked = false;
    document.querySelector('#unread-input').checked = false;
})

