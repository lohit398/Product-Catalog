window.addEventListener('load', () => {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => console.log(data)); // Products are retrieved
})
