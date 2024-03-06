// Array : 
var arr = [1, false, 'tanay', undefined, null, [1,2,3]];

console.log(arr);

console.log(arr[1]);

arr[2] = 'sanjay';
console.log(arr);

console.log(arr[5]);

// it will create 5 empty space and then index 11th value
arr[11] = "out of my range";
console.log(arr);

console.log(arr.length); // length = 12




var food = ['burger', 'pizza', 'coffee', 'sandwich'];

console.log(food);

// to push at end
food.push = 'black coffee';
console.log(food);

// to remove from end
food.pop();
console.log(food);

// to add at index 1 or at start
food.unshift('salad');
console.log(food);

// to remove from start
food.shift();
console.log(food);