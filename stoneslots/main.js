let money = 600;

selectMachines(5);

function cheatsOn() {
    cheaton = document.getElementById("cheatsbutton").style.display="inline-block";
}
function updateMoney() {
    const moneyCount = document.getElementById("money");
    moneyCount.textContent = "$"+money;
}
updateMoney();

function AddMoney() {
    money += 1000;
    document.getElementById("money").innerHTML="Money: "+money;
}

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
        threeNumbers = 25000;
        threeSevens = 75000;
        document.getElementById("price").innerText="$1500"
    }
    document.getElementById("machinesmenu").style.display="none";
}

function Run() {
    if (money < price) {
        showError("You don't have money!");
    }
    else {
        payLoan();
        document.getElementById("numbers").style.animation = "none";
        document.body.style.animation = "none";
        money -= price
        const firstNum = Math.floor(Math.random() * 7) + 1;
        const secondNum = Math.floor(Math.random() * 7) + 1;
        const thirdNum = Math.floor(Math.random() * 7) + 1;
        document.getElementById("numbers").innerHTML =
        firstNum + "" + secondNum + "" + thirdNum;
        updateMoney();
        if (firstNum == 7 && secondNum == 7 && thirdNum == 7) {
            money += threeSevens
            updateMoney();
            document.body.style.animationName = "backChange";
            document.body.style.animationDuration = "3s";
            document.body.style.animationIterationCount = "infinite";
            document.getElementById("numbers").style.animationName = "colorChange";
            document.getElementById("numbers").style.animationDuration = "3s";
            document.getElementById("numbers").style.animationIterationCount = "Infinite";
        }
        else if (firstNum == secondNum && secondNum == thirdNum) {
            money += threeNumbers
            document.getElementById("numbers").style.animationName = "colorChange";
            document.getElementById("numbers").style.animationDuration = "3s";
            document.getElementById("numbers").style.animationIterationCount = "Infinite";
            updateMoney();
        }
    }
}
