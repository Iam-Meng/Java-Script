let prices = [10, 20, 30, 40];

let discountPrices = prices.map(discount);

function discount(prices){
    return (prices*80)/100;
}

discountPrices.forEach(dfun);

function dfun(discountPrices){
    console.log(`Discounted prize: $${discountPrices}`);
}