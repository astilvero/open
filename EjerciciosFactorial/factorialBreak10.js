let i=1
let count=1;
while(i<=11){
    if(i===11){
        break
    } else{
        count=count*i;
        i++;
        console.log(count)
    }
}
console.log("Contara hasta 10: "+count)