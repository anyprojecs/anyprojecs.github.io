let money = 600

let car = 1


function updateMoney() {
    const moneyCount = document.getElementById("money");
    moneyCount.textContent = "$"+money;
}
updateMoney();

function AddMoney() {
    money += 1000;
    document.getElementById("money").innerHTML="Money: "+money;
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

function hideError() {
    document.getElementById("error").style.display="none";
}

function Run() {
    if (money == 0) {
        console.log("oops");
    }
    else {
        document.getElementById("background").display = "inline-block";
        document.getElementById("numbers").style.animation = "none";
        document.body.style.animation = "none";
        money -= 25
        const firstNum = Math.floor(Math.random() * 7) + 1;
        const secondNum = Math.floor(Math.random() * 7) + 1;
        const thirdNum = Math.floor(Math.random() * 7) + 1;
        document.getElementById("numbers").innerHTML =
        firstNum + "" + secondNum + "" + thirdNum;
        updateMoney();
        if (firstNum == 7 && secondNum == 7 && thirdNum == 7) {
            money += 2000
            updateMoney();
            document.getElementById("background").display = "none";
            document.body.style.animationName = "backChange";
            document.body.style.animationDuration = "3s";
            document.body.style.animationIterationCount = "infinite";
            document.getElementById("numbers").style.animationName = "colorChange";
            document.getElementById("numbers").style.animationDuration = "3s";
            document.getElementById("numbers").style.animationIterationCount = "Infinite";
        }
        else if (firstNum == secondNum && secondNum == thirdNum) {
            money += 500
            document.getElementById("numbers").style.animationName = "colorChange";
            document.getElementById("numbers").style.animationDuration = "3s";
            document.getElementById("numbers").style.animationIterationCount = "Infinite";
            updateMoney();
        }
    }
}