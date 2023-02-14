function ismultiple (valor, mult){
    let calculo = valor % mult;
    if ( calculo ==0) 
    return true;
    else 
        return false;
}

function multiple () {
    let min = 0 
    for (let i =1000; i>min; i--){

        if(ismultiple (i,3)) {
            console.log(i, "Fizz")
        } 
        if(ismultiple(i,5)) {
            console.log(i, "Buzz")
        }
        else {
            console.log(i)
        }
    }
}
  
