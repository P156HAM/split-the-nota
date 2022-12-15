function calculateTip(sum, tip) {
    console.log(sum);
    console.log(tip);
    const calculatedTip = sum * tip;
    console.log(calculatedTip);
    const total = sum + calculatedTip;
    return total;
}
function divideTotal(total, numberOfFriends) {
    const sumDivided = Number(total / numberOfFriends);
    return sumDivided;
}
let friendSum;
document.getElementById('calculateButton').addEventListener('click', function () {
    const sum = Number(document.getElementById('sum').value);
    const tip = Number(document.getElementById('tip').value);
    const numberOfFriends = Number(document.getElementById('numberOfFriends').value);
    const total = calculateTip(sum, tip);
    friendSum = divideTotal(total, numberOfFriends);
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
    showDividedSum(friendSum);
});
function showDividedSum(sum) {
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}
