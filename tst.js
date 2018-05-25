var a = [1,2,3,4,5];

var b = a.map(number => number * 2);
var c = a.filter(number => number > 3).map(number => number * 2);
console.log(a, b, c);
// array of objects that make up the UI
// inside object is an object.person, filtering each object 
// if the object.person is in the range, then it will show it, else eliminates from view

