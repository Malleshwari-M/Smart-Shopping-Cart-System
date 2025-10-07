let cart = [];
let total = 0;

function addToCart(product, price) {
  // Add item to cart array
  cart.push({ product, price });
  
  // Update cart count
  document.getElementById("cart-count").innerText = cart.length;
  
  // Update cart items display
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    let li = document.createElement("li");
    li.innerHTML = `${item.product} - ₹${item.price} 
      <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").innerText = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

document.getElementById("cart-btn").addEventListener("click", () => {
  document.getElementById("cart-box").classList.toggle("hidden");
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Thank you for shopping! Your total is ₹${total}`);
    cart = [];
    document.getElementById("cart-count").innerText = 0;
    updateCart();
  }
});
