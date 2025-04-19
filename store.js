document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemsContainer = document.querySelector('.cart-items');
  const checkoutBtn = document.querySelector('.checkout-btn');
  const checkoutForm = document.querySelector('.checkout-form');
  const commentForm = document.querySelector('.comment-form');
  const commentList = document.querySelector('.comment-list');
  const backLink = document.querySelector('.back-link');

  let cart = [];

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name;
      cartItemsContainer.appendChild(li);
    });
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.product');
      const id = product.getAttribute('data-id');
      const name = product.querySelector('h3').textContent;
      cart.push({ id, name });
      renderCart();
    });
  });

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    checkoutForm.style.display = 'block';
  });

  checkoutForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    cart = [];
    renderCart();
    checkoutForm.style.display = 'none';
    e.target.reset();
  });

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = commentForm.querySelector('.comment-input');
    const commentText = input.value.trim();
    if (commentText) {
      const li = document.createElement('li');
      li.textContent = commentText;
      commentList.appendChild(li);
      input.value = '';
    }
  });
});
