/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [], i = 0;
    while (i !== s.length) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            if (s[i] === ")" && ("(" !== stack.pop())) return false;
            else if (s[i] === "]" && ("[" !== stack.pop())) return false;
            else if (s[i] === "}" && ("{" !== stack.pop())) return false;
        }
        i++;
    }

    if (stack.length !== 0) return false;
    return true;
}
// @lc code=end
