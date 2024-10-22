
 function click1() {
 let f1 = document.getElementsByName("field1");
  let quantity = parseInt(f1[0].value); 
 let r = document.getElementById("result");
 let s = document.getElementsByName("select1");


    if (s[0].value === "v1") { 
    r.innerHTML = quantity * 10 + " руб."; 
    } 
    else if (s[0].value === "v2") { 
 r.innerHTML = quantity * 15 + " руб."; 
 }

return false; 
 }

 
  
 

