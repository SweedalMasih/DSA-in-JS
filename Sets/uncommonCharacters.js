class Solution {
  UncommonChars(A, B) {
    //code here
    const setA = new Set(A);
    const setB = new Set(B);

    const arrA = [...setA];
    const arrB = [...setB];

    // console.log(arrA, arrB);

    const uniqueA = arrA.filter((item) => !setB.has(item)).join("");
    const uniqueB = arrB.filter((item) => !setA.has(item)).join("");

    // console.log(uniqueA, uniqueB)

    const result = [...uniqueA, ...uniqueB].sort().join("");
    return result.length === 0 ? -1 : result;
  }
}
