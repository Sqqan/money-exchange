// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    const exchange = {};
    const H = 50, Q = 25, D = 10, N = 5, P = 1;

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    if (currency >= H) {
        exchange.H = parseInt(currency / H);
        currency -= exchange.H * H;
    }

    if (currency >= Q) {
        exchange.Q = parseInt(currency / Q);
        currency -= exchange.Q * Q;
    }

    if (currency >= D) {
        exchange.D = parseInt(currency / D);
        currency -= exchange.D * D;
    }

    if (currency >= N) {
        exchange.N = parseInt(currency / N);
        currency -= exchange.N * N;
    }

    if (currency >= P) {
        exchange.P = parseInt(currency / P);
        currency -= exchange.P;
    }

    return exchange;
}

