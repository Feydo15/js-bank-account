const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
let totalBalance = 25;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

const formatter = new Intl.NumberFormat('en-SA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  });


const mySubmitD = (() => {

    if (isNaN(userDeposit.value)) {
        alert("Please enter a number.");
        return userDeposit.value = '';
    } else {
        if (userDeposit.value < 0.01 || userDeposit.value > 10000) {
            alert("You can only deposit between R0.01 and R10,000.")
            return userDeposit.value = '';
        } else {
        deposits.push(Number(userDeposit.value));
        totalBalance += (Number(userDeposit.value))
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

    console.log("ZAR" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
});


const mySubmitW = (() => {
    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {

    
        if (userWithdraw.value > totalBalance - 5) {
            alert("Your total balance cannot drop below R5.");
            return userWithdraw.value = '';
        } else {

       
        withdrawals.push(Number(userWithdraw.value));
        totalBalance -= (Number(userWithdraw.value));
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

    console.log("ZAR" + userWithdraw.value);
    return userWithdraw.value = '';
    }
}
});

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
