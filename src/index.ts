

function calculateTip(sum: number, tip: number): number {
    console.log(sum);
    console.log(tip);
    const calculatedTip: number = sum * tip; 
    console.log(calculatedTip);
    const total: number =  sum + calculatedTip;
    return total;
}

function divideTotal(total: number, numberOfFriends: number) {
    const sumDivided: number = Number(total / numberOfFriends);
    return sumDivided;
}
let friendSum: number;

document.getElementById('calculateButton').addEventListener('click', function() {
    const sum = Number((document.getElementById('sum') as HTMLInputElement).value);
    const tip = Number((document.getElementById('tip') as HTMLInputElement).value);
    const numberOfFriends: number = Number((document.getElementById('numberOfFriends') as HTMLInputElement).value)
    const total: number = calculateTip(sum, tip)
    friendSum = divideTotal(total, numberOfFriends)
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
    showDividedSum(friendSum)
});

function showDividedSum(sum: number): void {
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}



