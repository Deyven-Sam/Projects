// LIKE BOTTON

var heart = document.querySelectorAll(".fa-regular");

var leng = heart.length;
for (var j = 0; j < leng; j++) {
  heart[j].addEventListener("click", function() {
    if (this.style.background == "black") {
      this.style.background = "green";
    } else
      this.style.background = "black";

  });
}

// CART RESET

document.querySelector(".carticon").addEventListener("click", function() {
  document.getElementById("total").innerHTML = 0;
  price = 0;
  document.getElementsByTagName("h4")[0].innerHTML = document.getElementsByTagName("h4")[1].innerHTML = document.getElementsByTagName("h4")[2].innerHTML = document.getElementsByTagName("h4")[3].innerHTML = 0;
  qty1 = qty2 = qty3 = qty4 = 0;
})



// CART PRICE
var plus = document.querySelectorAll(".plus");
var price = Number(document.getElementById("total").innerHTML);
// var qty=Number(document.getElementsByTagName("h4").innerHTML);
var qty1 = 0;
var qty2 = 0;
var qty3 = 0;
var qty4 = 0;



var leng1 = plus.length;
for (var k = 0; k < leng1; k++) {

  plus[k].addEventListener("click", function() {
    var tt = this.className;
    switch (tt) {
      case "plus a":
        qty1 += 1;
        price += 5;
        document.getElementsByTagName("h4")[0].innerHTML = qty1;
        document.getElementById("total").innerHTML = price;

        break
      case "plus b":
        qty2 += 1;
        price += 7;
        document.getElementsByTagName("h4")[1].innerHTML = qty2;
        document.getElementById("total").innerHTML = price;
        break
      case "plus c":
        qty3 += 1;
        price += 4;
        document.getElementsByTagName("h4")[2].innerHTML = qty3;
        document.getElementById("total").innerHTML = price;
        break
      case "plus d":
        qty4 += 1;
        price += 8;
        document.getElementsByTagName("h4")[3].innerHTML = qty4;
        document.getElementById("total").innerHTML = price;
        break

    }
  });

}


var plus = document.querySelectorAll(".minus");


var leng1 = plus.length;
for (var k = 0; k < leng1; k++) {

  plus[k].addEventListener("click", function() {
    var tt = this.className;
    switch (tt) {
      case "minus a":
        if (price > 0 && qty1>0) {
          price -= 5;
          qty1 -= 1
        } else price -= 0;
        document.getElementById("total").innerHTML = price;
        document.getElementsByTagName("h4")[0].innerHTML = qty1;
        break
      case "minus b":
        if (price > 0 && qty2>0) {
          price -= 7;
          qty2 -= 1
        } else price -= 0;
        document.getElementById("total").innerHTML = price;
        document.getElementsByTagName("h4")[1].innerHTML = qty2;
        break
      case "minus c":
        if (price > 0 && qty3>0) {
          price -= 4;
          qty3 -= 1
        } else price -= 0;
        document.getElementById("total").innerHTML = price;
        document.getElementsByTagName("h4")[2].innerHTML = qty3;
        break
      case "minus d":
        if (price > 0 && qty4>0) {
          price -= 8;
          qty4 -= 1
        } else price -= 0;
        document.getElementById("total").innerHTML = price;
        document.getElementsByTagName("h4")[3].innerHTML = qty4;
        break

    }
  });

}







//
// if (k===0){price+=5}
// else if (k===1){price+=7}
// else if (k===2){price+=4}
// else if (k===3){price+=8}



// switch (k){
// case 0:
// price+=5;
// document.getElementById("total").innerHTML=price;
// break
// case 1:
// price+=7;
// document.getElementById("total").innerHTML=price;
// break
// case 2:
// price+=4;
// document.getElementById("total").innerHTML=price;
// break
// case 3:
// price+=8;
// document.getElementById("total").innerHTML=price;
// break
//
// }
