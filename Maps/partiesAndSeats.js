class Solution {
  Election2019(party, seats, n) {
    //code here
    const myMap = new Map();
    console.log(party);
    for (let i = 0; i < party.length; i++) {
      myMap.set(party[i], seats[i]);
      console.log(party[i], seats[i]);
    }

    let maxKey,
      maxValue = 0;
    for (const [key, value] of myMap) {
      if (value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }
    console.log(maxValue);
  }
}
