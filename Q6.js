function sortedSquares(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * nums[i]);
  }

  result.sort((a, b) => a - b);

  return result;
}


// test case
const nums = [-4, -1, 0, 3, 10];
const squaredArray = sortedSquares(nums);
console.log(squaredArray);
