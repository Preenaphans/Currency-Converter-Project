function toUSD(bath){
    let value = bath*35.4310
    return value.toFixed(2) + "ดอลลาร์สหรัฐ"
}

function toTHB(bath) {
    let value = bath*0.02822
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
