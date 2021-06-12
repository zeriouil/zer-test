
function ajouter() {
var a = document.getElementById("comp");
var b = document.getElementById("level");
var c = document.getElementById("ls");
var dis = document.createElement("dis");
var AV = a.options[a.selectedIndex].value;
var BV = b.options[b.selectedIndex].value;

dis.text =AV +" - "+BV;
c.add(dis);
}