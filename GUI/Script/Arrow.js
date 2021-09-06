/*AUTHOR: Lucksi
Copyright © 2021 Lucksi
License: GNU General Public License v3.0*/

function Active(){
    document.getElementById("Footer").style.display="block";
    document.getElementById("Arrow").setAttribute("onClick", "javascript: Deactive();" );
} 

function Deactive(){
    document.getElementById("Footer").style.display="none";
    document.getElementById("Arrow").setAttribute("onClick", "javascript: Active();" );
}

function Active_Mobile(){
    const holder = ("X");
    document.getElementById("Menu").innerHTML=(holder);
    document.getElementById("Menu").style.width="40px";
    document.getElementById("Menu").style.fontSize="larger";
    document.getElementById("Menu").style.color="#000000";
    document.getElementById("Menu").style.backgroundColor="#ffffff";
    document.getElementById("Options1").style.display="block";
    document.getElementById("Menu").setAttribute("onClick", "javascript: Deactive_Mobile();" );
}

function Deactive_Mobile(){
    const holder = ("MENU");
    document.getElementById("Menu").innerHTML=(holder);
    document.getElementById("Menu").style.width="fit-content";
    document.getElementById("Menu").style.fontSize="medium";
    document.getElementById("Menu").style.color="#ffffff";
    document.getElementById("Menu").style.backgroundColor="#008000";
    document.getElementById("Options1").style.display="none";
    document.getElementById("Menu").setAttribute("onClick", "javascript: Active_Mobile();" );
}