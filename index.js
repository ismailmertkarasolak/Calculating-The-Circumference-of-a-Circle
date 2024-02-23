const pi = 3.1418;
let radius;
let circumference;
document.getElementById("mySUBMİT").onclick = function(){
    radius = document.getElementById("myTEXT").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").innerHTML = "Çemberin Çevresi: " + circumference;
}