
let pc = 1
let car = 1

function sellPC() {
    if (pc == 1) {
        money += 250
        pc -= 1
        updateMoney();
        document.getElementById("sellpc").innerText="SOLD";
    }
    else {
        showError("You have already sold the PC!");
    }
}
function sellCar() {
    if (car == 1) {
        money += 1500
        car -= 1
        updateMoney();
        document.getElementById("sellcar").innerText="SOLD";
    }
    else {
        showError("You have already sold the car!")
    }
}
