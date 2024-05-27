// question 2 Kata challenges.

function findLongestSpikedSequence(arr) {
    let S = new Set();
    let ans = 0; 

    // Add all elements of the array to the Set
    for (let i = 0; i < arr.length; i++) {
        S.add(arr[i]);
    }
    // Iterate through the array to find the longest spike
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element minus 1 exists in the Set
        if (! S.has(arr[i] - 1)) {
            console.log(arr[i])
            // Start counting the length of the spike from the current element
            let j = arr[i];
            let count = 1; // Count the length of the spike
            // Keep incrementing the counter as long as the next element exists in the Set
            while (S.has(j)) {
                console.log(j++);
                console.log(count++);
            }

            // Update the maximum length of a spike if necessary
            ans = Math.max(ans,count);
            console.log(ans,count,)
        }
    }
    console.log(S)

    return ans;
}

// Example usage
let arr = [2, 5, 3, 2, 4, 1]
console.log("Length of the Longest spiked sequence is " + findLongestSpikedSequence(arr));
// console.log(findLongestSpikedSequence([2, 5, 3, 2, 4, 1]))