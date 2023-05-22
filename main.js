// variable declare

const extraMemory = document.getElementById('extra-memory');
const extraStorage = document.getElementById('extra-storage');
const extraDeliveryCharge = document.getElementById('delivery-charge-20');
const total = document.getElementById('total');
const finalTotal = document.getElementById('final-total');
const promoCode = document.getElementById('apply-promo');

document.getElementById('memory-8gb').addEventListener('click', function () {
    extraMemory.innerText = 0;
    totalPrice(1);
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    extraMemory.innerText = 180;
    totalPrice(1);
})

document.getElementById('storage-256gb').addEventListener('click', function () {
    extraStorage.innerText = 0;
    totalPrice(1);
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    extraStorage.innerText = 100;
    totalPrice(1);
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    extraStorage.innerText = 180;
    totalPrice(1);
})

document.getElementById('delivery-free').addEventListener('click', function () {
    extraDeliveryCharge.innerText = 0;
    totalPrice(1);
})

document.getElementById('delivery-charge').addEventListener('click', function () {
    extraDeliveryCharge.innerText = 20;
    totalPrice(1);
})

function totalPrice(code) {
    const finalMemory = Number(extraMemory.innerText);
    const finalStorage = Number(extraStorage.innerText);
    const finalDeliveryCharge = Number(extraDeliveryCharge.innerText);

    const subTotal = finalMemory + finalStorage + finalDeliveryCharge + 1299;
    total.innerText = subTotal;
    finalTotal.innerText = subTotal * code;
    return subTotal;
}

function applypromo() {
    const promoKaku = document.getElementById('promo-kaku').value;
    if (promoKaku == 'stevekaku') {
        totalPrice(0.8);
    }
    else {
        console.log('Bye Bye');
    }
}
