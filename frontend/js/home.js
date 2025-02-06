document.addEventListener('DOMContentLoaded', () => {
    async function fetchProducts() {
        try {
            const response = await fetch('/products');
            const products = await response.json();
            const container = document.getElementById('product-container');
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <p>${product.description}</p>
                `;
                container.appendChild(productCard);
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    fetchProducts();
});