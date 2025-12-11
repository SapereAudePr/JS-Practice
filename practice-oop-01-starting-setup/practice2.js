class Customer {
    constructor(name) {
        this.name = name;
    }

    orderBooks(orderService, bookName) {
        return orderService.createOrder(this, bookName);
    }
}


class BookStore {
    constructor(books) {
        this.books = books;
    }

    getPrice(bookName) {
        const price = this.books[bookName];
        return price === undefined ? null : price;
    }
}


class OrderService {
    constructor(bookStore, logger) {
        this.bookStore = bookStore;
        this.logger = logger;
    }

    createOrder(customer, bookName) {
        const bookPrice = this.bookStore.getPrice(bookName);
        const customerName = customer.name;
        this.logger.log(`Creating order with customer: ${customerName}, bookName: ${bookName} and book price: ${bookPrice}`);
    }
}

class Logger {
    log(text) {
        console.log(`[LOG]${text}`);
    }
}

class App {
    constructor() {
        const bookList = {
            "Dune": 60,
            "TheMartian": 80,
        }

        this.bookStore = new BookStore(bookList);
        this.logger = new Logger();
        this.orderService = new OrderService(this.bookStore, this.logger);
        this.customer = new Customer(`Raven`);
    }

    init() {
        const order1 = this.customer.orderBooks(this.orderService, `Dune`);
        const order2 = this.customer.orderBooks(this.orderService, `TheMartian`);
    }
}

const app = new App();
app.init();
