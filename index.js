/* 7
    @func getMedianItem
    @param {array} arr
    @returns {number} 
    @desc - given an array, return the middle element.
            If the array is even in length, return the 
            average of the middle two.
    @example - getMedianItem([1,2,3,4,5,6,7]);  // 4
    @example - getMedianItem([1,2,3,4,5,6,7,8]);  // 4.5
*/

function getMedianItem(arr) {
    // if FALSE, then arr is def NOT an array
    
    // FYI: (Array.isArray(arr) === false)
    // is the same as
    // !Array.isArray(arr)
    if (!Array.isArray(arr) || arr.length === 0) {
        return NaN; 
    }

    // also possible to do this: arr.length % 2 !== 0
    if (arr.length % 2 === 1) { // odd
        const half = arr.length / 2; // because odd, this will not be
                                     // a whole number, LOL
        const middleIndex = Math.floor(half);
        return arr[middleIndex];
    }

    // if we make it here, must be even
    /* ALGORITHM
    [11, 12, 13, 14]
      0,  1,  2,  3  => length: 4
                        length / 2 => 2 arr[2] = 13
                        (length / 2) - 1 => 1 arr[1] = 12               
    */

    const half = arr.length / 2;
    return (arr[half] + arr[half - 1]) / 2;
}

console.log('---------------------------')
console.log('getMedianItem returns a number', typeof getMedianItem([1,2,3]) === "number");
console.log('if invalid type, returns NaN', isNaN(getMedianItem("lolTeamIvalid")));
console.log('if array is empty, returns NaN', isNaN(getMedianItem([])));
console.log('getMedianItem of [1,2,3,4,5,6,7] returns 4',
    getMedianItem([1,2,3,4,5,6,7]) === 4);
console.log('getMedianItem of [1,2,3,4,5,6,7,8] returns 4.5',
    getMedianItem([1,2,3,4,5,6,7,8]) === 4.5);



