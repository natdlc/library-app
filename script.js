const Library = (() => {
    class Book {
        constructor(title, author, pages, readStatus) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.readStatus = readStatus;
        };
    };

    let library = {};

    const Elem = (() => {
        const body = document.querySelector('body');
        const booksWrapper = document.querySelector('.books-wrapper');
        return {body, booksWrapper};
    })();

    const createBookCard = bookDetails => {
        const wrapper = Elem.booksWrapper;
        const bookCard = document.createElement('li');
        const titleAndX = document.createElement('div');
        const title = document.createElement('h2');
        const delBtn = document.createElement('p');
        const bookInfo = document.createElement('div');
        const authorBox = document.createElement('div');
        const authorLabel = document.createElement('h3');
        const author = document.createElement('p');
        const pageCountBox = document.createElement('div');
        const pageCountLabel = document.createElement('h3');
        const pageCount = document.createElement('p');
        const readStatusBox = document.createElement('div');
        const readStatusLabel = document.createElement('h3');
        const readSelection = document.createElement('select');
        const completeOpt = document.createElement('option');
        const inProgressOpt = document.createElement('option');
        const notStartedOpt = document.createElement('option');

        bookCard.classList.add('book-card');
        titleAndX.classList.add('title-and-x');
        bookInfo.classList.add('book-info');
        authorBox.classList.add('author');
        pageCountBox.classList.add('page-number');
        readStatusBox.classList.add('read-status');

        title.innerText = bookDetails[0];
        author.innerText = bookDetails[1];
        pageCount.innerText = bookDetails[2];
        const selectedOpt = bookDetails[3];
        delBtn.innerText = 'X';
        authorLabel.innerText = 'Author';
        pageCountLabel.innerText = 'Page Count';
        readStatusLabel.innerText = 'Read Status';
        completeOpt.innerText = 'Complete';
        inProgressOpt.innerText = 'In Progress';
        notStartedOpt.innerText = 'Not Started';

        delBtn.setAttribute('id', 'delete-btn');        
        readSelection.setAttribute('name', 'readStatus');
        readSelection.setAttribute('id', 'read-status');
        completeOpt.setAttribute('value', 'complete');
        inProgressOpt.setAttribute('value', 'in progress');
        notStartedOpt.setAttribute('value', 'not started');
        
        if (selectedOpt === 'complete') completeOpt.setAttribute('selected', '')
        else if (selectedOpt === 'in progress') inProgressOpt.setAttribute('selected', '')
        else notStartedOpt.setAttribute('selected', '');
        
        wrapper.appendChild(bookCard);
        bookCard.appendChild(titleAndX);
        titleAndX.appendChild(title);
        titleAndX.appendChild(delBtn);
        bookCard.appendChild(bookInfo);
        bookInfo.appendChild(authorBox);
        authorBox.appendChild(authorLabel);
        authorBox.appendChild(author);
        bookInfo.appendChild(pageCountBox);
        pageCountBox.appendChild(pageCountLabel);
        pageCountBox.appendChild(pageCount);
        bookInfo.appendChild(readStatusBox);
        readStatusBox.appendChild(readStatusLabel);
        readStatusBox.appendChild(readSelection);
        readSelection.appendChild(completeOpt);
        readSelection.appendChild(inProgressOpt);
        readSelection.appendChild(notStartedOpt);

        delBtn.addEventListener('click', () => {
            delete library[title.innerText];
            bookCard.remove();
        });

        readSelection.addEventListener('click', e => {library[title.innerText].readStatus = e.path[0].value});
    };

    const createNewBookModal = () => {
        const body = Elem.body;
        const addBookModal = document.createElement('div');
        const form = document.createElement('form');
        const legend = document.createElement('legend');
        const ctrlsWrapper = document.createElement('div');
        const titleInp = document.createElement('input');
        const authorInp = document.createElement('input');
        const pagesInp = document.createElement('input');
        const readCtrl = document.createElement('div');
        const readInpLabel = document.createElement('label');
        const readInpSelect = document.createElement('select');
        const completeOpt = document.createElement('option');
        const inProgressOpt = document.createElement('option');
        const notStartedOpt = document.createElement('option');
        const btnsWrapper = document.createElement('div');
        const cancel = document.createElement('button');
        const submit = document.createElement('button');
        
        titleInp.setAttribute('type', 'text');
        titleInp.setAttribute('id', 'title-input');
        titleInp.setAttribute('placeholder', 'Title');
        titleInp.setAttribute('required','');
        authorInp.setAttribute('type', 'text');
        authorInp.setAttribute('id', 'author-input');
        authorInp.setAttribute('placeholder', 'Author');
        authorInp.setAttribute('required','');
        pagesInp.setAttribute('type', 'number');
        pagesInp.setAttribute('id', 'pages-input');
        pagesInp.setAttribute('placeholder', 'Page Count');
        pagesInp.setAttribute('required','');
        readInpLabel.setAttribute('for', 'read-status-input');
        readInpSelect.setAttribute('id', 'read-status-input');
        readInpSelect.setAttribute('name', 'readStatusInput');
        completeOpt.setAttribute('value', 'complete');
        inProgressOpt.setAttribute('value', 'in progress');
        notStartedOpt.setAttribute('value', 'not started');
        cancel.setAttribute('type','button');
        submit.setAttribute('type', 'submit');
        
        addBookModal.classList.add('add-book-modal');
        ctrlsWrapper.classList.add('controls-wrapper');
        readCtrl.classList.add('read-control');
        btnsWrapper.classList.add('buttons-wrapper');

        legend.innerText = 'New Book';
        readInpLabel.innerText = 'Read Status';
        completeOpt.innerText = 'Complete';
        notStartedOpt.innerText = 'Not Started';
        cancel.innerText = 'Cancel';
        submit.innerText = 'Submit';
        
        body.appendChild(addBookModal);
        addBookModal.appendChild(form);
        form.appendChild(legend);
        form.appendChild(ctrlsWrapper);
        ctrlsWrapper.appendChild(titleInp);
        ctrlsWrapper.appendChild(authorInp);
        ctrlsWrapper.appendChild(pagesInp);
        ctrlsWrapper.appendChild(readCtrl);
        readCtrl.appendChild(readInpLabel);
        readCtrl.appendChild(readInpSelect);
        readInpSelect.appendChild(completeOpt);
        readInpSelect.appendChild(inProgressOpt);
        readInpSelect.appendChild(notStartedOpt);
        form.appendChild(btnsWrapper);
        btnsWrapper.appendChild(cancel);
        btnsWrapper.appendChild(submit);

        cancel.addEventListener('click', () => {addBookModal.remove();});

        submit.addEventListener('click', () => {
            if (form[0].validity.valueMissing || form[1].validity.valueMissing || form[2].validity.valueMissing) return;
            let bookInfo = [titleInp.value, authorInp.value, pagesInp.value, form[3].value];
            addNewBook(bookInfo);
            addBookModal.remove();
        });
    };

    const addNewBook = bookInfo => {
        createBookCard(bookInfo);
        library[bookInfo[0]] = new Book(...bookInfo);
    };

    document.querySelector('#add-book').addEventListener('click', () => {createNewBookModal()});
})();