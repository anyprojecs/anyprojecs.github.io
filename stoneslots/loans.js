let loan = 0;

function tookLoan(takenLoan) {
    if (loan == 0) {
        if (takenLoan == 1200){
            money += 1200;
            updateMoney();
            loan += 14
            loanInterest = 100;
        }
        else if (takenLoan == 5400) {
            money += 5400;
            updateMoney();
            loan += 28
            loanInterest = 200;
        }
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
            money -= loanInterest;
            loan -= 1;
            console.log(loan);
        }
    }
}
