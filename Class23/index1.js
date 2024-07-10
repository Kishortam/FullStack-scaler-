var a = 10;
var b = 20;
var c = b;
console.log(a,b,c); // 10 20 20

b = 30;
console.log(a,b,c); // 10 30 20


//---
var d = 10;
var e = d;
console.log(d,e); // 10 10

 

//---
var j = 40;
var k = 50;
var temp;

temp = j;  // temp = 40
j = k;  // 40 => k(50)
k = temp;  // 50 => temp(40)
console.log(j,k);  // 50 40

//------

var o = {name : 'Nirmal'};
var p = {name : 'Satish'};

var q = p; // q = satish
q.name = "ranjana"; // satish => ranjana (change from both p & q)
console.log(o,p,q); // nirmal ranjana ranjana



//-----------

var l = {name : 'Nirmal'};
var m = {name : 'Satish'};
var tmp;

tmp = l; // nirmal
l = m; // satish
m = tmp; // nirmal

console.log(l,m); // satish nirmal

//----
var x = {name : "Raju"};
var y = {name : "Bunty"};

x.name = y.name;
y.name = "sandy";
console.log(x,y); // bunty sandy