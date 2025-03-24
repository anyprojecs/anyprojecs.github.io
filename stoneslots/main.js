let money = 600;
let clicksToReward = 100;

console.log("pls do not break the game")

selectMachines(5);

function cheatsOn() {
    cheaton = document.getElementById("cheatsbutton").style.display="inline-block";
}
function updateMoney() {
    const moneyCount = document.getElementById("money");
    moneyCount.textContent = "$"+money;
}
updateMoney();

function showMenu(menu) {
    document.getElementById(menu).style.display="block";
}
function hideMenu(menu) {
    document.getElementById(menu).style.display="none";
}

function hideError() {
    document.getElementById("error").style.display="none";
}
function showError(text) {
    document.getElementById("error").innerHTML=text;
    document.getElementById("error").style.display="inline-block";
    setTimeout(hideError, 1500);
}
function hideNotification() {
    document.getElementById("notification").style.display="none";
}
function showNotification(text) {
    document.getElementById("notification").innerHTML=text;
    document.getElementById("notification").style.display="inline-block";
    setTimeout(hideNotification, 3000);
}

function selectMachines(machine) {
    if (machine == 5) {
        console.log(machine);
        price = 5;
        threeNumbers = 200;
        threeSevens = 1500;
        document.getElementById("price").innerText="$5"
    }
    if (machine == 50) {
        console.log(machine);
        price = 50;
        threeNumbers = 2500;
        threeSevens = 7500;
        document.getElementById("price").innerText="$50"
    }
    if (machine == 150) {
        console.log(machine);
        price = 150;
        threeNumbers = 7500;
        threeSevens = 20000;
        document.getElementById("price").innerText="$150"
    }
    if (machine == 1500) {
        console.log(machine);
        price = 1500;
        threeNumbers = 50000;
        threeSevens = 300000;
        document.getElementById("price").innerText="$1500"
    }
    document.getElementById("machinesmenu").style.display="none";
}

function Run() {
    getKey();
    if (money < price) {
        showError("You don't have money!");
    }
    else {
        payLoan();
        document.getElementById("number1").style.animation = "none";
        document.getElementById("number2").style.animation = "none";
        document.getElementById("number3").style.animation = "none";
        document.body.style.animation = "none";
        money -= price
        const firstNum = Math.floor(Math.random() * 7) + 1;
        const secondNum = Math.floor(Math.random() * 7) + 1;
        const thirdNum = Math.floor(Math.random() * 7) + 1;
        document.getElementById("number1").innerHTML = firstNum;
        document.getElementById("number2").innerHTML = secondNum;
        document.getElementById("number3").innerHTML = thirdNum;
        updateMoney();
        earnXp(10);
        if (firstNum == 7 && secondNum == 7 && thirdNum == 7) {
            money += threeSevens
            updateMoney();
            document.body.style.animationName = "backChange";
            document.body.style.animationDuration = "3s";
            document.body.style.animationIterationCount = "infinite";
            document.getElementById("number1").style.animation = "colorChange 3s infinite";
            document.getElementById("number2").style.animation = "colorChange 3s infinite";
            document.getElementById("number3").style.animation = "colorChange 3s infinite";
        }
        else if (firstNum == secondNum && secondNum == thirdNum) {
            money += threeNumbers
            document.getElementById("number1").style.animation = "colorChange 3s infinite";
            document.getElementById("number2").style.animation = "colorChange 3s infinite";
            document.getElementById("number3").style.animation = "colorChange 3s infinite";
            updateMoney();
            console.log(firstNum + "" + secondNum + "" + thirdNum);
        }
    }
    document.getElementById("clickstosilverkey").innerHTML = "Clicks left to next silver key: " + clicksToReward;
}
