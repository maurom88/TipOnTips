function calcTip() {
    let amount = document.getElementById("amount").value;
    let servPerc = document.getElementById("service").value;
    let people = document.getElementById("people").value;
    let tipTot = (amount*servPerc)/100;
    tipAmount = tipTot/people;
    document.getElementById("tip").innerHTML=`The amount of your tip is $ ${tipAmount} per person`;
}