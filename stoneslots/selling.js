let pc = 1
let car = 1

function sellPC() {
    if (pc == 1) {
        money += 250
        pc -= 1
        updateMoney();
    }
    else {
        document.getElementById("error").innerHTML="You don't have a car!";
        document.getElementById("error").style.display="inline-block";
        setTimeout(hideError(), 10000)
    }
}
function sellCar() {
    if (car == 1) {
        money += 1500
        car -= 1
        updateMoney();
    }
    else {
        document.getElementById("error").innerHTML="You don't have a car!";
        document.getElementById("error").style.display="inline-block";
        setTimeout(hideError(), 10000)
    }
}
