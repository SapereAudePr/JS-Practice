class Product {
    constructor(title, image, price, desc) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
        this.render();
    }

    render() {}

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attribute of attributes) {
                rootElement.setAttribute(attribute.name, attribute.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total Amount: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        return this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
    }

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render() {
        const cartEl = this.createRootElement(`section`, `cart`)
        cartEl.innerHTML = `
        <h2>Total Amount: \$${0}</h2>
        <button>Order Now!</button>
        `;
        this.totalOutput = cartEl.querySelector(`h2`);
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement(`li`, `product-item`);
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
    }
}

class ProductList extends Component {
    products = [
        new Product('Forest', `https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg`, 2000, `Nature Path by water and trees`),
        new Product(`Scene`, `https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg`, 6000, `Beautiful lake around the mountains`),
    ];

    constructor(renderHookId) {
        super(renderHookId);
    }

    render() {
        this.createRootElement(`ul`, `product-list`, [new ElementAttribute(`id`, `prod-list`)]);
        for (const prod of this.products) {
            new ProductItem(prod, `prod-list`);
        }
    }
}


class Shop {
    render() {
        this.cart = new ShoppingCart(`app`);
        new ProductList(`app`);
    }
}


class App {
    static cart;

    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();

