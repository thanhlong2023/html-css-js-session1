let arr = []
let obj = {
  name: "Messi",
  age: 34,
  club: "PSG",
};
arr.push(obj);
arr.unshift('1');
arr.splice(1, 0, 'name')
// arr.splice(1, 1)
console.log(arr);

