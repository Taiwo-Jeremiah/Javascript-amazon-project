# Amazon Project

A full-featured e-commerce web application built with HTML, CSS, and vanilla JavaScript. This project simulates core Amazon functionality including product browsing, shopping cart management, checkout, and order tracking.

## Features

- **Product Catalog**: Browse and search through a catalog of products with ratings and pricing
- **Shopping Cart**: Add/remove items with persistent storage
- **Checkout**: Complete checkout process with delivery options and payment summary
- **Order Management**: View order history and track deliveries
- **Responsive Design**: Mobile-friendly interface that works on all screen sizes
- **Object-Oriented Design**: Cart functionality implemented using OOP principles

## Project Structure

```
├── index.html                 # Main shopping page
├── checkout.html              # Checkout page
├── orders.html                # Orders history page
├── tracking.html              # Order tracking page
│
├── backend/
│   └── products.json          # Product catalog data
│
├── data/                       # JavaScript data modules
│   ├── cart.js               # Cart functionality
│   ├── cart-oop.js           # OOP cart implementation
│   ├── products.js           # Product data handling
│   ├── orders.js             # Order management
│   ├── deliveryOptions.js    # Delivery options
│   └── ...
│
├── scripts/                    # Main application scripts
│   ├── amazon.js             # Main page logic
│   ├── checkout.js           # Checkout page logic
│   ├── order.js              # Orders page logic
│   ├── tracking.js           # Tracking page logic
│   └── checkout/             # Checkout component scripts
│       ├── checkOutHeader.js
│       ├── orderSummary.js
│       └── paymentSummary.js
│
├── styles/                     # CSS stylesheets
│   ├── pages/                # Page-specific styles
│   │   ├── amazon.css
│   │   ├── checkout.css
│   │   ├── orders.css
│   │   └── tracking.css
│   └── shared/               # Shared styles
│       ├── general.css
│       └── amazon-header.css
│
├── images/                     # Project assets
│   ├── icons/
│   ├── products/             # Product images
│   └── ratings/              # Rating star images
│
└── tests/                      # Test files
    ├── moneyTest.js
    └── tests-jasmine/        # Jasmine testing framework
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - pure vanilla JavaScript

### Installation

1. Clone or download the project
2. Open `index.html` in your web browser
3. Start shopping!

## Usage

### Browsing Products
- Open `index.html` to view all available products
- Use the search bar to find specific items
- Click on products to view ratings and details

### Shopping Cart
- Click "Add to Cart" on any product
- View cart quantity in the header
- Click the cart icon to go to checkout

### Checkout Process
- Select delivery options for each item
- Review order summary
- View payment details before checkout

### Order Management
- Click "Returns & Orders" in the header to view order history
- Track order delivery status
- View estimated delivery dates

## Key Technologies

- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive design with flexbox and grid layouts
- **JavaScript (ES6+)**: 
  - Object-oriented programming
  - DOM manipulation
  - Local storage for data persistence
  - Event handling and DOM rendering

## Testing

The project includes test suites using the Jasmine testing framework:
- Unit tests in `tests/`
- Jasmine tests in `tests-jasmine/`

To run tests, open the test HTML files in a browser.

## Features in Detail

### Cart Management
- Add/remove items from cart
- Update quantities
- Persistent storage using localStorage
- Real-time cart quantity updates

### Delivery Options
- Multiple delivery date options
- Delivery cost calculation
- Estimated delivery display

### Payment Summary
- Itemized pricing
- Shipping cost calculation
- Tax estimation
- Order total

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Notes

This project is a learning exercise to understand:
- HTML/CSS/JavaScript fundamentals
- Object-oriented programming in JavaScript
- DOM manipulation and event handling
- Local storage for client-side data persistence
- Responsive web design principles
- Testing with Jasmine framework

## Future Enhancements

- User authentication
- Payment processing
- Product reviews and ratings system
- Wishlist functionality
- Advanced search and filtering
