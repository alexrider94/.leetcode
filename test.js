// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // [1,0] . [0,1]
    let f = A[0];
    let count = 0;
    let getOCount = getCount(A, 1);
    let getZCount = getCount(A, 0);
    console.log(getOCount + "  " + getZCount);
    if (getOCount >= getZCount) {
        for (let i = 0; i < A.length - 1; ++i) {
            if (A[i] === A[i + 1]) {
                if (A[i] === 1) {
                    A[i + 1] = 0;
                } else {
                    A[i + 1] = 1;
                }
                count++;
            }
        }
    } else {
        for (let i = 0; i < A.length - 1; ++i) {
            if (A[i] === A[i + 1]) {
                if (A[i + 1] === 1) {
                    A[i] = 0;
                } else {
                    A[i] = 1;
                }
                count++;
            }
        }
    }
    return count;
}

function getCount(A, x) {
    let count = 0;
    for (let i = 0; i < A.length; ++i) {
        if (A[i] === x) {
            count++;
        }
    }
    return count;
}


function solution2(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let t;
    if (N < 0) {
        t = String(N).split("");
        t = t.slice(0, t.length);
    }
    else {
        t = String(N).split("");
    }
    console.log(t);
    let data = [];

    let result = 0;

    //[5268,2568,2658,2685]
    for (let i = 0; i < t.length; ++i) {
        let x;
        if (N < 0) {
            x = String(N).split("");
            x = x.slice(1, t.length);
        }
        else {
            x = String(N).split("");
        }
        x.splice(i, 0, "5");
        console.log(x);
        let dte = x.reduce((acc, idx) => { return acc + idx });

        data.push(Number(dte));
    }
    if (N < 0) {
        result = data.reduce((a, b) => { return Math.min(a, b) });
        result = Number("-" + result);
    } else {
        result = data.reduce((a, b) => { return Math.max(a, b) });
    }
    console.log(result);
    return result;
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution3(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let h = new Map();
    // [0,4,-1,0,3] , [0,-2,5,0,3]
    // {'idx': sumArray } 
    //{0:[0,6,0,6]},{1:[4,2,-2,8]},{2:[3,3,3,3]},{3:[3,3,3,3]},{4:[6,0,6,0]}
    // a and b array length is different?
    let sumList = [];
    let sum = 0;
    for (let i = 0; i < A.length; ++i) {
        sum = sum + A[i];
        sumList.push(sum);
    }
    for (let i = 0; i < B.length; ++i) {
        sum = sum + B[i];
        sumList.push(sum);
    }
}