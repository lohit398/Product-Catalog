window.addEventListener('load', () => {
    fetch('https://product-catalog-babayaga.herokuapp.com/products')
        .then(response => response.json())
        .then(data => console.log(data)); // Products are retrieved
})
