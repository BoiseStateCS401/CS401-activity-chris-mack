//test
window.onload = function(){
var logo = document.getElementById("logo");
  logo.addEventListener("click", function(){
    if(logo.className == "skew"){
     logo.classList.remove("skew"); 
    }else{
      logo.className = "skew";
    }
  });
  
};
