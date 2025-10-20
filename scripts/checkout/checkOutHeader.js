import { calculateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader() {
  let checkOutHeaderHTML = "";

  checkOutHeaderHTML += `
      <div class="checkout-header-middle-section">
        Checkout(<a class="return-to-home-link 
        js-return-to-home-link" href="amazon.html">
            ${calculateCartQuantity()} items
        </a>)
      </div>
      `;

  document.querySelector(".js-checkout-header")
    .innerHTML = checkOutHeaderHTML;
    console.log(checkOutHeaderHTML);
    
}
