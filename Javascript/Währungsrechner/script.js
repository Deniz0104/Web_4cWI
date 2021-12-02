
var output = document.getElementById("resultarea");

function calculation() {
    var inputValue = document.getElementById("inputTask").value;
    var currency1 = document.getElementById("firstCurrencies").value;
    var currency2 = document.getElementById("secondCurrencies").value;
    var output = document.getElementById("resultarea");
    let result = ((inputValue / setRate(currency1)) * setRate(currency2));
    
    output.innerHTML = result + " " + currency2;

}

function setRate(currency) {
    let rate = {
        "Euro": 1,
        "USD": 1.13,
        "BitCoin": 0.000024,
    };
    switch(currency) {
        case "Euro":
            return rate.Euro;
        case "USD":
            return rate.USD;
        case "Bitcoins":
            return rate.BitCoin;        
    }
}




