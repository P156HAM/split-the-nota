function calculateTip(sum, tip) {
    const calculatedTip = sum * tip;
    const total = sum + calculatedTip;
    return total;
}
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / numberOfFriends;
    return sumDivided;
}
function showDividedSum(friendSum) {
    const sum = parseInt(document.getElementById('sum').value);
    const tip = parseInt(document.getElementById('tip').value);
    const total = calculateTip(sum, tip);
    const numberOfFriends = parseInt(document.getElementById('numberOfFriends').value);
    friendSum = divideTotal(total, numberOfFriends);
    document.getElementById('calculateButton').addEventListener('click', function () {
        document.getElementById('showSum').classList.toggle('hide');
        document.getElementById('inputForm').classList.toggle('hide');
        document.getElementById('friendSum').innerHTML = friendSum + ' kr';
    });
}
showDividedSum(friendSum);
