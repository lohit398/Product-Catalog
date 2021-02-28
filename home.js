window.addEventListener('load', () => {
    fetch('https://product-catalog-babayaga.herokuapp.com/products')
        .then(response => response.json())
        .then(data => {
            data.map(item => {
                let cardElement = document.createElement('div');
                cardElement.className = 'card';

                let productImgDiv = document.createElement('div');
                productImgDiv.id = 'product-image';
                let imgElement = document.createElement('img');
                imgElement.src = item.Image_URL;
                imgElement.height = "400";
                productImgDiv.appendChild(imgElement);
                cardElement.appendChild(productImgDiv);

                let productDetailsDiv = document.createElement('div');
                productDetailsDiv.id = 'product-details';
                let childDiv = document.createElement('div');


                let strongElement = document.createElement('strong');
                strongElement.innerHTML = item.Name;
                childDiv.appendChild(strongElement);
                let paraElement = document.createElement('p');
                paraElement.innerHTML = 'By Lohit.B';
                childDiv.appendChild(paraElement);
                let strongPriceElement = document.createElement('strong');
                strongPriceElement.innerHTML = item.Price;
                childDiv.appendChild(strongPriceElement);
                let btnsDiv = document.createElement('div');
                btnsDiv.id = 'cart-btns';
                let btn1 = document.createElement('button');
                btn1.innerHTML = 'Add to Cart';
                btnsDiv.appendChild(btn1);
                let btn2 = document.createElement('button');
                btn2.innerHTML = 'Buy Now';
                btnsDiv.appendChild(btn2);
                productDetailsDiv.appendChild(childDiv);
                productDetailsDiv.appendChild(btnsDiv);
                cardElement.appendChild(productDetailsDiv);
                document.getElementById('product-container').appendChild(cardElement);
            })
        });
})
