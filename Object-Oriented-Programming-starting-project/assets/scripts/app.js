class Product {
    constructor(title, image, price, desc) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
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
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product('Forest', `https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg`, 2000, `Nature Path by water and trees`),
        new Product(`Scene`, `https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg`, 6000, `Beautiful lake around the mountains`),
    ];

    constructor() {}

    render() {
        const renderHook = document.getElementById(`app`);
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList();
productList.render();

