fs.readFile('f1.txt', function(f1Err, f1Data){
    // based on err or data handle business usecase
    if(f1Err){
        console.log('Error while reading f1.txt', err);
    }
    else{
        console.log('f1.txt data => ', f1Data);
    }
})