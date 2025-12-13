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
    constructor(books = [], users = []) {
        this.books = books;
        this.users = users;
    }

    addBook(book) {

    }

    addUser(user) {

    }

    listAvailableBooks() {

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
        this.book = new Book();
        this.library = new Library();
        this.user = new User();
    }

    run() {

    }
}

const app = new App();
app.run();

