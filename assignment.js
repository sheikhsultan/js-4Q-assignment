/** feet-to-mile convert
 * 1 Mile = 5280 Feet > 5280 feet = 1 mile > 1 foot = 0.000189394 mile
 * if we want, we can convert feetToMile in 2 ways. i'll show both but one way will be in comment.
 */


function feetToMile(feetValue) {
    // const mile = feetValue * 0.000189394; //[1 foot = 0.000189394 mile]
    const mile = feetValue / 5280 ; 
    // [if we divide any feet number with 5280, it'll also show the lenght in mile]
    return mile;
}
const mileResult0 = feetToMile(6);
var totalfixed = mileResult0.toFixed(6)
console.log('Your length is', totalfixed, 'miles' );
const mileResult = feetToMile(48646);
console.log('Your length is', mileResult, 'miles' );
const mileResult2 = feetToMile(93000000000);
console.log('Bill Gates money in length', mileResult2, 'miles' ); 



/** --------------------------------------------------------------------------------------------- */



/** wood-calculation,
 *  how much cubic woods needed for chair, table, and bed. 
 */
function woodCalculator(chair, table, bed) {

    
}

console.log();



/** --------------------------------------------------------------------------------------------- */



/** brick-calculation, 
 * how much brick will take in a building whether it's 1/2 or 1'st 10th or 11-20th or 20+th floors. 
 * each feet in height will take 1000 bricks
 * 1'st 10th floors will be 15' in height
 * 11-20th floors will be 12' in height
 * 20+th floors will be 10' in height.
 * 
 * 
 */
function brickCalculator(floors) {
    let bricks = 0;
    if(floors >0){
        if(floors<= 10){
            bricksPerFoot = 1000 * 15;
            bricks = floors * bricksPerFoot;
        }
        else if (floors > 10 && floors <= 20){
            bricksPerFoot = 1000 * 12;
            bricks = floors * bricksPerFoot;
        }
        else{
            bricksPerFoot = 1000 * 10;
            bricks = floors * bricksPerFoot;
        }
    }
    return bricks;

}
let totalBricks0 = brickCalculator(0);
console.log(totalBricks0);
// condition first 10th floors 15 feet. per foot 1000*15 feet
let totalBricks1 = brickCalculator(1);
console.log(totalBricks1);
let totalBricks2 = brickCalculator(10);
console.log(totalBricks2);

// condition 11th to 20th 
let totalBricks3 = brickCalculator(11);
console.log(totalBricks3);
let totalBricks4 = brickCalculator(20);
console.log(totalBricks4);
let totalBricks5 = brickCalculator(21);
console.log(totalBricks5);












/** --------------------------------------------------------------------------------------------- */



/** */
// var arr = ["aaaa", "aa", "aa", "aaaaa", "a", "aaaaaaaa"];

function tinyFriend(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){

        if(arr[i] < min){
            min = arr[i];
        }
    
    }
    return min;
}
var tinyFriendResult = tinyFriend(["radoyan", "ajmir", "putin", "kimJong-un" ]);
console.log(tinyFriendResult);
console.log(tinyFriend(["redu", "ali", "masudRana", "shamimUsman", "fahimKhan", "hoshenChairman", "mithu" ]));
console.log(tinyFriend(["bond", "jamesBond", "kkModi", "heroAlom" ]));
// sorry for those name. i don't have many friends so i had to made up names.

