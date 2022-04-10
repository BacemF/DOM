// Pour voir le console (inspecter danss le navigateur)
// console.log(document);
// pour voir le seul ID dans le document
// console.log(document.getElementById("total"));
// pour voir le class dans le document
// console.log(document.getElementsByClassName("plus"));
// pour voir les tag name
// console.log(document.getElementsByTagName("p"));
// pour voir le premier element rencontrer
// console.log(document.querySelector(".plus"));
// pour voir tous les elements rencontrer
// console.log(document.querySelectorAll(".plus"));
// --------------------------------------------------------------------------------------------
// Construire une constante qui va prendre tous les boutons (-)
const btnMinus = document.querySelectorAll(".minus");
const btnPlus = document.querySelectorAll(".plus");
const checkboxtag = document.querySelectorAll(".check");
const supprimer = document.querySelectorAll(".delete");
const color = document.querySelectorAll(".like");
// console.log(checkboxtag)
// console.log(btnMinus);  // données de sortie est un tableau
// on va construire un tableau pour le parcourir
for (let i = 0; i < btnMinus.length; i++) {
  btnMinus[i].addEventListener("click", decrement);
  btnPlus[i].addEventListener("click", increment);
  checkboxtag[i].addEventListener("click", totalprice);
  supprimer[i].addEventListener("click", delet);
  color[i].addEventListener("click", coeur);
}
// --------------------------------------------------------------------------------------------
// Creation fontion decrément de prix
function decrement(e) {
  // console.log(e)
  var btnMinus = e.target;
  // console.log(first)
  var sourcebtnMoins = btnMinus.parentElement;
  var quantitytag = sourcebtnMoins.querySelector("p");
  var quantityvalue = Number(quantitytag.innerHTML);
  // console.log(quantitytag)
  // typeof pour savoir le type de donnée
  // console.log(typeof(quantitytag))
  // console.log(quantityvalue) // la sortie est la valeur de la balize mais qui est 0 mais ce zero est de type string donc il faut le convertir en nombre via la commande number
  if (quantityvalue > 0) {
    quantityvalue = quantityvalue - 1;
  }
  // console.log(quantityvalue)
  quantitytag.innerHTML = quantityvalue;
  // console.log(quantitytag);
  // creation de varialbe pour atteindre la valeur du prix de quantité
  var trElt = sourcebtnMoins.parentElement.parentElement;
  // console.log(trElt);
  var unitpricevalue = trElt.querySelector(".unitePrice").innerHTML;
  // console.log(unitpricevalue)
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = quantityvalue * unitpricevalue;
  // console.log(priceValue)
  priceTag.innerHTML = priceValue;
}
// ------------------------------------------------------------------------------
// Creation fontion incrément de prix
function increment(e) {
  var btnPlus = e.target;
  var sourcebtnPlus = btnPlus.parentElement;
  var quantitytag = sourcebtnPlus.querySelector("p");
  var quantityvalue = Number(quantitytag.innerHTML);
  if (quantityvalue < 100) {
    quantityvalue = quantityvalue + 1;
  }
  quantitytag.innerHTML = quantityvalue;
  var trElt = sourcebtnPlus.parentElement.parentElement;
  var unitpricevalue = trElt.querySelector(".unitePrice").innerHTML;
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = quantityvalue * unitpricevalue;
  priceTag.innerHTML = priceValue;
}
// ------------------------------------------------------------------------------------
function totalprice(e) {
  var checkbox = e.target;
  // console.log(checkbox)
  var priceValue = Number(
    checkbox.parentElement.parentElement.querySelector(".price").innerHTML
  );
  // console.log(priceValue)
  var total = document.getElementById("total");
  var totalvalue = Number(total.innerHTML);
  var btnMinus = checkbox.parentElement.parentElement.querySelector(".minus");
  // console.log(btnMinus)
  var btnPlus = checkbox.parentElement.parentElement.querySelector(".plus");
  if (checkbox.checked === true) {
    totalvalue += priceValue;
    btnMinus.setAttribute("disabled", true);
    btnPlus.setAttribute("disabled", true);
  } else {
    totalvalue -= priceValue;
    btnMinus.removeAttribute("disabled");
    btnPlus.removeAttribute("disabled");
  }
  total.innerHTML = totalvalue;
}
// ------------------------------------------------------------------------------------
// function delet(e) {
//   var supprimer = e.target;
//   var sourcesuprimer = supprimer.parentElement.parentElement.parentElement.parentElement;
//   // console.log(sourcesuprimer)
//   var quantitytag = sourcesuprimer.querySelector("p");
//   var pricetag = sourcesuprimer.querySelector(".price");
//   // var checkboxtag = sourcesuprimer.querySelector(".check");
//   // console.log(quantitytag)
//   // var quantityvalue = Number(quantitytag.innerHTML);
//   // console.log(quantityvalue)
//   quantitytag.innerHTML = 0;
//   pricetag.innerHTML = 0;
//   // checkboxtag.checked===false;
// }
// ------------------------------------------------------------------------------------
function delet(e) {
  var s = e.target;
  // console.log(s)
  var i = s.parentElement.parentElement.parentElement.parentElement;
  i.remove();
}
// ------------------------------------------------------------------------------------
function coeur(event) {
  var color = event.target;
  if(color.style.color==="gray"){
    color.style.color = "red";
  }
  else {
    color.style.color = "gray";
  } 
}