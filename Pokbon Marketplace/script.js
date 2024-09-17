// script.js

document.querySelectorAll('.add-to-order').forEach(button => {
    button.addEventListener('click', () => {
        // Logic to add the item to the user's order
        alert('Item added to your order!');
    });
});
document.querySelectorAll('.footer-section ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This link will navigate to the respective page.');
        // Implement actual navigation logic here
    });
});

// Example: Smooth Scroll for Hero Buttons
document.querySelectorAll('.cta-buttons a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Category Hover Effect (optional)
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('img').style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('img').style.transform = 'scale(1)';
    });
});

// Example: Redirect to Category Page (This is already handled by the <a> tag)
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function() {
        this.querySelector('.dropdown-content').classList.toggle('show');
    });
});

function scrollLeft() {
    document.querySelector('.reviews').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.reviews').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

const form = document.querySelector('#contact-us form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Send the form data to your server or API
    // You can use the Fetch API or a library like Axios
    fetch('/your-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            message
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});



//this is for the shop page
// Example array of products
const products = [
    { name: 'Product 1', price: '$29.99', img: 'product1.jpg', description: 'Description for Product 1' },
    { name: 'Product 2', price: '$39.99', img: 'p.jpg', description: 'Description for Product 2' },
    { name: 'Product 3', price: '$39.99', img: 'kettle.jpg', description: 'Description for Product 3' },
    { name: 'Product 4', price: '$39.99', img: 'kids.jpg', description: 'Description for Product 4' },
    { name: 'Product 5', price: '$39.99', img: 'kitchen.jpg', description: 'Description for Product 5' },
    { name: 'Product 6', price: '$39.99', img: 'electronics.jpeg', description: 'Description for Product 6' },
    { name: 'Product 7', price: '$39.99', img: 'TV-set-up-service-home.jpg', description: 'Description for Product 7' },
    { name: 'Product 8', price: '$39.99', img: 'office.jpg', description: 'Description for Product 8' },
    { name: 'Product 9', price: '$39.99', img: 'office.jpg', description: 'Description for Product 9' },
    { name: 'Product 10', price: '$39.99', img: 'office.jpg', description: 'Description for Product 10' },
    // Add more products as needed
];

let currentProductIndex = 0;
const productsPerPage = 6;

// Function to load products into the grid
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    
    // Load 6 products at a time
    for (let i = 0; i < productsPerPage && currentProductIndex < products.length; i++) {
        const product = products[currentProductIndex];
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <h4>${product.description}</h4>
            <button class="btn add-to-cart">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
        currentProductIndex++;
    }
}

// Function to check if the user has scrolled to the bottom of the page
function handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadProducts();
    }
}

// Load initial set of products
loadProducts();

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);


//this is for the consumer electronic page
// Example array of consumer electronics products
const electronicsProducts = [
    { name: 'Smartphone A', price: '$299.99', img: 'smartphoneA.jpg', description: 'High-performance smartphone with a sleek design.' },
    { name: 'Laptop X', price: '$899.99', img: 'laptopX.jpg', description: 'Powerful laptop for work and entertainment.' },
    { name: 'Smart TV 50"', price: '$599.99', img: 'smartTV50.jpg', description: '50-inch smart TV with 4K resolution.' },
    { name: 'Wireless Headphones', price: '$149.99', img: 'wirelessHeadphones.jpg', description: 'Noise-cancelling wireless headphones.' },
    { name: 'Bluetooth Speaker', price: '$49.99', img: 'bluetoothSpeaker.jpg', description: 'Portable Bluetooth speaker with great sound quality.' },
    { name: 'Smartwatch Z', price: '$199.99', img: 'smartwatchZ.jpg', description: 'Stylish smartwatch with fitness tracking features.' },
    { name: '4K Action Camera', price: '$249.99', img: 'actionCamera.jpg', description: 'Waterproof 4K action camera for extreme sports.' },
    { name: 'Drone Pro', price: '$799.99', img: 'dronePro.jpg', description: 'Professional drone with 4K camera and GPS.' },
    { name: 'Gaming Console Y', price: '$399.99', img: 'gamingConsole.jpg', description: 'Next-gen gaming console with immersive gameplay.' },
    { name: 'Wireless Earbuds', price: '$89.99', img: 'wirelessEarbuds.jpg', description: 'Compact and comfortable wireless earbuds.' },
    { name: 'Smart Home Hub', price: '$149.99', img: 'smartHomeHub.jpg', description: 'Control your smart home devices with ease.' },
    { name: 'Robot Vacuum Cleaner', price: '$299.99', img: 'robotVacuum.jpg', description: 'Smart robot vacuum cleaner with Wi-Fi connectivity.' },
    { name: 'External Hard Drive', price: '$79.99', img: 'externalHardDrive.jpg', description: '1TB external hard drive for extra storage.' },
    { name: 'Digital Camera', price: '$499.99', img: 'digitalCamera.jpg', description: 'High-quality digital camera for photography enthusiasts.' },
    { name: 'VR Headset', price: '$299.99', img: 'vrHeadset.jpg', description: 'Virtual reality headset for an immersive experience.' }
];

// Function to load products into the grid
function loadElectronicsProducts() {
    const productGrid = document.getElementById('product-grid');
    
    electronicsProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <p class="product-description">${product.description}</p>
            <button class="btn add-to-cart">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Load products when the page is ready
document.addEventListener('DOMContentLoaded', loadElectronicsProducts);

