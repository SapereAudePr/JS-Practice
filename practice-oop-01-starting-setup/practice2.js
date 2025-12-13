class User {
    constructor(name, borrowedBooks = []) {
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    }

    borrowBook(book) {

    }

    returnBook(book) {

    }
}


class Book {
    constructor(title, isBorrowed = false, borrowedBy = null) {
        this.title = title;
        this.isBorrowed = isBorrowed;
        this.borrowedBy = borrowedBy;
    }

    borrowBook(book) {

    }

    returnBook() {

    }
}

class Library {
    constructor(logger, books = [], users = []) {
        this.logger = logger;
        this.books = books;
        this.users = users;
    }

    addBook(book) {
        this.books.push(book);
    }

    addUser(user) {
    }

    listAvailableBooks() {
        this.books.forEach(book => {
            if (book.isBorrowed === false) {
                this.logger.log(`Available book: ${book.title}`);
            }
        })
    }
}

class Logger {
    constructor() {
        this.index = 0;
    }

    log(text) {
        this.index++;
        console.log(`[LOG] -- [${this.index}] ${text}`);
    }
}

class App {
    constructor() {
        this.logger = new Logger();
        this.book = new Book();
        this.library = new Library(this.logger);
        this.user = new User(this.book);

        this.book1 = new Book(`The Ministry for the Future`, false, null);
        this.book2 = new Book(`Where the Crawdads Sing`, false, null);
        this.book3 = new Book(`Norwegian Wood`, false, null);
        this.book4 = new Book(`Sapiens: A Brief History of Humankind`, false, null);
        this.book5 = new Book(`A Gentleman in Moscow`, false, null);

        this.library.addBook(this.book1);
        this.library.addBook(this.book2);
        this.library.addBook(this.book3);
        this.library.addBook(this.book4);
        this.library.addBook(this.book5);

        this.user1 = new User(`Alice`);
        this.user2 = new User(`Bok`);

        this.library.addUser(this.user1);
        this.library.addUser(this.user2);
    }

    run() {
        this.library.listAvailableBooks();


    }
}

const app = new App();
app.run();

