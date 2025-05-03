// Series of Odd numbers

const generateSeries = (n, i = 1, elem = 1)=>{   

    if(i>n){    
        return
    }else{
       
            console.log(elem)
            generateSeries(n,i+1,elem+2)
            
    }
}

generateSeries(5)