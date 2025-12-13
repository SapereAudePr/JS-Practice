class User {
    constructor(name, borrowedBooks = []) {
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
        book.borrowBook(this);
    }

    returnBook(book) {

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
            this.logger.log(`-- [WARNING!] ${this.title} is already borrowed by ${this.borrowedBy}!`)
            return;
        }
        this.borrowedBy = user.name
        this.isBorrowed = true;

        console.log(this);

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
        this.users.push(user);
    }

    listAvailableBooks() {
        this.books.forEach(book => {
            if (book.isBorrowed === false) {
                this.logger.log(`-- [Available books]: ${book.title}`);
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

        const book1 = new Book(`The Ministry for the Future`, this.logger, false, null,);
        const book2 = new Book(`Where the Crawdads Sing`, this.logger, false, null,);
        const book3 = new Book(`Norwegian Wood`, this.logger, false, null,);
        const book4 = new Book(`Sapiens: A Brief History of Humankind`, this.logger, false, null,);
        const book5 = new Book(`A Gentleman in Moscow`, this.logger, false, null,);

        this.library.addBook(book1);
        this.library.addBook(book2);
        this.library.addBook(book3);
        this.library.addBook(book4);
        this.library.addBook(book5);

        this.book1 = book1
        this.book2 = book2
        this.book3 = book3
        this.book4 = book4
        this.book5 = book5

        const alice = new User(`Alice`);
        const john = new User(`John`);
        const raven = new User(`Raven`);

        this.library.addUser(alice);
        this.library.addUser(john);
        this.library.addUser(raven);

        this.alice = alice;
        this.john = john;
        this.raven = raven;
    }

    run() {
        this.alice.borrowBook(this.book1);
        this.john.borrowBook(this.book2);
        // this.raven.borrowBook(this.book1);
        this.raven.borrowBook(this.book3);
        this.raven.borrowBook(this.book4);


        this.library.listAvailableBooks();
        // this.library.listUsers();
    }
}

const app = new App();
app.run();

