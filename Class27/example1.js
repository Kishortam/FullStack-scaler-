 

 var arr = ["gf1", "gf2", "gf3", "gf4"];
 // expected output =>  ["GF_1", "GF_2", "GF_3", "gGF_4"];

 // Approach 1 : forEach
 const output = [];
 arr.forEach((item)=>{
    const newItem = item.replace("gf", "GF_");
    output.push(newItem);
 })
console.log(output);



 // Approach 2 : map
 const result = arr.map(item =>{
    return item.replace("gf", "GF_");
 })
 console.log(result);


 // Approach 3 : toString
 arr.toString();  // 'gf1,gf2,gf3,gf4'
 arr.toString().replaceAll("gf","GF_"); // 'GF_1,GF_2,GF_3,GF_4'
 arr.toString().replaceAll("gf","GF_").split(','); // (4) ['GF_1', 'GF_2', 'GF_3', 'GF_4']
