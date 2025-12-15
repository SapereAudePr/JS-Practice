class Customer {
    constructor(logger, client, cart) {
        this.logger = logger;
        this.client = client;
        this.cart = [];
    }

    addToCart(product, quantity) {
        const items = {
            product,
            quantity,
        }
        this.cart.push(items);
        this.checkout(items);
    }

    removeFromCart(product) {

    }

    checkout(store) {
        const all = {
            product: store,
            customer: this,
        }
        store.product.decreaseStock(all);
    }
}

class Product {
    constructor(store, name, price, stock) {
        this.store = store;
        this.name = name;
        this._price = price;
        this.stock = 0;
    }

    get price() {
        return `$${this._price}`;
    }

    set price(price) {
        this._price = price;
    }

    increaseStock(amount) {
        this.stock += amount;
    }

    decreaseStock(all) {
        this.stock -= all.product.quantity;
        this.store.processOrder(all)
        // this.store.logger.log(``)
    }
}

class Store {
    constructor(logger, products = [], orders = []) {
        this.logger = logger;
        this.products = products;
        this.orders = orders;
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProduct() {
        this.products.forEach(product => {
            this.logger.log(`----------[LISTED PRODUCTS]--------- [${product.name}] -- ${product.price} -- ${product.stock}]`);
        });
    }

    processOrder(all) {
        const orderList = {
            client: all.customer.client,
            quantity: all.product.quantity,
            product: all.product.product.name,
        }
        this.orders.push(orderList);

        const latestOrder = this.orders[this.orders.length - 1];

        this.logger.log(`-------[ORDERS]----------- ${latestOrder.client} ordered ${latestOrder.quantity} amount of ${latestOrder.product}`);

    }
}

class Logger {
    constructor(index) {
        this.index = 0;
    }

    log(text) {
        this.index++;
        console.log(`[LOG] [${this.index}] ${text}`);
    }
}

class App {
    constructor() {
        this.logger = new Logger();
        this.store = new Store(this.logger);

        const product1 = new Product(this.store, `Nebula Keycap Set`, 45.99, 150);
        const product2 = new Product(this.store, `Emberglow Candle`, 18.45, 320);
        const product3 = new Product(this.store, `Quantum Coffee Blend`, 12.75, 45);
        const product4 = new Product(this.store, `The Silent Oar Book`, 25.00, 88);
        const product5 = new Product(this.store, `Aetherial Socks (3-pack)`, 9.99, 500);
        const product6 = new Product(this.store, `Terra-Volt Charger`, 39.95, 110);
        const product7 = new Product(this.store, `Chrono-Dial Watch`, 145.00, 22);
        const product8 = new Product(this.store, `Zenith Sketchpad`, 6.50, 750);
        const product9 = new Product(this.store, `Pocket Meteorite`, 85.30, 12);
        const product10 = new Product(this.store, `Whirlwind Blender`, 79.99, 55);

        this.store.addProduct(product1);
        this.store.addProduct(product2);
        this.store.addProduct(product3);
        this.store.addProduct(product4);
        this.store.addProduct(product5);
        this.store.addProduct(product6);
        this.store.addProduct(product7);
        this.store.addProduct(product8);
        this.store.addProduct(product9);
        this.store.addProduct(product10);

        this.product1 = product1;
        this.product2 = product2;
        this.product3 = product3;
        this.product4 = product4;
        this.product5 = product5;
        this.product6 = product6;
        this.product7 = product7;
        this.product8 = product8;
        this.product9 = product9;
        this.product10 = product10;


        const customer1 = new Customer(this.logger, `Raven`);
        const customer2 = new Customer(this.logger, `John`);

        this.customer1 = customer1;
        this.customer2 = customer2;
    }

    run() {

        this.product1.increaseStock(150);
        this.product2.increaseStock(320);
        this.product3.increaseStock(45);
        this.product4.increaseStock(88);
        this.product5.increaseStock(500);
        this.product6.increaseStock(110);
        this.product7.increaseStock(22);
        this.product8.increaseStock(750);
        this.product9.increaseStock(12);
        this.product10.increaseStock(55);

        this.customer1.addToCart(this.product1, 5);
        this.customer1.addToCart(this.product2, 3);
        this.customer1.addToCart(this.product3, 7);
        this.customer1.addToCart(this.product4, 10);

        this.store.listProduct();
    }
}

const app = new App();
app.run();