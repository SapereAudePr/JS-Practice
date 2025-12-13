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
    constructor(title, isBorrowed = false, borrowedBy = null) {
        this.title = title;
        this.isBorrowed = isBorrowed;
        this.borrowedBy = borrowedBy;
    }

    borrowBook(user) {
        user.borrowedBooks.forEach((book) => {
            if (book.isBorrowed) {
                console.log(`${book.title} is already borrowed by ${user.name}!`);
                return;
            }
            this.borrowedBy = user.name
            this.isBorrowed = true;
            console.log(book);
        })

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
                this.logger.log(`Available book: ${book.title}`);
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

        const alice = new User(`Alice`);
        const john = new User(`John`);
        const raven = new User(`Raven`);

        this.library.addUser(this.alice);
        this.library.addUser(this.john);

        this.alice = alice;
        this.john = john;
        this.raven = raven;
    }

    run() {
        this.alice.borrowBook(this.book1);
        this.john.borrowBook(this.book2);
        this.raven.borrowBook(this.book1);


        this.library.listAvailableBooks();
        // this.library.listUsers();
    }
}

const app = new App();
app.run();

