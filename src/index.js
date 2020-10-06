module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  for (let i of bracketsConfig) {
      brackets[i[0]] = i[1];
  }
    let c = [];
  for(const i of str) {
    if (i === brackets[c[0]]) {
        c.shift()
    } else if (Object.keys(brackets).includes(i)) {
        c.unshift(i)

    } else {
        return false;
    }
  }
    return c.length === 0;

}


