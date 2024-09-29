document.getElementById('logo').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
    document.getElementById('cart_btn').classList.toggle('active');
});