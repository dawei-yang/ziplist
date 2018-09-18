function zipList(a, b) {
  if (a.length !== b.length) return null;
  const s = [];
  for (let i = 0; i < a.length; i++) {
    s.push(a[i]);
    s.push(b[i]);
  }
  return s;
}

function zipListTheSimpleWay(a, b) {
  return _.flatten(_.zip(a, b));
}

const b = [1, 2, 3];
const a = ['a', 'b', 'c'];
console.log(zipList(a, b));
console.log(zipListTheSimpleWay(a, b));
