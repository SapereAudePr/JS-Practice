class User {
    constructor(name, logger, borrowedBooks = []) {
        this.name = name;
        this.borrowedBooks = borrowedBooks;
        this.logger = logger;
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= 3) {
            this.logger.log(`-- [WARNING!] ${this.name} can't borrow ${book.title}. ${this.name} already has: ${this.borrowedBooks.length} books!`);
            return;
        }
        this.borrowedBooks.push(book);
        book.borrowBook(this);
    }

    returnBook(book) {
        this.borrowedBooks.splice(0, 1, book);
        book.returnBook(this);
    }
}

class Book {
    constructor(title, logger) {
        this.title = title;
        this.isBorrowed = false;
        this.borrowedBy = null;
        this.logger = logger;
    }

    borrowBook(user) {
        if (this.isBorrowed) {
            this.logger.log(` -- [WARNING!] ${user.name} can't borrow ${this.title} is already borrowed by ${this.borrowedBy}!`)
            return;
        }

        this.borrowedBy = user.name
        this.isBorrowed = true;

        this.logger.log(` -- [BORROWED!] ${this.title} is borrowed by ${this.borrowedBy}!`)
    }

    returnBook(user) {
        this.borrowedBy = null;
        this.isBorrowed = false;

        this.logger.log(`${user.name} is returning ${this.title}`)
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
        this.users.push(user);
    }

    listAvailableBooks() {
        this.books.forEach(book => {
            if (book.isBorrowed === false) {
                this.logger.log(`-- [Available book]: ${book.title}`);
            }
        })
    }

    listUsers() {
        this.users.forEach(user => {
            console.log(user.name)
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
        this.library = new Library(this.logger);

        const book1 = new Book(`The Ministry for the Future`, this.logger);
        const book2 = new Book(`Where the Crawdads Sing`, this.logger);
        const book3 = new Book(`Norwegian Wood`, this.logger);
        const book4 = new Book(`Sapiens: A Brief History of Humankind`, this.logger);
        const book5 = new Book(`A Gentleman in Moscow`, this.logger);
        const book6 = new Book(`The Martian`, this.logger);
        const book7 = new Book(`The WW2 History`, this.logger);
        const book8 = new Book(`Eden in the Amazon`, this.logger);

        this.library.addBook(book1);
        this.library.addBook(book2);
        this.library.addBook(book3);
        this.library.addBook(book4);
        this.library.addBook(book5);
        this.library.addBook(book6);
        this.library.addBook(book7);
        this.library.addBook(book8);

        this.book1 = book1
        this.book2 = book2
        this.book3 = book3
        this.book4 = book4
        this.book5 = book5
        this.book6 = book6
        this.book7 = book7
        this.book8 = book8

        const alice = new User(`Alice`, this.logger);
        const john = new User(`John`, this.logger);
        const raven = new User(`Raven`, this.logger);

        this.library.addUser(alice);
        this.library.addUser(john);
        this.library.addUser(raven);

        this.alice = alice;
        this.john = john;
        this.raven = raven;
    }

    run() {
        this.alice.borrowBook(this.book1);
        this.alice.borrowBook(this.book2);
        this.alice.borrowBook(this.book3);
        this.alice.borrowBook(this.book4);

        this.john.borrowBook(this.book4);
        this.john.borrowBook(this.book5);
        this.john.borrowBook(this.book6);
        this.john.borrowBook(this.book7);

        this.raven.borrowBook(this.book4);
        this.raven.borrowBook(this.book7);
        this.raven.borrowBook(this.book8);

        this.raven.returnBook(this.book8);


        this.library.listAvailableBooks();
        // this.library.listUsers();
    }
}

const app = new App();
app.run();

