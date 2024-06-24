function removeDuplicatesAndFindMissing(arr) {
  const uniqueArray = [];

  // Remove duplicates
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  // Find missing numbers from 1 to 9
  const missingNums = [];
  for (let i = 1; i <= 9; i++) {
    if (uniqueArray.indexOf(i) === -1) {
      missingNums.push(i);
    }
  }

  console.log("Unique array:", uniqueArray);
  console.log("Missing numbers:", missingNums);
}
const arr = [1, 4, 2, 5, 7, 4, 2, 9];
removeDuplicatesAndFindMissing(arr);
