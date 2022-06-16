document.querySelector(".box1>img").addEventListener("click", goToIndex);

function goToIndex() {
  window.location.href = "index.html";
}

var product = JSON.parse(localStorage.getItem("Product"));
console.log(product);
var box1 = document.createElement("div");

box1.className = "box1";
var heading = document.createElement("h4");
heading.innerText = "MATERIALS, CARE AND ORIGIN";

var heading1 = document.createElement("h4");
heading1.innerText = "MATERIALS";

var desc1 = document.createElement("p");
desc1.innerText =
  "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ";
var desc2 = document.createElement("p");
desc2.innerText =
  "The Green to Wear 2.0 standard aims to minimise the environmental impact of textile manufacturing. To that end, we have developed Inditex’s The List programme, which helps guarantee both that production ";

box1.append(desc2, desc1, heading1, heading);

var box2 = document.createElement("div");
var image = document.createElement("img");
image.src = product.image_url;
box2.append(image);
var box3 = document.createElement("div");
box3.className = "box";

var productName = document.createElement("h3");
productName.innerText = product.productName;

var prodDesc = document.createElement("p");
prodDesc.innerText = product.desc;

var prodPrice = document.createElement("p");
prodPrice.innerText = product.price;

var price = document.createElement("span");
price.innerText = "MRP incl. of all taxes";

var addToBag = document.createElement("button");
addToBag.innerText = "ADD TO BAG";
addToBag.style.cursor = "pointer";

var x = document.createElement("p");
x.innerText = "CHECK IN-STORE AVAILABILITY";

var y = document.createElement("p");
y.innerText = "DELIVERY, EXCHANGES AND RETURNS";

var z = document.createElement("p");
z.innerText = product.quantity;
z.style.display = "none";

box3.append(y, x, z, addToBag, price, prodPrice, prodDesc, productName);

document.querySelector("#container").append(box1, box2, box3);

addToBag.addEventListener("click", cart);

cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
function cart() {
  alert("Added to the bag");
  data = {
    productName: productName.innerText,
    image: image.src,
    price: prodPrice.innerText,
    quantity: z.innerText,
  };
  cartArr.push(data);
  localStorage.setItem("cartData", JSON.stringify(cartArr));
  console.log(cartArr);
}
