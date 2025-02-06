document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('add-product-form');

    addProductForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;
        const description = document.getElementById('product-description').value;

        try {
            const response = await fetch('/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, price, description })
            });

            if (response.ok) {
                alert('Product added successfully');
                addProductForm.reset();
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Product add error:', error);
        }
    });

    async function fetchVisitorStats() {
        try {
            const response = await fetch('/seller/stats');
            const stats = await response.json();
            document.getElementById('visitor-count').textContent = 
                `${stats.visitors} Visitors`;
        } catch (error) {
            console.error('Visitor stats error:', error);
        }
    }

    fetchVisitorStats();
});