let loan = 0;

function tookLoan() {
    if (loan == 0) {
        money += 1200;
        updateMoney();
        loan += 14
    }
    else{
        showError("You already have an active loan!")
        setTimeout(300)
    }
}
function payLoan() {
    if (loan != 0) {
        if (money < 100) {
            showError("You can't pay a loan!");
        }
        else {
            money -= 100;
            loan -= 1;
            console.log(loan);
        }
    }
}