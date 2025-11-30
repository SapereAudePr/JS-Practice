const productList = {
    products: [
        {
            title: 'Forest',
            imageUrl: `https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg`,
            price: 2000,
            description: `Forest ready to be make hotels`
        },
        {
            title: 'Scene',
            imageUrl: `https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg`,
            price: 6000,
            description: `Nature ready to be make hotels`
        },
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


