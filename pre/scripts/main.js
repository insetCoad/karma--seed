/* | test something + +| */
var calculator = (function () {
    function calculator() {
    }
    calculator.prototype.add = function (digit, dig2) {
        return (digit + dig2);
    };
    return calculator;
}());
