function donMenu() {
    document.getElementById("miscmenu").style.display='none';
    document.getElementById('doninfo').style.display='block';
    document.getElementById('doninfo').innerText="You have 50% chance to double your money, but also 50% to loose everything.";
    document.getElementById("donmenu").style.display='block';
}
function don() {
    double = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (double == 1) {
        money = money * 2;
        document.getElementById('doninfo').innerText="You won!";
        updateMoney();
    }
    else {
        money = 0;
        document.getElementById('doninfo').innerText="You lost!";
        updateMoney();
    }
}

let silverKey = 0;
let goldenKey = 0;
function getKey() {
    if (clicksToReward == 0) {
        clicksToReward = 100;
        silverKey += 1;
        showNotification("You got a silver key!")
    } else {
        clicksToReward -= 1;
    }
    console.log(clicksToReward);
}
function boxMenu() {
    document.getElementById("miscmenu").style.display='none';
    document.getElementById('keys').innerHTML="Silver keys: "+silverKey+"<br>"+
    "Golden keys: "+goldenKey;
    document.getElementById("boxmenu").style.display='block';
}
function openBox(box) {
    switch (box) {
        case "silver":
            if (silverKey == 0) {
                showError("You need a silver key!");
            } else {
                silverKey -= 1;
                let boxitem = Math.floor(Math.random() * 10) + 1;
                if (boxitem <= 5) {
                    money += 1500;
                    item = "$1500";
                } else if (boxitem > 5 && boxitem <= 8) {
                    money += 5000;
                    item = "$5000";
                } else {
                    money += 15000;
                    item = "$15000";
                }
                showNotification('You got a '+item+'!');
                updateMoney();
            }
            break;
        case "golden":
            if (goldenKey == 0) {
                showError("You need a golden key!");
            } else {
                goldenKey -= 1;
                showError('Do not cheat you silly!')
            }
            break;
    }
    document.getElementById('keys').innerHTML="Silver keys: "+silverKey+"<br>"+
    "Golden keys: "+goldenKey;
}
function rouletteMenu() {
    showError("Soon!");
}
function rouletteMenutest() {
    document.getElementById("miscmenu").style.display='none';
    document.getElementById('roulettemenu').style.display='block';
}
function roulette() {
    document.getElementById("rouletteball").style.animation='roulette 5s 1';
    setTimeout(rouletteEndAnimation, 5000);
}
function rouletteEndAnimation() {
    document.getElementById("rouletteball").style.animation='none';
}
