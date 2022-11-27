
function temp(e){
    let total=document.getElementById("text").value;
    if(e.innerHTML=="=")
    {   

        document.getElementById("text").value=eval(total);
        
    }
    else if(e.innerHTML=="X"){
        document.getElementById("text").value=total.slice(0,-1);
       
    }
    else if(e.innerHTML=="C"){
        
        document.getElementById("text").value="";
       
    }
    else{
    document.getElementById("text").value+=e.innerHTML;
    
   
}
console.log(total);
console.log("inside temp")

}
