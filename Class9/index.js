// comparison:
// double equality
console.log(1==1); // true
console.log(true==true); // true
console.log(1=='1'); // true
console.log(false == 'false'); // false
console.log(null == undefined); // true
// Number(null); // 0
// Number(undefined); // NaN
// boolean(null); // false
// boolean(undefined); // false


// triple equality
console.log( 1 === '1'); // false
console.log( null === undefined); // false



// Logical
// falsy values : false, 0, undefined, null, ''.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(true && 1); // 1
console.log(false && 1); // false
console.log(true && 'mayank' && 1); // 1
console.log(true && 'mayank');  // mayank

// in case of every true values, last true value will result
// in case of falsy value in between, moment falsy value comes, it will result false.
console.log(true && 1 && 'ranjan');  // ranjan
console.log(true && false && 'mayank');  // false
console.log(true && undefined && 'mayank');  // undefined
console.log(true && 1 && 'mayank' && true);  // true
console.log(true && 1 && 0 && true);  // false


console.log(true || true);  // true
console.log(true || false);  // true
console.log(false || false);  // false
console.log(false || 1);  // 1
console.log('Atul' || 1);  // Atul
console.log(false || 0 || 10 || 'Atul' || 1);  // 10
console.log(false || 0 || undefined || '' || null);  // null


