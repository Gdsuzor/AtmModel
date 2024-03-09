const currentBalance = 50000;
const pin = 2020;
alert("Good Morning Mr. Godson \n" + "Welcome to Zina's Bank Plc");
const inputField = prompt("Insert Your Pin");

if(inputField == pin){
    let balancechecker = prompt("Please Input the Amount You Will Want to Withdraw")
    if(balancechecker <= currentBalance){
        alert("Just a Second");
        alert("You Just received " + balancechecker + "\n" + "New Balance is "  + (currentBalance - balancechecker));

        alert("Thank You for Banking with Us");
    }else{
        alert("Insufficent Funds!!!");
    }
}else{
    alert("Incorrect Pin!!!")
    prompt("Enter correct Pin")
}