class Product {
    constructor(t, i, d, p) {
        this.title = t;
        this.image = i;
        this.description = d;
        this.price = p;
    }

    get price() {
        return `$${this._price}`;
    }

    set price(price) {
        if (price < 0) {
            console.warn("Price should be greater than 0");
            this._price = 0;
        }
        this._price = price;
    }

    get rawPrice() {
        return this._price;
    }
}

class Cart {
    items = [];
    totalAmountEl;
    totalItemsEl;

    get totalAmount() {
        return this.items.reduce((total, item) => total + item.rawPrice, 0);
    }

    updateDisplay() {
        if (this.totalAmountEl) {
            this.totalAmountEl.textContent = `Total Amount: $${this.totalAmount}`;
        }
        if (this.totalItemsEl) {
            this.totalItemsEl.textContent = `Total Items: ${this.items.length}`;
        }
    }


    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <div class="cart">
        <div><h3 id="cart-total-items">Total Items: ${this.items.length}</h3></div>
        <div><p id="cart-total-amount">Total Amount: $${this.totalAmount}</p></div>
        </div>
        `

        this.totalAmountEl = cartEl.querySelector(`#cart-total-amount`);
        this.totalItemsEl = cartEl.querySelector(`#cart-total-items`);

        const divApp = document.getElementById(`app`);
        divApp.prepend(cartEl);
    }
}

class CreateProduct{
    constructor(cartInstance) {
        this.cart = cartInstance;
    }

    products = [
        new Product
        (`Pillow`, `https://cdn.thewirecutter.com/wp-content/media/2025/12/BEST-MEMORY-FOAM-PILLOWS-2048px-6822.jpg?auto=webp&quality=75&width=1024`, `Bed pillow offers exceptional comfort for a better night's sleep`, 39.99),
        new Product
        (`Box Spring Bed `, `https://m.media-amazon.com/images/I/81a-oJGw2-L._AC_UF894,1000_QL80_.jpg`, `Durable fabric: The fabric features a simple and clean look, and is breathable and durable. `, 425.68)
    ]

    getProducts() {
        return this.products;
    }

    createProduct(product) {
        const liElement = document.createElement("li");
        liElement.className = `product-item`

        liElement.innerHTML = `
        <div><h2>${product.title}</h2></div>
        <div><img src="${product.image}" alt="${product.title}"></div>
        <div><p>${product.description}</p></div>
        <div><p>${product.price}</p></div>
        <div><button>Add to Cart</button></div>
        `
        const addToCartBtn = liElement.querySelector(`button`);
        addToCartBtn.addEventListener("click", () => {
            this.cart.items.push(product);
            this.cart.updateDisplay();
            console.log(product);
            console.log(this.cart.items);
        })
        return liElement;
    }
}

class RenderProduct extends CreateProduct {
    constructor(cartInstance) {
        super(cartInstance);
    }

    render() {
        const divApp = document.getElementById(`app`);
        const ulElement = document.createElement("ul");
        ulElement.id = `product-list`;

        this.getProducts().forEach(product => {
            const liElement = this.createProduct(product);
            ulElement.append(liElement);
        })

        divApp.append(ulElement);
    }
}

const cart = new Cart();
cart.render();

const renderProduct = new RenderProduct(cart);
renderProduct.render();

