document.addEventListener('DOMContentLoaded', function() {
    const addCardBtn = document.querySelector('.btn');
    const modal = document.querySelector('.modal');
    const form = document.querySelector('#productForm');
    const closeBtn = document.querySelector('.modal__btn-close');
    const container = document.querySelector('.container');

    addCardBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const productName = document.querySelector('#productName').value;
      const productDesc = document.querySelector('#productDesc').value;
      const productPrice = document.querySelector('#productPrice').value;

      const newProductCard = document.createElement('div');
      newProductCard.classList.add('product-card');
  
      const productImage = document.createElement('img');
      productImage.src = 'https://www.logotypes101.com/logos/48/F723ADF988615AB73CAD9CE4EC07D775/IMG186.png';
      productImage.alt = 'Product Image';
      productImage.classList.add('product-image');
      newProductCard.appendChild(productImage);
  
      const productDetails = document.createElement('div');
      productDetails.classList.add('product-details');
      newProductCard.appendChild(productDetails);
  
      const productNameElement = document.createElement('h3');
      productNameElement.classList.add('product-name');
      productNameElement.textContent = productName;
      productDetails.appendChild(productNameElement);
  
      const productDescription = document.createElement('p');
      productDescription.classList.add('product-description');
      productDescription.textContent = productDesc;
      productDetails.appendChild(productDescription);
  
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
      productDetails.appendChild(productInfo);
  
      const productPriceElement = document.createElement('p');
      productPriceElement.classList.add('product-price');
      productPriceElement.textContent = productPrice;
      productInfo.appendChild(productPriceElement);

      container.appendChild(newProductCard);

      modal.style.display = 'none';

      form.reset();
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const priceInput = document.getElementById('productPrice');
  

    priceInput.addEventListener('input', function() {
      const priceValue = priceInput.value;
      if (!isNaN(priceValue)) {
        priceInput.value = '$' + priceValue;
      }
    });
  });