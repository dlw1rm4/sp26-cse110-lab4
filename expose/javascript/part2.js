function discountPrice(price, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < price.length; i++) {
        var discountedPrice = price[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    return discounted;
}

console.log(discountPrice([100, 200, 300], 0.5));