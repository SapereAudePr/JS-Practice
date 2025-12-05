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
        return this._price = price;
    }
}

class CreateProduct extends Product {
    constructor() {
        super();
    }

    products = [
        new Product
        (`Pillow`, `https://www.ageukincontinence.co.uk/media/catalog/product/w/h/white-pillow-1200x1200-min.jpg?quality=80&fit=bounds&height=1000&width=1000&canvas=1000:1000`, `Bed pillow offers exceptional comfort for a better night's sleep`, 39.99),
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
        `

        return liElement;
    }
}

class RenderProduct extends CreateProduct {
    constructor() {
        super();
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

const renderProduct = new RenderProduct();
renderProduct.render();