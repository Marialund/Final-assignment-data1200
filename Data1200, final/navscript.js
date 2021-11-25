/* https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
Our source, to make it responsive and interactive. Making it so that we can click the icon to switch between topnav,
and topnav.responsive */
function navigation(){
    var x = document.getElementById("Nav-bar");
    if (x.className === "topnav"){
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
}


/* https://www.w3schools.com/howto/howto_css_menu_icon.asp
Our source, to make sure that you can toggle between the menu.
Making it animated, and causing it to rotate.*/
function navigation2(x) {
    x.classList.toggle("change");
}