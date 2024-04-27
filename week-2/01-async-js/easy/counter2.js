
var delay = ()=>{
    return(new Promise((resolve)=>{
        setTimeout(resolve,1000)
    }))
}

var loop = async () =>{
    while(true){
        await delay();
        counter+=1;
        console.log(counter) ;
    }
    
}

var counter =0
loop()