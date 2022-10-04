function solution(n) {
    let str = n.toString();
    let found = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 0) {
            found = true;
        } else if (found && str[i] != 0) {
            return true;
        }
    }
    return false;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test increaseNumberRoundness

// alternative solution
