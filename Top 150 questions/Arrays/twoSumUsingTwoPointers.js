var twoSum = function (numbers, target) {
  const numsMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (numsMap.has(complement)) {
      return [numsMap.get(complement), i + 1];
    }

    numsMap.set(numbers[i], i + 1);
  }
};
