$(document).ready(function () {
    const cartItems = [];

    $('.btn-add-to-cart').on('click', function () {
        const product = $(this).data('product');
        cartItems.push(product);
        alert(`${product} añadido al carrito`);
    });

    $('#cartModal').on('show.bs.modal', function () {
        const $cartItemsList = $('#cartItems');
        $cartItemsList.empty();

        if (cartItems.length === 0) {
            $cartItemsList.append('<li class="list-group-item">No hay productos en el carrito</li>');
        } else {
            cartItems.forEach(item => {
                $cartItemsList.append(`<li class="list-group-item">${item}</li>`);
            });
        }
    });
});
