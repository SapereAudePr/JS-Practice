class Product {
    constructor(title, image, price, desc) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}

class ShoppingCart {
    items = [];

    addProduct(product) {
        this.items.push(product);
        this.totalOutput.innerHTML = `<h2>Total Amount: \$${1}</h2>`;
    }

    render() {
        const cartEl = document.createElement(`section`);
        cartEl.innerHTML = `
        <h2>Total Amount: \$${0}</h2>
        <button>Order Now!</button>
        `;
        cartEl.className = `cart`;
        this.totalOutput = cartEl.querySelector(`h2`);
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = `product-item`;
        prodEl.innerHTML = `
                <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class="product-item__content">
                            <h2>${this.product.title}</h2>
                            <h3>\$${this.product.price}</h3>
                            <p>${this.product.description}</p>
                            <button>Add to cart</button>
                    </div>
                </div>
            `;
        const addCartBtn = prodEl.querySelector('button');
        addCartBtn.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product('Forest', `https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg`, 2000, `Nature Path by water and trees`),
        new Product(`Scene`, `https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg`, 6000, `Beautiful lake around the mountains`),
    ];

    constructor() {
    }

    render() {

        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}


class Shop {
    render() {
        const renderHook = document.getElementById(`app`);
        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}


class App {
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();



