productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name  limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>
  `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

let cartQuantity = 0;

//loop through the array for every button
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId; 
    /*destructuring, it would do the same as the code above
    const {productId}  = button.dataset; */

 //get the correct quantity selector for this product
 const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

 //use number() to convert the value to a number because what we got from the selector is a string
 const selectedQuantity = Number(quantitySelector.value);
//get the correct added to cart for this product
 const addedToCart = document.querySelector(`.js-added-to-cart-${productId}`);

  addedToCart.classList.add("show-added")

  setTimeout(()=>{
  addedToCart.classList.remove("show-added");
  },2000)

 let MatchingItem;
    //check if a product is already in the cart, save it into MatchingItem
    cart.forEach((item) => {
      if (productId === item.productId) {
        MatchingItem = item;
      }
    });

    // if an item is already in the cart, increase the quantity only, else add it to the cart.
    if (MatchingItem) {
      MatchingItem.quantity += selectedQuantity;
    } else {
      cart.push({
        productId: productId,
       // productId, shorthand for above
        quantity: selectedQuantity,
      });
    }

    let cartQuantity = 0;
    //loop through the cart and add all the quantities together,thens accumulate it in the cartQuantity

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    //put the cartQuantity on the webpage.
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

    console.log(cart);
    
  })
});
