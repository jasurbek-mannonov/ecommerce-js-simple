// Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

// Open & Close Cart
cartIcon.onclick = () => {
    cart.classList.toggle("active")
}

// Cart working JS
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

// Making Function
function ready(){
    // Remove Items From Cart
    let removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}

// Remove Items From Cart
function removeCartItem(event){
    let btnClicked = event.target
    btnClicked.parentElement.remove()
}

// Update Total
function updateTotal(){
    let cartContent = document.getElementsByClassName('cart-content')[0]
    let cartBoxes = cartContent.getElementsByClassName('cart-box')
    let total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('cart-price')[0]
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace("$", ""))
        let quantity = quantityElement.value
        total = total + (price * quantity); 

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}