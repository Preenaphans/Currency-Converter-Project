function toUSD(bath){
    let value = bath*0.02823
    return value.toFixed(2) + "ดอลลาร์สหรัฐ"
}

function toTHB(usd) {
    let value = usd*35.435
    return value.toFixed(2) + "บาท"
}

function display(value) {
    var currency = document.getElementById("currency").value
    if(currency == "USD"){
        alert(toUSD(value))
    }
    
    else {
        alert(toTHB(value))
    }

}
