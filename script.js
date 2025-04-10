b=0;
l=document.getElementById("links")
console.log("u")

document.getElementById("btn").onclick = function() {
    if(b%2==0){
    l.style.top=0;
    b=b+1;
    }
    else{
        l.style.top="-40vh";
        b=b+1;
    }
  };