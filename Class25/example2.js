// promise is async in nature

  // it will tell you either it is fulfilled or not 






// new Promise((resolve, reject) => {
//     var passingScore = 33;
//     var studentScore = 40;

//     if(studentScore > passingScore){
//         resolve('Congratulations');
//     }
//     else{
//         reject('Bad luck')
//     }
// }).then(function(data){
//     // on success
//     console.log('success >>', data);
// }).catch(function(err){
//     console.log('failure >>', err);
// })
// success >> congratulations




// promise with setTimeout, after specific time result will print

new Promise((resolve, reject) => {
    var passingScore = 33;
    var studentScore = 40;

    setTimeout(() => {
        if(studentScore > passingScore){
            resolve('Congratulations');
        }
        else{
            reject('Bad luck')
        }
    }, 5000);
}).then(function(data){
    // on success
    console.log('success >>', data);
}).catch(function(err){
    console.log('failure >>', err);
});



