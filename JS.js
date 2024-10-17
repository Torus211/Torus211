
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

 window.addEventListener('DOMContentLoaded', function (event) {
    let s = document.getElementsByName("myselect");
    s[0].addEventListener("change", function(event) {
    let select = event.target;
    let radios = document.getElementById("myradios");
    console.log(select.value);
    // Можно использовать getElementsByClassName()
    if (select.value == "3") {
    radios.style.display = "none";
    }
    else {
    radios.style.display = "block";
    }
    });
   
    let r = document.querySelectorAll(".myradios input[type=radio]");
    r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
    let r = event.target;
    console.log(r.value);
    });
    });
   
   });
 

