var climbStairs = function(n) {
    /*
    const myMap = new Map();
    myMap.set('step1', 1);
    myMap.set('step2', 2);
    for(let i=3; i<=n; i++) {
        const stepMinus1 = myMap.get(`step${i-1}`);
        const stepMinus2 = myMap.get(`step${i-2}`)
        console.log(stepMinus1, stepMinus2)
        myMap.set(`step${i}`, stepMinus1 + stepMinus2);
    }
    console.log(myMap, myMap.get(`step${n}`));
    return myMap.get(`step${n}`);
    */


    const step1 = 1;
    const step2 = 2;
    const steps = [step1, step2];
    for(let i=2; i<n; i++) {
        steps.push(steps[(i-1)] + steps[(i-2)]);
    }
    console.log(steps)
    return steps[n-1];
};