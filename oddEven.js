function getdata(num){
    if(num === String || num === Boolean){
        console.log("error")
    }

    else{
        if(num % 2 == 0){
            setTimeout(function(){console.log("It's is an Even Number.")}, 4000)
        }

        else{
            setTimeout(function(){console.log("It's is a Odd Number.")}, 2000)
            
        }
    }
}

getdata(3)