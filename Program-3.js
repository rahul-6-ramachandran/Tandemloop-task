// Series of odd numnbers with increment odd line series increment

const generateSeries = (n, i = 1, elem = 1)=>{   

    if(i>n){    
        return
    }else{
        if(i==n && i%2==0)
            return;
       
        console.log(elem)
        generateSeries(n,i+1,elem+2)
            
    }
}

generateSeries(6)
