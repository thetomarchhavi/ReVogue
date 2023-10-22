// popup.js

// Function to update the popup UI with the shopping data
function updatePopupUI(data) {
    const wishlistElement = document.getElementById('wishlistItems');
    const cartElement = document.getElementById('cartItems');
    const purchasedElement = document.getElementById('purchasedItems');
    const totalSpentElement = document.getElementById('totalAmount');
  
    // Clear existing data in the UI
    wishlistElement.innerHTML = '';
    cartElement.innerHTML = '';
    purchasedElement.innerHTML = '';
  
    // Update the UI with wishlist items
    data.wishlist.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}`;
      wishlistElement.appendChild(li);
    });
  
    // Update the UI with cart items
    data.cart.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}`;
      cartElement.appendChild(li);
    });
  
    // Update the UI with purchased items
    data.purchased.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}`;
      purchasedElement.appendChild(li);
    });
  
    // Update the UI with the total spent
    totalSpentElement.textContent = `Total Spent: $${data.totalSpent.toFixed(2)}`;
  }
  
  // Function to handle the message from the content script
  function handleMessage(request, sender, sendResponse) {
    if (request.action === 'shoppingData') {
      updatePopupUI(request.data);
    }
  }
  
  // Add a listener to handle messages from the content script
  chrome.runtime.onMessage.addListener(handleMessage);
  
  // Send a request to the content script to retrieve the shopping data
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getShoppingData' });
  });
  