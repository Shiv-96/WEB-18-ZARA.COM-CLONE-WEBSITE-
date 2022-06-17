document.querySelector(".box1>img").addEventListener("click", index);

function index() {
  window.location.href = "index.html";
}
var p;
var cartArr = JSON.parse(localStorage.getItem("cartData"));
// console.log(cartArr);
displayCart(cartArr);

function displayCart(cartArr) {
  var shiv = [];
  cartArr.forEach(function (el, i) {
    var box1 = document.createElement("div");
    box1.className = "box3";

    var productName = document.createElement("h4");
    productName.innerText = el.productName;

    var image = document.createElement("img");
    image.src = el.image;
    box1.append(productName, image);

    var box2 = document.createElement("div");
    box2.className = "box4";
    var number = document.createElement("span");
    number.id = "box10";
    number.innerText = el.quantity;

    var button = document.createElement("button");
    button.innerText = "+1";
    button.style.cursor = "pointer";
    button.style.marginLeft = "5px";
    // var z = number.innerText;
    button.addEventListener("click", function () {
      var z = incFun(el.quantity);
      el.quantity = z;
      number.innerText = z;
      localStorage.setItem("cartData", JSON.stringify(cartArr));
      window.location.reload();
    });
    var z = el.quantity;

    var button1 = document.createElement("button");
    button1.innerText = "-1";
    button1.style.cursor = "pointer";
    button1.style.marginRight = "5px";

    button1.addEventListener("click", function () {
      var z = decFun(el.quantity);
      el.quantity = z;
      number.innerText = z;
      localStorage.setItem("cartData", JSON.stringify(cartArr));
      window.location.reload();
      if (number.innerText == 0) {
        delFun(i);
      }
    });
    // z = el.quantity

    var box3 = document.createElement("div");
    box3.className = "box5";

    box3.append(button1, number, button);
    y = el.price.split(" ");
    x = y[1].split(",");
    if (x.length == 2) {
      x = +x[0] * 1000 + +x[1];
    } else {
      x = +x[0];
    }
    var price = document.createElement("p");
    price.innerText = z + " x " + el.price;

    var total = document.createElement("p");
    total.innerText = y[0] + " " + eval(z * x);

    sum = z * x;
    shiv.push(sum);

    var box4 = document.createElement("div");
    box4.append(price, total);
    var remove = document.createElement("button");
    remove.innerText = "DELETE";
    remove.style.backgroundColor = "transparent";
    remove.style.border = "none";
    remove.style.width = "65px";
    remove.style.cursor = "pointer";

    remove.addEventListener("click", function () {
      delFun(i);
    });

    box2.append(box3, box4, remove);

    var box5 = document.createElement("div");
    box5.className = "box6";
    box5.append(box1, box2);
    document.querySelector("#container").append(box5);
  });
  // console.log(shiv)
  var sum = 0;
  for (var i = 0; i < shiv.length; i++) {
    sum = sum + shiv[i];
  }
//   console.log(sum);
  document.querySelector(".payment > div + div > h4").innerText =
    "TOTAL    ₹ " + sum;
    p = sum;
}
function delFun(i) {
  cartArr.splice(i, 1);
  localStorage.setItem("cartData", JSON.stringify(cartArr));
  window.location.reload();
  displayCart(cartArr);
}

function incFun(el) {
  el++;
  return el;
}

function decFun(el) {
  el--;
  return el;
}

// function total(sum) {
//   var x = 0;
// }
document.querySelector("#nav + h3").innerText =
  "Total Item in the cart :" + cartArr.length;

var button = document.querySelector(".button");
button.style.cursor = "pointer"
button.addEventListener("click", payment);
console.log(p)

function payment() {
    window.location.href = "payment.html"
    localStorage.setItem("price", p)
}
