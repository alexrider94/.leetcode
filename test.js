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


 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

let list5 = new ListNode(5);
let list4 = new ListNode(4,list5);
let list3 = new ListNode(3,list4);
let list2 = new ListNode(2,list3);
let list = new ListNode(1,list2);
reverseList(list);
// reversingList(list,2,4)

function reversingList(Head,left,right) {
    let part1Tail = null;
    let reversH = Head;
    for(let i = 1; i<left; ++i){
        part1Tail = reversH;
        reversH = reversH.next;
    }

    let reversTail = reversH;
    let reversPre = null, reversCur = null;
    for(let i = 0; i<=(right-left); ++i){
        reversCur = reversH.next;
        reversH.next = reversPre;
        reversPre = reversH;
        reversH = reversCur;
    }
    reversTail.next = reversH;
    if(part1Tail == null) return reversPre;
    part1Tail.next = reversPre;

    console.log(JSON.stringify(Head));

}

function reverseList (head) {
    let reverseNext = null;
    let temp = null;
    while(head){
        temp = head.next;
        head.next = reverseNext;
        reverseNext = head;
        head = temp;
    }
    console.log(JSON.stringify(reverseNext));
    return reverseNext;
};

var nthUglyNumber = function(n, a, b, c) {
    let i = 2;
    console.log(b/i);
    while(a/i != 1 && b/i != 1 && c/i !=1){
        return i;
    }
    return i;
};

// nthUglyNumber(3,2,3,5);

function deepClone(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) return obj; // primitives
    if (hash.has(obj)) return hash.get(obj); // cyclic reference
    const result = obj instanceof Set ? new Set(obj) // See note about this!
                 : obj instanceof Map ? new Map(Array.from(obj, ([key, val]) =>
                                        [key, deepClone(val, hash)]))
                 : obj instanceof Date ? new Date(obj)
                 : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
                 // ... add here any specific treatment for other classes ...
                 // and finally a catch-all:
                 : obj.constructor ? new obj.constructor()
                 : Object.create(null);
    hash.set(obj, result);
    return Object.assign(result, ...Object.keys(obj).map(
        key => ({ [key]: deepClone(obj[key], hash) }) ));
}

let p = {
  data: 1,
  children: [{
    data: 2,
    parent: null
  }]
};
let q = deepClone(p);
p.children[0].data = 3;
console.log(q.children[0].data);