import {getOrder} from '../data/orders.js';
import {getProduct, loadProductsFetch} from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

async function loadPage() {
  await loadProductsFetch();

  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');

  const order = getOrder(orderId);
  const product = getProduct(productId);

  // Get additional details about the product like
  // the estimated delivery time.
  let productDetails;
  order.products.forEach((details) => {
    if (details.productId === product.id) {
      productDetails = details;
    }
  });

   const today = dayjs();
  const orderTime = dayjs(order.orderTime);
  const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);
  const percentProgress = ((today - orderTime) / (deliveryTime - orderTime)) * 100;

  // if today's date is past the delivery date.
  const deliveredMessage = today < deliveryTime ? 'Arriving on' : 'Delivered on';

  const trackingHTML = `
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${
        dayjs(productDetails.estimatedDeliveryTime).format('dddd, MMMM D')
      }
    </div>

<div class="product-info">
      ${product.name}
    </div>

    <div class="product-info">
      Quantity: ${productDetails.quantity}
    </div>

    <img class="product-image" src="${product.image}">

    <div class="progress-labels-container ">
      <div class="progress-label ${
        percentProgress < 50 ? 'current-status' : ''
      }">
        Preparing
      </div>
      <div class="progress-label ${
        percentProgress >= 50 && percentProgress < 100 ? 'current-status' : ''
      }">
        Shipped
      </div>
      <div class="progress-label  ${
        percentProgress >= 100 ? "current-status" : ''
      }">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar" style="width: ${percentProgress}%;"></div>
    </div>
  `;

  document.querySelector('.js-order-tracking').innerHTML = trackingHTML;
}

// Search functionality - redirect to homepage with search query
const searchButton = document.querySelector(".js-search-button");
if (searchButton) {
  searchButton.addEventListener("click", () => {
    const search = document.querySelector(".js-search-bar").value;
    if (search) {
      window.location.href = `index.html?search=${search}`;
    }
  });
}

// Search by pressing "Enter" on the keyboard
const searchBar = document.querySelector('.js-search-bar');
if (searchBar) {
  searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchTerm = document.querySelector('.js-search-bar').value;
      if (searchTerm) {
        window.location.href = `index.html?search=${searchTerm}`;
      }
    }
  });
}

loadPage();