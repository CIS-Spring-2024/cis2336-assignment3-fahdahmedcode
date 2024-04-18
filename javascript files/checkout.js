document.addEventListener("DOMContentLoaded", function() {
    const pickupDeliverySelect = document.getElementById("pickup-delivery");
    const deliveryAddressDiv = document.getElementById("delivery-address");
    const paymentMethodSelect = document.getElementById("payment-method");
    const cardInfoDiv = document.getElementById("card-info");
    const checkoutForm = document.getElementById("checkout-form");
    const thankYouMessage = document.getElementById("thank-you-message"); 

    
    pickupDeliverySelect.addEventListener("change", function() {
        if (pickupDeliverySelect.value === "delivery") {
            deliveryAddressDiv.style.display = "block";
        } else {
            deliveryAddressDiv.style.display = "none";
        }
    });

    
    paymentMethodSelect.addEventListener("change", function() {
        if (paymentMethodSelect.value === "pay-with-card") {
            cardInfoDiv.style.display = "block";
        } else {
            cardInfoDiv.style.display = "none";
        }
    });

    
    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        
        if (pickupDeliverySelect.value === "delivery" && !document.getElementById("delivery-address-input").value.trim()) {
            alert("Please enter a delivery address.");
            return;
        }

        if (paymentMethodSelect.value === "pay-with-card") {
            const cardNumber = document.getElementById("card-number-input").value.trim();
            const cardName = document.getElementById("card-name-input").value.trim();
            const cardExpiry = document.getElementById("card-expiry-input").value.trim();
            const cardCVV = document.getElementById("card-cvv-input").value.trim();

            if (!cardNumber || !cardName || !cardExpiry || !cardCVV) {
                alert("Please fill out all credit card information.");
                return;
            }
        }

        
        thankYouMessage.style.display = "block";
        checkoutForm.reset();
    });
});
