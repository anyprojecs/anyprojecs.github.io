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
