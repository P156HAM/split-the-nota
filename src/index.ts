

function calculateTip(sum: number, tip: number): number {
    const calculatedTip: number = sum * tip; 
    const total: number =  sum + calculatedTip;
    return total;
}



function divideTotal(total: number, numberOfFriends: number) {
    const sumDivided: number = total / numberOfFriends;
    return sumDivided;
}



function showDividedSum(friendSum: number): void {
    const sum = parseInt((document.getElementById('sum') as HTMLInputElement).value);
    const tip = parseInt((document.getElementById('tip') as HTMLInputElement).value);
    const total: number = calculateTip(sum, tip)
    const numberOfFriends: number = parseInt((document.getElementById('numberOfFriends') as HTMLInputElement).value)
    friendSum = divideTotal(total, numberOfFriends)
    document.getElementById('calculateButton').addEventListener('click', function() {
        document.getElementById('showSum').classList.toggle('hide');
        document.getElementById('inputForm').classList.toggle('hide');
        document.getElementById('friendSum').innerHTML = friendSum + ' kr';
    });    
}

showDividedSum(friendSum);