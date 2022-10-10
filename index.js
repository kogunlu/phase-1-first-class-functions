function receivesAFunction(callBackFunc){
  return callBackFunc(() => {
    console.log("This is the output of callback function")
  })
}


function returnsANamedFunction(){
    function sum(){
        return 5+6
    }

    function namedFunction(){
        return sum
    }
    return namedFunction()
}

function returnsAnAnonymousFunction(){
    function multiply2(cbf){
        return cbf
    }

    return multiply2(function() {
        console.log('')
    })
}