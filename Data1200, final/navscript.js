function myFunction(){
    var x = document.getElementById("Nav-bar");
    if (x.className === "topnav"){
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
}