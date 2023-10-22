// content.js

// Function to extract wishlist, cart, and purchase data
function extractShoppingData() {
    const shoppingData = {
      wishlist: [],
      cart: [],
      purchased: [],
      totalSpent: 0,
    };
  
    // Capture wishlist items
    const wishlistItems = document.querySelectorAll('.wishlist-item'); // Example: Locate wishlist items
    wishlistItems.forEach((item) => {
      shoppingData.wishlist.push({
        name: item.querySelector('.product-name').textContent,
        price: item.querySelector('.product-price').textContent,
      });
    });
  
    // Capture cart items
    const cartItems = document.querySelectorAll('.cart-item'); // Example: Locate cart items
    cartItems.forEach((item) => {
      shoppingData.cart.push({
        name: item.querySelector('.product-name').textContent,
        price: item.querySelector('.product-price').textContent,
      });
    });
  
    // Capture purchased items
    const purchasedItems = document.querySelectorAll('.order-item'); // Example: Locate purchased items
    purchasedItems.forEach((item) => {
      shoppingData.purchased.push({
        name: item.querySelector('.product-name').textContent,
        price: item.querySelector('.product-price').textContent,
      });
    });
  
    // Calculate total spending
    shoppingData.purchased.forEach((item) => {
      const priceString = item.price.replace('$', ''); // Assuming the price is in dollars
      shoppingData.totalSpent += parseFloat(priceString);
    });
  
    return shoppingData;
  }
  
  // Function to send the extracted data to the background script
  function sendShoppingDataToBackground(data) {
    chrome.runtime.sendMessage({ action: 'shoppingData', data });
  }
  
  // Listen for page load event
  window.addEventListener('load', function () {
    // Check if this is the Myntra website (You need to define your own logic)
    if (window.location.href.includes('myntra.com')) {
      const shoppingData = extractShoppingData();
      sendShoppingDataToBackground(shoppingData);
    }
  });
  