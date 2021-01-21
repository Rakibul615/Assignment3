























//MEGA FRIEND PROBLEM SOLUTION

function friendList(friendName) {
    if (friendName.length > 0) {
        var largestTempValue = 0;
        var largestName;

        for (var i = 0; i < friendName.length; i++) {
            if (friendName[i].length > largestTempValue) {
                var largestTempValue = friendName[i].length;
                largestName = friendName[i];
            }
        }
        return largestName;

    }
    else {
        return 'array is empty';
    }
}
var friendName = friendList(['ibrahim', 'tibrow']);
console.log(friendName);
