class Product {
    title;
    imageUrl;
    price;
    description;

    constructor(title, image, price, desc) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}

const productList = {
    products: [
        new Product('Forest', `https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg`, 2000, `Nature Path by water and trees`),
        new Product(`Scene`, `https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg`, 6000, `Beautiful lake around the mountains`),
    ],
    render() {
        const renderHook = document.getElementById(`app`);
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = `product-item`;
            prodEl.innerHTML = `
                <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                            <h2>${prod.title}</h2>
                            <h3>\$${prod.price}</h3>
                            <p>${prod.description}</p>
                            <button>Add to cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}
productList.render();


