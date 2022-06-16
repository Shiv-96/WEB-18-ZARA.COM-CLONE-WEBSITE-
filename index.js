// for directing to the home page

document.querySelector(".box1").addEventListener("click", direct);

function direct() {
  window.location.href = "index.html";
}

// Womens section for displaying her data

var bestseller = document.querySelector(".bestseller");
var dresses = document.querySelector(".dresses");
var knitwear = document.querySelector(".knitwear");
var swimwear = document.querySelector(".swimwear");
var shoes = document.querySelector(".shoes");
document.querySelector(".bestProd").style.display = "block";
document.querySelector(".bestseller").style.fontWeight = "bold";
document.querySelector(".dressProd").style.display = "none";
document.querySelector(".knitwearProd").style.display = "none";
document.querySelector(".swimwearProd").style.display = "none";
document.querySelector(".shoesProd").style.display = "none";
bestseller.addEventListener("click", bestsell);
function bestsell() {
  document.querySelector(".bestProd").style.display = "block";
  document.querySelector(".dressProd").style.display = "none";
  document.querySelector(".knitwearProd").style.display = "none";
  document.querySelector(".swimwearProd").style.display = "none";
  document.querySelector(".shoesProd").style.display = "none";
  document.querySelector(".bestseller").style.fontWeight = "bold";
  document.querySelector(".dresses").style.fontWeight = "normal";
  document.querySelector(".knitwear").style.fontWeight = "normal";
  document.querySelector(".swimwear").style.fontWeight = "normal";
  document.querySelector(".shoes").style.fontWeight = "normal";
}
dresses.addEventListener("click", dress);
function dress() {
  document.querySelector(".bestProd").style.display = "none";
  document.querySelector(".dressProd").style.display = "block";
  document.querySelector(".knitwearProd").style.display = "none";
  document.querySelector(".swimwearProd").style.display = "none";
  document.querySelector(".shoesProd").style.display = "none";
  document.querySelector(".bestseller").style.fontWeight = "normal";
  document.querySelector(".dresses").style.fontWeight = "bold";
  document.querySelector(".knitwear").style.fontWeight = "normal";
  document.querySelector(".swimwear").style.fontWeight = "normal";
  document.querySelector(".shoes").style.fontWeight = "normal";
}
knitwear.addEventListener("click", knit);
function knit() {
  document.querySelector(".bestProd").style.display = "none";
  document.querySelector(".dressProd").style.display = "none";
  document.querySelector(".knitwearProd").style.display = "block";
  document.querySelector(".swimwearProd").style.display = "none";
  document.querySelector(".shoesProd").style.display = "none";
  document.querySelector(".bestseller").style.fontWeight = "normal";
  document.querySelector(".dresses").style.fontWeight = "normal";
  document.querySelector(".knitwear").style.fontWeight = "bold";
  document.querySelector(".swimwear").style.fontWeight = "normal";
  document.querySelector(".shoes").style.fontWeight = "normal";
}
swimwear.addEventListener("click", swim);
function swim() {
  document.querySelector(".bestProd").style.display = "none";
  document.querySelector(".dressProd").style.display = "none";
  document.querySelector(".knitwearProd").style.display = "none";
  document.querySelector(".swimwearProd").style.display = "block";
  document.querySelector(".shoesProd").style.display = "none";
  document.querySelector(".bestseller").style.fontWeight = "normal";
  document.querySelector(".dresses").style.fontWeight = "normal";
  document.querySelector(".knitwear").style.fontWeight = "normal";
  document.querySelector(".swimwear").style.fontWeight = "bold";
  document.querySelector(".shoes").style.fontWeight = "normal";
}
shoes.addEventListener("click", shoe);
function shoe() {
  document.querySelector(".bestProd").style.display = "none";
  document.querySelector(".dressProd").style.display = "none";
  document.querySelector(".knitwearProd").style.display = "none";
  document.querySelector(".swimwearProd").style.display = "none";
  document.querySelector(".shoesProd").style.display = "block";
  document.querySelector(".bestseller").style.fontWeight = "normal";
  document.querySelector(".dresses").style.fontWeight = "normal";
  document.querySelector(".knitwear").style.fontWeight = "normal";
  document.querySelector(".swimwear").style.fontWeight = "normal";
  document.querySelector(".shoes").style.fontWeight = "bold";
}

//   Mens section for displaying his data

var newProduct = document.querySelector(".new");
var suits = document.querySelector(".suits");
var joinLife = document.querySelector(".joinLife");
var zaraAthleticz = document.querySelector(".zaraAthleticz");
document.querySelector(".newProd").style.display = "block";
document.querySelector(".new").style.fontWeight = "bold";
document.querySelector(".suitsProd").style.display = "none";
document.querySelector(".joinLifeProd").style.display = "none";
document.querySelector(".zaraAthleticzProd").style.display = "none";

newProduct.addEventListener("click", newPr);
function newPr() {
  document.querySelector(".newProd").style.display = "block";
  document.querySelector(".suitsProd").style.display = "none";
  document.querySelector(".joinLifeProd").style.display = "none";
  document.querySelector(".zaraAthleticzProd").style.display = "none";
  document.querySelector(".new").style.fontWeight = "bold";
  document.querySelector(".suits").style.fontWeight = "normal";
  document.querySelector(".joinLife").style.fontWeight = "normal";
  document.querySelector(".zaraAthleticz").style.fontWeight = "normal";
}

suits.addEventListener("click", suit);
function suit() {
  document.querySelector(".newProd").style.display = "none";
  document.querySelector(".suitsProd").style.display = "block";
  document.querySelector(".joinLifeProd").style.display = "none";
  document.querySelector(".zaraAthleticzProd").style.display = "none";
  document.querySelector(".suits").style.fontWeight = "bold";
  document.querySelector(".new").style.fontWeight = "normal";
  document.querySelector(".joinLife").style.fontWeight = "normal";
  document.querySelector(".zaraAthleticz").style.fontWeight = "normal";
}
joinLife.addEventListener("click", joinF);
function joinF() {
  document.querySelector(".newProd").style.display = "none";
  document.querySelector(".suitsProd").style.display = "none";
  document.querySelector(".joinLifeProd").style.display = "block";
  document.querySelector(".zaraAthleticzProd").style.display = "none";
  document.querySelector(".joinLife").style.fontWeight = "bold";
  document.querySelector(".new").style.fontWeight = "normal";
  document.querySelector(".suits").style.fontWeight = "normal";
  document.querySelector(".zaraAthleticz").style.fontWeight = "normal";
}
zaraAthleticz.addEventListener("click", zara);
function zara() {
  document.querySelector(".newProd").style.display = "none";
  document.querySelector(".suitsProd").style.display = "none";
  document.querySelector(".joinLifeProd").style.display = "none";
  document.querySelector(".zaraAthleticzProd").style.display = "block";
  document.querySelector(".zaraAthleticz").style.fontWeight = "bold";
  document.querySelector(".new").style.fontWeight = "normal";
  document.querySelector(".suits").style.fontWeight = "normal";
  document.querySelector(".joinLife").style.fontWeight = "normal";
}

//   Kids section for displaying their data

var girl = document.querySelector(".girl");
var boy = document.querySelector(".boy");
var babyGirl = document.querySelector(".babyGirl");
var babyBoy = document.querySelector(".babyBoy");

document.querySelector(".girlProd").style.display = "block";
document.querySelector(".girl").style.fontWeight = "bold";
document.querySelector(".boyProd").style.display = "none";
document.querySelector(".babyGirlProd").style.display = "none";
document.querySelector(".babyBoyProd").style.display = "none";

girl.addEventListener("click", girlPr);
function girlPr() {
  document.querySelector(".girlProd").style.display = "block";
  document.querySelector(".boyProd").style.display = "none";
  document.querySelector(".babyGirlProd").style.display = "none";
  document.querySelector(".babyBoyProd").style.display = "none";
  document.querySelector(".girl").style.fontWeight = "bold";
  document.querySelector(".boy").style.fontWeight = "normal";
  document.querySelector(".babyGirl").style.fontWeight = "normal";
  document.querySelector(".babyBoy").style.fontWeight = "normal";
}

boy.addEventListener("click", boyPr);
function boyPr() {
  document.querySelector(".girlProd").style.display = "none";
  document.querySelector(".boyProd").style.display = "block";
  document.querySelector(".babyGirlProd").style.display = "none";
  document.querySelector(".babyBoyProd").style.display = "none";
  document.querySelector(".boy").style.fontWeight = "bold";
  document.querySelector(".girl").style.fontWeight = "normal";
  document.querySelector(".babyGirl").style.fontWeight = "normal";
  document.querySelector(".babyBoy").style.fontWeight = "normal";
}

babyGirl.addEventListener("click", babyGirlPr);
function babyGirlPr() {
  document.querySelector(".girlProd").style.display = "none";
  document.querySelector(".boyProd").style.display = "none";
  document.querySelector(".babyGirlProd").style.display = "block";
  document.querySelector(".babyBoyProd").style.display = "none";
  document.querySelector(".boy").style.fontWeight = "normal";
  document.querySelector(".girl").style.fontWeight = "normal";
  document.querySelector(".babyGirl").style.fontWeight = "bold";
  document.querySelector(".babyBoy").style.fontWeight = "normal";
}
babyBoy.addEventListener("click", babyBoyPr);
function babyBoyPr() {
  document.querySelector(".girlProd").style.display = "none";
  document.querySelector(".boyProd").style.display = "none";
  document.querySelector(".babyGirlProd").style.display = "none";
  document.querySelector(".babyBoyProd").style.display = "block";
  document.querySelector(".boy").style.fontWeight = "normal";
  document.querySelector(".girl").style.fontWeight = "normal";
  document.querySelector(".babyGirl").style.fontWeight = "normal";
  document.querySelector(".babyBoy").style.fontWeight = "bold";
}

//   for displaying men, women and kids section
document.querySelector(".container1").style.display = "block";
document.querySelector(".container2").style.display = "none";
document.querySelector(".container3").style.display = "none";
document.querySelector("#section").addEventListener("change", section);
function section() {
  var value = document.querySelector("#section").value;
  if (value === "Womens") {
    document.querySelector(".container1").style.display = "block";
    document.querySelector(".container2").style.display = "none";
    document.querySelector(".container3").style.display = "none";
  } else if (value === "Mens") {
    document.querySelector(".container1").style.display = "none";
    document.querySelector(".container2").style.display = "block";
    document.querySelector(".container3").style.display = "none";
  } else if (value === "Kids") {
    document.querySelector(".container1").style.display = "none";
    document.querySelector(".container2").style.display = "none";
    document.querySelector(".container3").style.display = "block";
  }
}

//   displaying mens data

var mensData = [
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7505/482/712/32/w/750/7505482712_1_1_1.jpg?ts=1653991932013",
    productName: "WIDE FIT BERMUDA SHORTS X JAVIER S. MEDINA",
    desc: "Bermuda shorts with an elastic waistband and front pleats. Front pockets and back welt pockets. Zip fly and top button fastening.",
    price: "₹ 3,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7505/481/401/32/w/750/7505481401_1_1_1.jpg?ts=1653988839525",
    productName: "WIDE FIT TROUSERS BY JAVIER S. MEDINA",
    desc: "Wide trousers made of cotton. Featuring side pockets, back welt pockets with button and front button fastening.",
    price: "₹ 5,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/7505/483/710/2/w/750/7505483710_6_1_1.jpg?ts=1652365785975",
    productName: "PLEATED TROUSERS BY JAVIER S. MEDINA",
    desc: "Relaxed-fit trousers made of cotton fabric. Front pleated detail at the waist. Side pockets and back welt pockets with button. Front button fastening.",
    price: "₹ 5,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/4327/130/300/2/w/750/4327130300_2_2_1.jpg?ts=1654008345865",
    productName: "STRIPED SHIRT BY JAVIER S. MEDINA",
    desc: "Relaxed fit shirt made of stretchy cotton. Featuring a lapel collar and long sleeves with buttoned cuffs. Chest patch pocket. Button-up front.",
    price: "₹ 2,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/7505/193/251/2/w/750/7505193251_6_1_1.jpg?ts=1652365757976",
    productName: "JACKET WITH POCKETS BY JAVIER S. MEDINA",
    desc: "Boxy fit collared jacket made of stretchy cotton fabric. Long sleeves with buttoned cuffs. Hip patch pockets. Button-up front.",
    price: "₹ 6,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7505/480/615/32/w/750/7505480615_1_1_1.jpg?ts=1653988841450",
    productName: "WIDE FIT TROUSERS X JAVIER S. MEDINA",
    desc: "Wide cotton trousers with side pockets, jetted back pockets with buttons and button fastening.",
    price: "₹ 5,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7505/193/420/32/w/750/7505193420_1_1_1.jpg?ts=1653988839487",
    productName: "JACKET WITH POCKETS BY JAVIER S. MEDINA",
    desc: "Boxy fit collared jacket made of stretchy cotton fabric. Long sleeves with buttoned cuffs. Hip patch pockets. Button-up front.",
    price: "₹ 6,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2888/408/403/2/w/750/2888408403_6_3_1.jpg?ts=1652365772049",
    productName: "JACQUARD T-SHIRT X JAVIER S. MEDINA",
    desc: "Sleeveless t-shirt with a round neckline and ribbed trims.",
    price: "₹ 1,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7505/193/420/2/w/750/7505193420_2_1_1.jpg?ts=1654008351725",
    productName: "JACKET WITH POCKETS BY JAVIER S. MEDINA",
    desc: "Boxy fit collared jacket made of stretchy cotton fabric. Long sleeves with buttoned cuffs. Hip patch pockets. Button-up front.",
    price: "₹ 6,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/2/p/2721/020/040/2/w/750/2721020040_6_3_1.jpg?ts=1652438655358",
    productName: "JAVIER S. MEDINA® LEATHER CLOGS",
    desc: "Dark brown leather clogs. Wraparound upper with openwork. Adjusts at the back with buckled strap. Sole in a combination of colours.",
    price: "₹ 6,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/2/p/3223/020/010/2/w/750/3223020010_6_1_1.jpg?ts=1652700728461",
    productName: "JAVIER S. MEDINA® LEATHER BACKPACK",
    desc: "Navy blue leather backpack. Main pocket with gathered closure. Small inside pocket. Two tubular shoulder straps and two handles.",
    price: "₹ 12,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/4023/300/712/2/w/750/4023300712_6_1_1.jpg?ts=1653635434078",
    productName: "PRINTED BANDANA X JAVIER S. MEDINA",
    desc: "Bandanna made of satiny fabric.",
    price: "₹ 990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/3334/301/712/2/w/750/3334301712_6_1_1.jpg?ts=1652427913164",
    productName: "BAND SOCKS X JAVIER S. MEDINA",
    desc: "Lightweight ribbed knit socks with ribbed trims.",
    price: "₹ 1,590.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0775/434/401/2/w/750/0775434401_6_3_1.jpg?ts=1650981902358",
    productName: "STRIPED PYJAMA SHIRT",
    desc: "Pyjama shirt made of cotton fabric. Camp collar and long sleeves. Chest patch pocket. Button-up front.",
    price: "₹ 2,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/6987/410/427/35/w/750/6987410427_1_1_1.jpg?ts=1654588028747",
    productName: "DENIM SHIRT",
    desc: "Faded relaxed fit shirt with a button-down collar and long sleeves with buttoned cuffs. Featuring a chest patch pocket and button fastening on the front.",
    price: "₹ 1,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/8574/426/500/32/w/750/8574426500_1_1_1.jpg?ts=1654589424869",
    productName: "BASIC SWIMMING TRUNKS",
    desc: "Swimming trunks with an elastic waistband and adjustable drawstrings. Side pockets and a back patch pocket. Lining.",
    price: "₹ 1,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1300/149/712/2/w/750/1300149712_2_5_1.jpg?ts=1654615968397",
    productName: "EMBROIDERED OVERSHIRT",
    desc: "Collared overshirt with long sleeves with buttoned cuffs. Chest patch pocket and patch hip pockets with contrast embroidery. Button-up front.",
    price: "₹ 5,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0706/486/251/2/w/750/0706486251_6_3_1.jpg?ts=1653564839034",
    productName: "PRINTED JACKET WITH EMBROIDERY",
    desc: "Lightweight collared jacket with an all-over embroidered print. Long sleeves with buttoned cuffs. Patch pockets with flaps at the hip. Buttoned front.",
    price: "₹ 5,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1300/148/712/2/w/750/1300148712_2_2_1.jpg?ts=1654587302162",
    productName: "EMBROIDERED PRINT SHIRT",
    desc: "Regular-fit shirt with all-over embroidered print. Camp collar and short sleeves. Button-up front.",
    price: "₹ 2,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7446/305/800/2/w/750/7446305800_1_1_1.jpg?ts=1654676842905",
    productName: "JACQUARD SHIRT",
    desc: "Relaxed fit flowing shirt with a camp collar, short sleeves and a button-up front.",
    price: "₹ 2,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/0108/300/707/2/w/750/0108300707_1_1_1.jpg?ts=1654598012159",
    productName: "RELAXED FIT CARGO TROUSERS",
    desc: "Relaxed fit cropped trousers with front pockets and back pockets. Patch pocket appliqués with flaps on the legs. Turn-up hems. Zip fly and top button fastening.",
    price: "₹ 3,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1187/476/250/2/w/750/1187476250_1_1_1.jpg?ts=1654598015740",
    productName: "SOFT DENIM BERMUDA SHORTS",
    desc: "Faded Bermuda shorts with an elastic waistband with adjustable drawstring. Featuring a five-pocket design and turn-up hems.",
    price: "₹ 2,590.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1538/333/406/2/w/750/1538333406_1_1_1.jpg?ts=1654598027660",
    productName: "DENIM JOGGER BERMUDA SHORTS",
    desc: "Bermuda shorts featuring an elastic waistband with adjustable drawstring. Side pockets and rear pocket detail.",
    price: "₹ 2,590.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/6085/312/501/2/w/750/6085312501_1_1_1.jpg?ts=1654069449794",
    productName: "CONTRAST BERMUDA SHORTS",
    desc: "Satin fabric Bermuda shorts. Adjustable elastic drawstring waistband. Contrast trims.",
    price: "₹ 2,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/6987/300/800/2/w/750/6987300800_1_1_1.jpg?ts=1654068082806",
    productName: "COLOURED BERMUDA SHORTS",
    desc: "Regular-fit Bermuda shorts. Front pockets and back welt pockets. Faded effect. Front zip fly and top button fastening.",
    price: "₹ 2,890.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5571/162/420/32/w/750/5571162420_1_1_1.jpg?ts=1653476204528",
    productName: "LYOCELL SHIRT",
    desc: "Regular fit shirt in lyocell fabric. Camp collar and short sleeves. Split hem. Button-up front.",
    price: "₹ 2,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/3920/424/712/2/w/750/3920424712_6_1_1.jpg?ts=1654083665406",
    productName: "EXPLORER HAT",
    desc: "Hat made of technical fabric. Featuring a wide brim and adjustable drawstring.",
    price: "₹ 1,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/3920/424/506/2/w/750/3920424506_6_1_1.jpg?ts=1654083662967",
    productName: "EXPLORER HAT",
    desc: "Hat made of technical fabric. Featuring a wide brim and adjustable drawstring.",
    price: "₹ 1,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/6861/442/803/2/w/750/6861442803_1_1_1.jpg?ts=1650623523236",
    productName: "SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and hip patch pocket. Inside pocket detail. Back vents at the hem. Front button fastening.",
    price: "₹ 8,990.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/9065/303/526/2/w/750/9065303526_6_1_1.jpg?ts=1654076777870",
    productName: "BASIC SOFT CAP",
    desc: "Peak cap. Faded effect. Adjustable fastening.",
    price: "₹ 1,590.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1012/303/808/2/w/750/1012303808_6_2_1.jpg?ts=1654076773233",
    productName: "EMBOSSED RING",
    desc: "Metal ring with contrast embossing.",
    price: "₹ 1,590.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1012/304/808/2/w/750/1012304808_6_2_1.jpg?ts=1654076719726",
    productName: "CONTRAST SIGNET RING",
    desc: "Metal ring with a contrast signet.",
    price: "₹ 1,590.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1012/301/808/2/w/750/1012301808_6_1_1.jpg?ts=1654076716352",
    productName: "CHAIN PENDANT",
    desc: "Metal chain with a matching embossed pendant. Lobster clasp fastening.",
    price: "₹ 1,790.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1012/302/808/2/w/750/1012302808_6_1_1.jpg?ts=1654076743201",
    productName: "ROPE CHAIN",
    desc: "Metal chain. Lobster clasp fastening.",
    price: "₹ 1,790.00",
    category: "New",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4499/120/800/102/w/750/4499120800_1_1_1.jpg?ts=1649764598841",
    productName: "SLIM FIT DOUBLE-BREASTED BLAZER",
    desc: "Slim-fit blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and flap hip pockets. Inside pocket detail. Back vents. Double-breasted buttoned front.",
    price: "₹ 7,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/610/800/102/w/750/1564610800_1_1_1.jpg?ts=1649764487133",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button details on the cuffs. Chest welt pocket and hip flap pockets. Inside pocket detail. Front button fastening.",
    price: "₹ 5,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/414/800/102/w/750/1564414800_1_1_1.jpg?ts=1649765084342",
    productName: "SLIM-FIT SUIT WAISTCOAT",
    desc: "Slim-fit waistcoat with a V-neckline. Jetted pockets at the hip. Adjustable tabs at the back. Button-up front.",
    price: "₹ 3,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/611/800/102/w/750/1564611800_1_1_1.jpg?ts=1649764488529",
    productName: "SLIM FIT TAILORED SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets, rear welt pockets and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1564/610/420/102/w/750/1564610420_1_1_1.jpg?ts=1649771278063",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button details on the cuffs. Chest welt pocket and hip flap pockets. Inside pocket detail. Front button fastening.",
    price: "₹ 5,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1564/610/708/2/w/750/1564610708_1_1_1.jpg?ts=1649876099315",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button details on the cuffs. Chest welt pocket and hip flap pockets. Inside pocket detail. Front button fastening.",
    price: "₹ 5,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4499/800/708/103/w/750/4499800708_2_1_1.jpg?ts=1649843187977",
    productName: "SLIM FIT DOUBLE-BREASTED BLAZER",
    desc: "Slim-fit blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and flap hip pockets. Inside pocket detail. Back vents. Double-breasted buttoned front.",
    price: "₹ 7,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4536/878/251/102/w/750/4536878251_1_1_1.jpg?ts=1649762724236",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button detail on the cuffs. Welt pockets at the chest and flap pockets at the hip. Inside pocket detail. Front button fastening.",
    price: "₹ 7,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4166/878/251/2/w/750/4166878251_6_1_1.jpg?ts=1648196784719",
    productName: "SLIM FIT SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets, rear welt pockets and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1564/610/737/2/w/750/1564610737_1_1_1.jpg?ts=1649876169252",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button details on the cuffs. Chest welt pocket and hip flap pockets. Inside pocket detail. Front button fastening.",
    price: "₹ 5,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/611/737/2/w/750/1564611737_6_1_1.jpg?ts=1643717882480",
    productName: "SLIM FIT TAILORED SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets, rear welt pockets and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/651/708/103/w/750/1564651708_1_1_1.jpg?ts=1649761637693",
    productName: "SLIM FIT TAILORED SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets, rear welt pockets and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4260/583/401/102/w/750/4260583401_1_1_1.jpg?ts=1649774729263",
    productName: "CHECK COMFORT SUIT TROUSERS",
    desc: "Slim fit trousers made of an elastic and comfortable fabric. Featuring front pockets, back buttoned welt pockets and a zip fly and top button fastening.",
    price: "₹ 4,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4553/941/250/2/w/750/4553941250_1_1_1.jpg?ts=1651587955199",
    productName: "PREMIUM TWILL SHIRT",
    desc: "Regular fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front.",
    price: "₹ 4,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4553/941/403/2/w/750/4553941403_1_1_1.jpg?ts=1651588069728",
    productName: "PREMIUM TWILL SHIRT",
    desc: "Regular fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front.",
    price: "₹ 4,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4551/942/250/2/w/750/4551942250_1_1_1.jpg?ts=1651236125058",
    productName: "PREMIUM TEXTURED SHIRT",
    desc: "Regular fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front.",
    price: "₹ 4,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4552/945/400/2/w/750/4552945400_1_1_1.jpg?ts=1651579046338",
    productName: "PREMIUM STRIPED SHIRT",
    desc: "Regular fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front.",
    price: "₹ 4,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4022/530/800/102/w/750/4022530800_1_1_1.jpg?ts=1649767271289",
    productName: "TEXTURED SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Hip and chest welt pockets and an inside pocket. Central back vent at the hem. Front button fastening.",
    price: "₹ 6,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4023/530/800/2/w/750/4023530800_6_1_1.jpg?ts=1637915054482",
    productName: "TEXTURED SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets and rear jetted pockets. Featuring turn-up hems and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4022/540/704/102/w/750/4022540704_1_1_1.jpg?ts=1649767315777",
    productName: "TEXTURED SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves featuring cuffs with buttoned details. Hip welt pockets and inside pocket detail. Central back vent. Button-up front.",
    price: "₹ 6,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4438/494/512/102/w/750/4438494512_1_1_1.jpg?ts=1649756109251",
    productName: "SUIT BLAZER",
    desc: "Relaxed-fit blazer with a notched lapel collar. Long sleeves. Hip flap pockets and an inside pocket detail. Central back vent at the hem. Hidden button fastening at the front.",
    price: "₹ 8,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4439/494/512/102/w/750/4439494512_1_1_1.jpg?ts=1649756096115",
    productName: "SUIT TROUSERS",
    desc: "Straight-fit trousers. Front pockets and back flap pockets detail. Zip fly and concealed metal hook fastening.",
    price: "₹ 4,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4349/526/505/102/w/750/4349526505_1_1_1.jpg?ts=1649756097483",
    productName: "DOUBLE-BREASTED SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Hip flap pockets and an inside pocket detail. Back vents. Double-breasted button fastening.",
    price: "₹ 8,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4350/526/505/2/w/750/4350526505_6_2_1.jpg?ts=1643705251325",
    productName: "STRAIGHT SUIT TROUSERS",
    desc: "Straight fit trousers with front pockets, rear pockets and zip fly and top button fastening.",
    price: "₹ 4,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/420/401/103/w/750/1564420401_1_1_1.jpg?ts=1649757650280",
    productName: "BIRD’S-EYE SUIT BLAZER",
    desc: "Regular fit blazer with a notched lapel collar. Long sleeves with buttons on the cuffs. Chest welt pocket and flap hip pockets. Inside pocket detail. Back vent at the hem. Front button fastening.",
    price: "₹ 8,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/421/401/2/w/750/1564421401_6_1_1.jpg?ts=1644837901104",
    productName: "BIRD’S-EYE SUIT TROUSERS",
    desc: "Regular fit trousers with front pockets and back welt pockets. Zip fly and top button fastening.",
    price: "₹ 4,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2005/920/040/2/w/750/2005920040_6_1_1.jpg?ts=1636630813748",
    productName: "LEATHER CHELSEA BOOTS",
    desc: "Chelsea ankle boots made of leather with a glossy finish. Featuring matching elastic bands on the sides and a pull tab at the back. Rounded toe. Matching sole.",
    price: "₹ 7,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2417/920/040/2/w/750/2417920040_6_1_1.jpg?ts=1637147253451",
    productName: "SMART POINTED SHOES",
    desc: "Formal leather shoes with laces. Semi-round toe. Five-eyelet facing. Three-level welt detail on the sole. Cowboy-style heel.",
    price: "₹ 7,990.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5568/401/800/2/w/750/5568401800_6_2_1.jpg?ts=1646992804097",
    productName: "BASIC TEXTURED TIE",
    desc: "Wide tie made of a textured silk fabric.",
    price: "₹ 2,590.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/2/p/2823/301/800/2/w/750/2823301800_6_1_1.jpg?ts=1628689768370",
    productName: "TOPSTITCHED LEATHER BELT",
    desc: "Leather belt with topstitching along the edges. Fastening with metal buckle and loop.",
    price: "₹ 2,590.00",
    category: "Suits",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0706/729/803/2/w/750/0706729803_1_1_1.jpg?ts=1641307282489",
    productName: "COMFORT OVERSHIRT",
    desc: "Regular fit overshirt with a lapel collar, long sleeves and buttoned cuffs. Featuring chest patch pockets with flaps and snap-button fastening on the front.",
    price: "₹ 2,990.00",
    category: "Join Life",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/3046/488/916/2/w/750/3046488916_1_1_1.jpg?ts=1638372860019",
    productName: "CONTRAST BOMBER JACKET",
    desc: "Varsity jacket with padded interior. Collar and long sleeves with ribbed trims. Front pockets and inside pocket detail. Elastic hem. Fastens with snap buttons down the front.",
    price: "₹ 6,990.00",
    category: "Join Life",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/9632/348/405/2/w/750/9632348405_1_1_1.jpg?ts=1643209990022",
    productName: "GEOMETRIC JACQUARD BOMBER JACKET",
    desc: "Jacket with a ribbed collar. Long sleeves. Welt pockets at the hip. Elastic hem. Front zip fastening.",
    price: "₹ 5,990.00",
    category: "Join Life",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/3046/489/250/2/w/750/3046489250_1_1_1.jpg?ts=1641298009147",
    productName: "BOMBER JACKET WITH RIBBING",
    desc: "Varsity jacket with lightly padded interior. Double ribbed collar and long sleeves with elastic cuffs. Jetted pockets at the hip and inside pocket detail. Ribbed hem. Fastens with snap buttons down the front.",
    price: "₹ 6,990.00",
    category: "Join Life",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/6085/312/501/2/w/750/6085312501_1_1_1.jpg?ts=1654069449794",
    productName: "COLOUR BLOCK JACKET",
    desc: "Lightweight jacket with a collar and hood. Long sleeves with elastic cuffs. Hip welt pockets. Elastic hem. Zip-up front.",
    price: "₹ 3,990.00",
    category: "Join Life",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/6085/312/501/2/w/750/6085312501_1_1_1.jpg?ts=1654069449794",
    productName: "FAUX SUEDE JACKET",
    desc: "Collared jacket with long sleeves and buttoned cuffs. Featuring chest patch pockets with flaps, welt hip pockets and front zip fastening.",
    price: "₹ 5,990.00",
    category: "Join Life",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1538/404/500/2/w/750/1538404500_1_1_1.jpg?ts=1648032646381",
    productName: "BANDANNA PRINT JACKET",
    desc: "Collared jacket with lightly quilted interior. Long sleeves with buttoned cuffs. Hip welt pockets. Zip-up front.",
    price: "₹ 4,990.00",
    category: "Join Life",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/8062/433/800/2/w/750/8062433800_1_1_1.jpg?ts=1652864342079",
    productName: "ASYMMETRIC DENIM OVERSHIRT",
    desc: "Relaxed-fit collared overshirt featuring long sleeves with buttoned cuffs. Patch pockets with flaps on the chest. Faded-effect. Asymmetric hem with irregular trims at the back. Button-up front.",
    price: "₹ 4,990.00",
    category: "Join Life",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/8288/631/800/2/w/750/8288631800_1_1_1.jpg?ts=1641307227467",
    productName: "OVERSIZE TRENCH COAT",
    desc: "Loose-fitting trench coat with a notched lapel collar. Featuring long sleeves, a belt in the same fabric at the waist, hip welt pockets, a central back vent and double-breasted button fastening.",
    price: "₹ 7,990.00",
    category: "Join Life",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0840/406/401/2/w/750/0840406401_6_1_1.jpg?ts=1641229861722",
    productName: "RIPPED TAPERED JEANS",
    desc: "Tapered fit jeans featuring a five-pocket design and faded and ripped detail on the legs. Uneven hems. Zip fly and top button fastening.",
    price: "₹ 1,990.00",
    category: "Join Life",
    quantity: "1",
  },

  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0840/477/800/2/w/750/0840477800_1_1_1.jpg?ts=1644568513376",
    productName: "RIPPED SLIM-FIT JEANS",
    desc: "Slim-fit jeans with a five-pocket design. Faded and ripped effect on the legs. Cropped length. Button fly.",
    price: "₹ 4,990.00",
    category: "Join Life",
    quantity: "1",
  },

  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/6688/406/800/2/w/750/6688406800_6_1_1.jpg?ts=1646319963150",
    productName: "RIPPED JEANS WITH TOPSTITCHING",
    desc: "Faded skinny jeans with a five-pocket design. Ripped detail with topstitching on the legs. Zip fly and top button fastening.",
    price: "₹ 4,990.00",
    category: "Join Life",
    quantity: "1",
  },

  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5575/425/427/2/w/750/5575425427_6_1_1.jpg?ts=1636705905399",
    productName: "SKINNY FIT JEANS",
    desc: "Faded-effect skinny jeans with a five-pocket design. Front zip fly and top button fastening.",
    price: "₹ 2,490.00",
    category: "Join Life",
    quantity: "1",
  },

  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5584/304/250/2/w/750/5584304250_1_1_1.jpg?ts=1652177968429",
    productName: "BASKETBALL TRAINING T-SHIRT",
    desc: "Training T-shirt made of textured knit fabric with an all-over stretch.",
    price: "₹ 1,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5584/304/800/2/w/750/5584304800_1_1_1.jpg?ts=1652177969173",
    productName: "BASKETBALL TRAINING T-SHIRT",
    desc: "Training T-shirt made of textured knit fabric with an all-over stretch.",
    price: "₹ 1,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1368/301/250/2/w/750/1368301250_1_1_1.jpg?ts=1651484528087",
    productName: "TOP LAYER TOP",
    desc: "Top made of lightweight, flexible and comfortable technical fabric.",
    price: "₹ 2,890.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2966/301/401/2/w/750/2966301401_1_1_1.jpg?ts=1651484527390",
    productName: "STRAPPY CYCLING CULOTTES",
    desc: "Culottes made of a fabric with high elasticity.",
    price: "₹ 6,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5643/309/800/2/w/750/5643309800_1_1_1.jpg?ts=1649860731627",
    productName: "FADED-EFFECT T-SHIRT",
    desc: "T-shirt made in soft and lightweight fabric.",
    price: "₹ 1,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0381/303/800/2/w/750/0381303800_1_1_1.jpg?ts=1649858087331",
    productName: "YOGA PRINT T-SHIRT",
    desc: "Stretch cotton T-shirt featuring a round neck, short sleeves and contrast print on the front.",
    price: "₹ 1,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5320/307/800/2/w/750/5320307800_1_1_1.jpg?ts=1643982265289",
    productName: "TEXTURED WORKOUT T-SHIRT",
    desc: "Training T-shirt made of lightweight technical fabric with a textured weave. Featuring a round neckline and short sleeves.",
    price: "₹ 1,890.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2651/400/401/2/w/750/2651400401_1_1_1.jpg?ts=1646051168646",
    productName: "TEXTURED T-SHIRT",
    desc: "Training top made of technical fabric with a highly elastic texture.",
    price: "₹ 2,790.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/0761/343/030/2/w/750/0761343030_1_1_1.jpg?ts=1646051676650",
    productName: "COLOUR BLOCK HOODED JACKET",
    desc: "Jacket made of technical fabric with a napped finish on the interior. Long sleeves. Chest pocket with thermo-sealed zip fastening. Front hip pockets. Asymmetric hem with extra length at the back. Reflective logo detail. Zip-up front with auto-lock pull tab.",
    price: "₹ 3,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5644/305/800/2/w/750/5644305800_1_1_1.jpg?ts=1643982390363",
    productName: "MOUNT FUJI PRINT HOODIE",
    desc: "Cotton hoodie with an adjustable hood and long sleeves. Featuring contrast prints on the front and back. Ribbed trims.",
    price: "₹ 2,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5584/305/250/2/w/750/5584305250_1_1_1.jpg?ts=1652177982846",
    productName: "BASKETBALL TRAINING SHORTS",
    desc: "Training shorts made of textured knit fabric with all-over elastic.",
    price: "₹ 2,590.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5320/208/088/2/w/750/5320208088_1_1_1.jpg?ts=1646051633936",
    productName: "COLOUR BLOCK WINDBREAKER",
    desc: "Jacket made of lightweight technical fabric. Ergonomic design that adapts to movement. Designed to practice any sport outdoors.",
    price: "₹ 6,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2651/404/800/2/w/750/2651404800_1_1_1.jpg?ts=1646052021867",
    productName: "TECHNICAL HOODED JACKET",
    desc: "Jacket made of technical fabric with a napped finish on the interior. Long sleeves. Hip pockets. Asymmetric hem with extra length at the back. Reflective logo detail. Zip-up front with auto-lock pull tab.",
    price: "₹ 5,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1591/401/800/2/w/750/1591401800_1_1_1.jpg?ts=1646052345180",
    productName: "COMBINED QUILTED GILET",
    desc: "Lightweight puffer gilet made of a combination of stretchy and breathable technical fabrics. Designed for outdoor workouts.",
    price: "₹ 4,590.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1246/306/250/2/w/750/1246306250_6_2_1.jpg?ts=1653304531340",
    productName: "TRAINING TOWEL",
    desc: "Towel made of cotton fabric.",
    price: "₹ 1,590.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1246/306/500/2/w/750/1246306500_2_1_1.jpg?ts=1652177969938",
    productName: "TRAINING TOWEL",
    desc: "Towel made of cotton fabric.",
    price: "₹ 1,590.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2956/300/515/2/w/750/2956300515_6_1_1.jpg?ts=1643817474324",
    productName: "1L / 34 OZ NALGENE BOTTLE",
    desc: "Wide-rim bottle that allows you to easily introduce ice cubes and clean it. Made of extremely shock-resistant material.",
    price: "₹ 2,590.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/3265/301/800/2/w/750/3265301800_6_1_1.jpg?ts=1651233654775",
    productName: "CYCLING TRAINING SOCKS",
    desc: "Short socks made of seamless mesh.",
    price: "₹ 990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/2/p/1281/301/555/2/w/750/1281301555_6_3_1.jpg?ts=1632826159081",
    productName: "2-PACK OF BOXERS",
    desc: "Pack of two pairs of boxers with an elastic waistband.",
    price: "₹ 1,790.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/2/p/2747/300/800/2/w/750/2747300800_6_4_1.jpg?ts=1632826174101",
    productName: "PREMIUM GPS COROS PACE 2 SPORTS WATCH",
    desc: "Lightweight, with many functions including in-race power estimate, training plans for various platforms and a triathlon profile.",
    price: "₹ 19,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/2/p/2330/920/001/2/w/750/2330920001_6_1_1.jpg?ts=1652784673766",
    productName: "SPUMEFOAM TECHNOLOGY ATHLETICZ RUNNING TRAINERS",
    desc: "Running trainers. Designed for running thanks to spumefoam technology that guarantees lightness and comfort. Breathable technical fabric upper with rubberised details. Six-eyelet facing. Sole in a combination of ombré colours. Non-slip soles, designed to give stability and balance.",
    price: "₹ 5,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2380/820/040/2/w/750/2380820040_6_1_1.jpg?ts=1652787034941",
    productName: "JOMA® RUNNING SNEAKERS",
    desc: "Joma® brand running sneakers from the Zara Athletics collection. Five-eyelet facing. Combination of materials and monochrome fabrics. Heel pull tab with number detail: ZARA letters are written with numbers that match each letter in the Latin alphabet (26,1,18,1). The lightweight sole has special technology for greater comfort: it is breathable, designed to absorb impact and designed to have better stability during exercise.",
    price: "₹ 7,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/2/p/2382/820/009/2/w/750/2382820009_6_1_1.jpg?ts=1632843068238",
    productName: "JOMA® RUNNING SNEAKERS",
    desc: "Joma® brand running sneakers from the Zara Athletics collection. Seven-eyelet facing. Pull tab on the heel. The lightweight sole has special technology for improved comfort: it is breathable, designed to absorb impact and designed to have better stability during exercise.",
    price: "₹ 7,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/2381/820/032/2/w/750/2381820032_1_1_1.jpg?ts=1632939055001",
    productName: "JOMA® RUNNING SNEAKERS",
    desc: "Joma® brand running sneakers from the Zara Athletics collection. Knit fabric. Seven-eyelet facing. Pull tab on the tongue and heel. The lightweight sole has special technology for improved comfort: it is breathable, designed to absorb impact and designed to have better stability during exercise.",
    price: "₹ 7,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2350/820/203/2/w/750/2350820203_6_1_1.jpg?ts=1652785424663",
    productName: "RUNNING SPUMEFOAM TECHNOLOGY SNEAKERS",
    desc: "Running sneakers with a spumefoam sole, a technology that guarantees lightness and comfort. Featuring a breathable technical fabric upper with rubberised details, a five-eyelet facing and non-slip soles designed to give stability and balance.",
    price: "₹ 5,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2350/820/008/2/w/750/2350820008_6_1_1.jpg?ts=1652784787768",
    productName: "RUNNING SPUMEFOAM TECHNOLOGY SNEAKERS",
    desc: "Running sneakers with a spumefoam sole, a technology that guarantees lightness and comfort. Featuring a breathable technical fabric upper with rubberised details, a five-eyelet facing and non-slip soles designed to give stability and balance.",
    price: "₹ 5,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/2730/820/040/2/w/750/2730820040_1_1_1.jpg?ts=1632938751815",
    productName: "SPUMEFOAM SLIDE SANDALS",
    desc: "Single-piece slide sandals with our new spumefoam technology to guarantee maximum lightness and comfort. Black non-slip track soles. Sandals that give comfort and rest after exercise.",
    price: "₹ 2,290.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5320/312/800/2/w/750/5320312800_1_1_1.jpg?ts=1646738224961",
    productName: "TRAINING SHORTS",
    desc: "Training shorts made of technical fabric with elastic in every direction. Designed for all types of training.",
    price: "₹ 2,890.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2966/302/401/2/w/750/2966302401_1_1_1.jpg?ts=1651237104910",
    productName: "CYCLING TRAINING TOP",
    desc: "Top made of lightweight technical fabric with an open texture for better breathability.",
    price: "₹ 2,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2966/302/800/2/w/750/2966302800_1_1_1.jpg?ts=1651237103008",
    productName: "CYCLING TRAINING TOP",
    desc: "Top made of lightweight technical fabric with an open texture for better breathability.",
    price: "₹ 2,990.00",
    category: "Zara Athleticz",
    quantity: "1",
  },
];

// storing the data in local storage

localStorage.setItem("mensDataArr", JSON.stringify(mensData));
var mensArr = JSON.parse(localStorage.getItem("mensDataArr"));
// console.log(mensArr);

document.querySelector(".newProd").addEventListener("click", newData);
function newData() {
  var newDataArr = mensArr.filter(function (el) {
    return el.category == "New";
  });
  window.location.href = "new.html";
  localStorage.setItem("NewData", JSON.stringify(newDataArr));
}

document.querySelector(".suitsProd").addEventListener("click", suitsData);
function suitsData() {
  var suitsDataArr = mensArr.filter(function (el) {
    return el.category == "Suits";
  });
  window.location.href = "suits.html";
  localStorage.setItem("SuitsData", JSON.stringify(suitsDataArr));
}

document.querySelector(".joinLifeProd").addEventListener("click", joinLifeData);
function joinLifeData() {
  var joinLifeDataArr = mensArr.filter(function (el) {
    return el.category == "Join Life";
  });
  window.location.href = "joinLife.html";
  localStorage.setItem("JoinLifeData", JSON.stringify(joinLifeDataArr));
}

document
  .querySelector(".zaraAthleticzProd")
  .addEventListener("click", zaraAthleticzData);
function zaraAthleticzData() {
  var zaraAthleticzDataArr = mensArr.filter(function (el) {
    return el.category == "Zara Athleticz";
  });
  window.location.href = "zaraAthletic.html";
  localStorage.setItem(
    "ZaraAthleticzData",
    JSON.stringify(zaraAthleticzDataArr)
  );
}

// displaying womens data

womensData = [
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4786/135/620/2/w/750/4786135620_15_2_1.jpg?ts=1650627295431",
    productName: "PRINTED MINI DRESS",
    desc: "Short collared dress with long sleeves and elastic trims. Contrast belt detail. Ruffled hem. Fastens at the front with buttons.",
    price: "₹ 2,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/6369/910/001/2/w/750/6369910001_6_1_1.jpg?ts=1650965790612",
    productName: "RECTANGULAR TOTE BAG",
    desc: "Rectangular tote bag with a textured exterior. Inside pocket. Shoulder straps. Zip closure.",
    price: "₹ 2,890.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/0962/348/600/2/w/750/0962348600_2_1_1.jpg?ts=1651073514795",
    productName: "BASIC T-SHIRT",
    desc: "T-shirt with a V-neckline and short sleeves.",
    price: "₹ 690.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/0858/019/420/2/w/750/0858019420_1_1_1.jpg?ts=1650383882673",
    productName: "OVERSIZE COTTON T-SHIRT",
    desc: "Loose-fitting T-shirt made of 100% cotton. Round neck, short sleeves and side vents on the asymmetric hem.",
    price: "₹ 990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/6646/910/040/2/w/750/6646910040_1_1_1.jpg?ts=1651232950966",
    productName: "CITY BAG WITH METAL BUCKLE",
    desc: "City bag with an animal print. Metal buckle detail on the front. Inside pocket. Handle and crossbody strap. Flap with magnetic clasp closure.",
    price: "₹ 2,590.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/7969/046/630/2/w/750/7969046630_1_1_1.jpg?ts=1654186186011",
    productName: "SATIN SHIRT",
    desc: "Flowing long sleeve shirt featuring a lapel collar, V-neckline and button-up front.",
    price: "₹ 1,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2298/114/630/2/w/750/2298114630_2_1_1.jpg?ts=1649231432187",
    productName: "DRAPED ASYMMETRIC TOP",
    desc: "Top with an asymmetric neckline, short sleeves and side pleats.",
    price: "₹ 1,890.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3278/575/251/2/w/750/3278575251_2_3_1.jpg?ts=1651235969478",
    productName: "SHIRT DRESS WITH GATHERING",
    desc: "Collared dress made of a linen blend. Johnny collar and long sleeves with buttoned tabs. Front patch pocket. Front gathered detail. Fastens at the front with buttons.",
    price: "₹ 2,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2762/500/711/2/w/750/2762500711_2_1_1.jpg?ts=1650290333601",
    productName: "SHORT SLEEVE LINEN SHIRT",
    desc: "Collared short sleeve shirt with a V-neck. Front patch pockets. Asymmetric hem. Button-up front..",
    price: "₹ 1,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/9929/120/250/2/w/750/9929120250_2_1_1.jpg?ts=1646992312759",
    productName: "STRAIGHT TROUSERS WITH METAL BUTTONS",
    desc: "High-waist trousers with an elastic waistband at the back. Front pockets with decorative golden buttons. False welt pockets at the back. Straight-leg design.",
    price: "₹ 2,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4043/075/526/2/w/750/4043075526_1_1_1.jpg?ts=1647362463334",
    productName: "LINEN BLEND SHIRT WITH POCKET",
    desc: "Collared shirt made of a linen blend. Featuring long cuffed sleeves, chest patch pocket and an asymmetric hem. Button-up front.",
    price: "₹ 2,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4174/326/800/2/w/750/4174326800_2_1_1.jpg?ts=1650626371402",
    productName: "DRESS WITH GATHERING AND KNOT",
    desc: "Off-the-shoulder V-neck dress with short sleeves. Knot detail and opening on the chest.",
    price: "₹ 1,890.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/7969/046/800/2/w/750/7969046800_2_1_1.jpg?ts=1644423511729",
    productName: "SATIN SHIRT",
    desc: "Flowing long sleeve shirt featuring a lapel collar, V-neckline and button-up front.",
    price: "₹ 1,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/6149/910/111/2/w/750/6149910111_6_1_1.jpg?ts=1651840624466",
    productName: "PLAITED TOTE BAG",
    desc: "Tote bag with woven exterior. Shoulder straps with topstitching detail. Clasp fastening.",
    price: "₹ 2,890.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/7969/046/446/2/w/750/7969046446_1_1_1.jpg?ts=1644423515323",
    productName: "SATIN SHIRT",
    desc: "Flowing long sleeve shirt featuring a lapel collar, V-neckline and button-up front.",
    price: "₹ 1,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/7484/062/420/2/w/750/7484062420_2_1_1.jpg?ts=1645625849437",
    productName: "BLOUSE WITH A FLOWING NECKLINE",
    desc: "Sleeveless blouse with a flowing neckline.",
    price: "₹ 1,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3450/708/506/2/w/750/3450708506_2_3_1.jpg?ts=1650621312347",
    productName: "WIDE-LEG TROUSERS WITH SPLIT HEMS",
    desc: "High-waist trousers made of a linen and cotton blend. Elastic waist at the back. Front pockets and rear patch pockets. Wide-leg design with split hems. Front zip fly, inside button and metal hook fastening.",
    price: "₹ 2,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5862/052/407/2/w/750/5862052407_1_1_1.jpg?ts=1643368202144",
    productName: "Z1975 RIPPED-HEM MOM JEANS",
    desc: "Faded-effect high-waist jeans with a five-pocket design. Ripped hems. Metal button fly.",
    price: "₹ 2,890.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/3329/910/098/2/w/750/3329910098_6_1_1.jpg?ts=1643044372807",
    productName: "VINYL SANDALS WITH METHACRYLATE HEELS",
    desc: "Transparent heeled sandals. Vinyl strap on the front and square vamp. Green clear block heel. Square toe.",
    price: "₹ 2,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/7200/025/330/2/w/750/7200025330_2_1_1.jpg?ts=1643201500824",
    productName: "PRINTED BLOUSE",
    desc: "Blouse featuring a ruffled neckline and bow. V-neckline and long sleeves. Smocked trims.",
    price: "₹ 2,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2949/331/802/2/w/750/2949331802_2_3_1.jpg?ts=1647261546910",
    productName: "SATIN DRESS WITH CUT-OUT DETAIL",
    desc: "Midi dress with a V-neckline and thin adjustable straps. Vent detail and elastic on the back.",
    price: "₹ 3,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/2620/010/111/2/w/750/2620010111_6_2_1.jpg?ts=1653493414142",
    productName: "FLAT SANDALS WITH RHINESTONES",
    desc: "Flat sandals. Thin straps with rhinestone details. Square toe.",
    price: "₹ 3,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3683/673/624/2/w/750/3683673624_1_1_1.jpg?ts=1652273105271",
    productName: "SATIN CUT-OUT JUMPSUIT",
    desc: "Wide-leg jumpsuit with a straight neckline and gathered front. Featuring thin straps with buttons, an opening at the waist and invisible back zip fastening.",
    price: "₹ 5,590.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/8197/042/620/2/w/750/8197042620_2_1_1.jpg?ts=1648726237363",
    productName: "BOOT-CUT JEANS",
    desc: "Mid-rise jeans with five pockets. Wide-leg design. Frayed and ripped hems. Front zip fly and metallic button fastening.",
    price: "₹ 2,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1355/910/092/2/w/750/1355910092_6_1_1.jpg?ts=1644929960705",
    productName: "HIGH-HEEL PLATFORM SANDALS",
    desc: "Heeled sandals with platform. Block heel. Square toe. Buckled crossover ankle strap fastening.",
    price: "₹ 4,990.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/6179/910/001/2/w/750/6179910001_1_1_1.jpg?ts=1648127144750",
    productName: "QUILTED CROSSBODY BAG",
    desc: "Crossbody bag with a quilted exterior. Lined interior with pocket. Metal chain strap. Magnetic clasp closure.",
    price: "₹ 2,590.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/1329/910/098/3/w/750/1329910098_2_1_1.jpg?ts=1654085275085",
    productName: "VINYL HIGH HEEL SANDALS",
    desc: "High-heel sandals with vinyl strap on the front. Buckled ankle strap fastening.",
    price: "₹ 3,590.00",
    category: "Bestseller",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/3859/112/104/2/w/750/3859112104_2_1_1.jpg?ts=1654866382236",
    productName: "STRIPED KNIT MINI DRESS",
    desc: "Sleeveless dress with a round neck.",
    price: "₹ 2,590.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/4688/207/050/17/w/750/4688207050_2_1_1.jpg?ts=1654690451259",
    productName: "SATIN TIE-DYE DRESS",
    desc: "V-neck dress with thin straps that cross at the back. Adjustable gathered detail on the side with drawstrings.",
    price: "₹ 2,890.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/4688/201/050/17/w/750/4688201050_2_1_1.jpg?ts=1654690451650",
    productName: "SATIN DRESS WITH CUT-OUT DETAIL",
    desc: "V-neck dress with thin straps that adjust at the back. Featuring an opening at the chest, contrast inner lining and invisible side zip fastening.",
    price: "₹ 2,890.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1822/053/712/2/w/750/1822053712_2_1_1.jpg?ts=1647952300386",
    productName: "OPEN KNIT DRESS",
    desc: "Short V-neck dress with thin straps.",
    price: "₹ 2,590.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3991/029/093/2/w/750/3991029093_1_1_1.jpg?ts=1647952301017",
    productName: "KNIT DRESS WITH FRINGING",
    desc: "Knit dress with a straight-cut neckline and straps. Contrast fabric on the chest. Fringed hem.",
    price: "₹ 3,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2142/105/406/2/w/750/2142105406_1_1_1.jpg?ts=1654760355552",
    productName: "METALLIC THREAD KNIT DRESS",
    desc: "Midi dress with a straight neckline and thin straps. Open back. Flared hem.",
    price: "₹ 2,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2308/102/330/2/w/750/2308102330_2_1_1.jpg?ts=1654013476358",
    productName: "LONG OPEN-KNIT DRESS - LIMITED EDITION",
    desc: "V-neck and plunging back dress with wide straps and a flared hem.",
    price: "₹ 4,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/4437/104/251/12/w/750/4437104251_2_3_1.jpg?ts=1654760861075",
    productName: "SHORT SATIN DRESS",
    desc: "Short satin dress featuring a halter neck with tie detail. Maxi flower detail in the same fabric. Adjustable strap at the back made of the same fabric.",
    price: "₹ 4,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/7805/887/712/3/w/750/7805887712_1_1_1.jpg?ts=1654697333547",
    productName: "FLORAL CAMISOLE DRESS",
    desc: "Short V-neck satin dress with thin adjustable straps with ties. Removable multiway flower detail in matching fabric. Invisible back zip fastening.",
    price: "₹ 2,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/7682/845/412/3/w/750/7682845412_2_1_1.jpg?ts=1654850347492",
    productName: "SATIN EFFECT WRAP DRESS",
    desc: "Collared mini dress with a V-neckline and long turn-up sleeves. Surplice detail on the front with pleats. Fastens at the front with matching covered buttons.",
    price: "₹ 2,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/7744/431/403/2/w/750/7744431403_1_1_1.jpg?ts=1654791263077",
    productName: "SATIN MIDI DRESS",
    desc: "Satin midi dress with a surplice neckline. Featuring pleats, a back opening, button fastening at the neck and invisible back zip fastening.",
    price: "₹ 5,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2702/451/251/2/w/750/2702451251_2_2_1.jpg?ts=1654790747260",
    productName: "DRAPED SATIN BLAZER DRESS",
    desc: "Satiny V-neck blazer dress with long sleeves and shoulder pads. Front flap pockets. Pleated detail. Asymmetric hem. Fastens at the front with hidden buttons.",
    price: "₹ 7,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2492/161/330/2/w/750/2492161330_1_1_1.jpg?ts=1649763605104",
    productName: "PRINTED SHIRT DRESS",
    desc: "Collared dress featuring a V-neckline and sleeves falling below the elbow. Elastic waistband. Matching belt. Button-up front.",
    price: "₹ 4,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2157/049/412/2/w/750/2157049412_2_1_1.jpg?ts=1650290319741",
    productName: "EMBROIDERED DRESS WITH BELT",
    desc: "Dress with a slot collar and sleeves falling below the elbow. Belt with tassels and shell appliqués. Buttoned front.",
    price: "₹ 4,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/7689/452/420/2/w/750/7689452420_2_1_1.jpg?ts=1652372251428",
    productName: "WRAP BLAZER DRESS",
    desc: "Short blazer dress with a lapel collar and long sleeves with shoulder pads. Featuring side pleats and wrap-style tie fastening at the front.",
    price: "₹ 5,590.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2342/636/687/2/w/750/2342636687_1_1_1.jpg?ts=1643968216499",
    productName: "DRAPED DRESS",
    desc: "V-neck dress with long sleeves and shoulder pads. Draped fabric detail with adjustable drawstrings on the front of the hem. Invisible side zip fastening.",
    price: "₹ 3,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2887/325/250/2/w/750/2887325250_2_1_1.jpg?ts=1648112376673",
    productName: "LINEN BLEND DRESS",
    desc: "Dress made of a linen blend. Square neckline and short puff sleeves. Crossover straps at the back with adjustable ties. Waistband at the back with elastic and invisible zip fastening.",
    price: "₹ 2,890.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/9492/331/250/2/w/750/9492331250_1_1_1.jpg?ts=1642756931567",
    productName: "SHORT SATIN DRESS",
    desc: "Short collared dress with a surplice V-neckline. Long cuffed sleeves. Gathered detail.",
    price: "₹ 2,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/6895/051/500/2/w/750/6895051500_2_1_1.jpg?ts=1649174153816",
    productName: "EMBROIDERED MIDI DRESS",
    desc: "Collared midi dress with long cuffed sleeves and tied belt in matching fabric. Contrast embroidery detail. Ruffled hem. Buttons down the front.",
    price: "₹ 6,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5580/017/420/2/w/750/5580017420_1_1_1.jpg?ts=1648813436958",
    productName: "SHORT RUFFLED DRESS",
    desc: "Short dress with a straight-cut neckline and exposed shoulders. Pleated detailing on the front and ruffled trims on the waist. Invisible back zip fastening.",
    price: "₹ 2,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4437/081/251/2/w/750/4437081251_1_1_1.jpg?ts=1650627295338",
    productName: "RUSTIC TUNIC DRESS",
    desc: "Sleeveless V-neck tunic dress featuring a frayed hem with side vents and a buttoned opening at the back.",
    price: "₹ 5,590.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4437/051/250/2/w/750/4437051250_1_1_1.jpg?ts=1650627295879",
    productName: "EMBROIDERED SHIRT DRESS",
    desc: "Collared midi dress with long sleeves. Tied belt in the same fabric. Matching cutwork embroidery. Lining. Tassel trims. Front fastening with metal buttons.",
    price: "₹ 6,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3428/811/250/2/w/750/3428811250_1_1_1.jpg?ts=1650627296267",
    productName: "TEXTURED WAISTCOAT DRESS",
    desc: "Collared waistcoat dress with a V-neckline. Front pockets with flaps. Matching lining. Double-breasted rhinestone button fastening.",
    price: "₹ 7,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3548/238/170/2/w/750/3548238170_2_10_1.jpg?ts=1650873163078",
    productName: "PRINTED DRESS WITH CUT-OUT DETAIL",
    desc: "Round neck midi dress with puff sleeves falling below the elbow. Featuring an opening at the waist and back with crossed elastic straps.",
    price: "₹ 5,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2298/123/251/2/w/750/2298123251_1_1_1.jpg?ts=1649845725755",
    productName: "SATIN SURPLICE JUMPSUIT",
    desc: "Wide-leg jumpsuit with a surplice neckline and thin straps. Double thin straps at the back with a contrast ring appliqué. Invisible side zip fastening.",
    price: "₹ 4,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2332/583/800/2/w/750/2332583800_2_2_1.jpg?ts=1641385583833",
    productName: "SHORT PLUMETIS DRESS",
    desc: "Long sleeve V-neck dress with ruffles. Featuring an elastic waist, lining and a button-up front.",
    price: "₹ 2,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2140/027/330/2/w/750/2140027330_1_1_1.jpg?ts=1641899388472",
    productName: "SHORT PRINTED DRESS",
    desc: "Short dress with a V-neckline and long sleeves. Pleated details on the front and metallic appliqués. Invisible back zip fastening.",
    price: "₹ 4,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4174/902/400/2/w/750/4174902400_1_1_1.jpg?ts=1651595118864",
    productName: "HALTER MIDI DRESS",
    desc: "Sleeveless midi dress with a halter neck.",
    price: "₹ 1,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2142/121/303/2/w/750/2142121303_1_1_1.jpg?ts=1651139789707",
    productName: "RIBBED KNIT DRESS WITH METALLIC THREAD",
    desc: "Sleeveless pleated midi dress with a round neckline.",
    price: "₹ 3,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/3653/005/330/3/w/750/3653005330_1_1_1.jpg?ts=1653299603560",
    productName: "CROCHET KNIT MINI DRESS - LIMITED EDITION",
    desc: "Dress with a straight neckline and wide straps.",
    price: "₹ 5,990.00",
    category: "Dresses",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3519/230/800/12/w/750/3519230800_1_1_1.jpg?ts=1651674990807",
    productName: "BASIC CROPPED KNIT TOP",
    desc: "Sleeveless top with a round neckline and ribbed trims.",
    price: "₹ 990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3519/230/630/12/w/750/3519230630_1_1_1.jpg?ts=1651674900809",
    productName: "BASIC CROPPED KNIT TOP",
    desc: "Sleeveless top with a round neckline and ribbed trims.",
    price: "₹ 990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3471/015/800/12/w/750/3471015800_2_1_1.jpg?ts=1650454324848",
    productName: "BASIC KNIT RIBBED TOP",
    desc: "Sleeveless round neck top.",
    price: "₹ 1,490.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3471/013/800/3/w/750/3471013800_2_1_1.jpg?ts=1649865478667",
    productName: "BASIC EXTRA-FINE KNIT TOP",
    desc: "Sleeveless top with a round neckline.",
    price: "₹ 1,490.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3471/115/527/2/w/750/3471115527_1_1_1.jpg?ts=1645635827972",
    productName: "BASIC KNIT RIBBED TOP",
    desc: "Sleeveless round neck top.",
    price: "₹ 1,490.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1822/049/064/2/w/750/1822049064_2_1_1.jpg?ts=1644832056374",
    productName: "GEOMETRIC JACQUARD KNIT CARDIGAN",
    desc: "Open cardigan with a round neckline and long sleeves. Thin tied fastening.",
    price: "₹ 1,890.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3433/002/800/2/w/750/3433002800_1_1_1.jpg?ts=1644570219735",
    productName: "KNIT HIGH NECK DRESS",
    desc: "Midi dress with a high neck and long sleeves. Flared hem.",
    price: "₹ 2,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/6771/027/044/2/w/750/6771027044_1_1_1.jpg?ts=1644832182676",
    productName: "CARDIGAN WITH GOLD-TONED BUTTONS",
    desc: "V-neck cardigan with long sleeves. Featuring front patch pockets and a gold-toned button-up front.",
    price: "₹ 3,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/9598/225/737/12/w/750/9598225737_1_1_1.jpg?ts=1638536084326",
    productName: "KNIT CULOTTES",
    desc: "High-waist trousers with an elastic waistband and a wide-leg design.",
    price: "₹ 2,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5755/009/400/2/w/750/5755009400_1_1_1.jpg?ts=1638284164216",
    productName: "CROPPED CARDIGAN",
    desc: "V-neck cardigan with long sleeves and front button fastening.",
    price: "₹ 1,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3433/010/104/3/w/750/3433010104_1_1_1.jpg?ts=1637236024178",
    productName: "BASIC HIGH NECK KNIT SWEATER",
    desc: "Long sleeve knit sweater with a high neck.",
    price: "₹ 1,890.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5536/010/600/2/w/750/5536010600_1_1_1.jpg?ts=1638355321283",
    productName: "KNIT DROP-SHOULDER SWEATER",
    desc: "Round neck sweater with long cuffed sleeves.",
    price: "₹ 2,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4938/001/500/2/w/750/4938001500_1_1_1.jpg?ts=1636706412033",
    productName: "CUT-OUT KNIT TOP",
    desc: "High neck top with a surplice neckline and long sleeves.",
    price: "₹ 2,590.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/3519/230/800/2/w/750/3519230800_1_1_1.jpg?ts=1623771148514",
    productName: "BASIC CROPPED KNIT TOP",
    desc: "Sleeveless top with a round neckline and ribbed trims.",
    price: "₹ 990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/6873/153/800/2/w/750/6873153800_1_1_1.jpg?ts=1638520630794",
    productName: "FITTED KNIT DRESS WITH CUT-OUT DETAIL",
    desc: "Dress with a high neck, long puff sleeves and cut-out side details on the waist.",
    price: "₹ 4,590.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5755/006/630/2/w/750/5755006630_1_1_1.jpg?ts=1638284348460",
    productName: "KNIT SCARF COAT",
    desc: "Coat with a wide scarf-style collar and long turn-up sleeves.",
    price: "₹ 5,590.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4331/004/050/2/w/750/4331004050_1_1_1.jpg?ts=1637311692991",
    productName: "OVERSIZE POLO SWEATER WITH STRIPES",
    desc: "Knit sweater with a Johnny collar and long sleeves.",
    price: "₹ 3,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/6771/010/605/2/w/750/6771010605_1_1_1.jpg?ts=1639385392080",
    productName: "CASHMERE SWEATSHIRT SWEATER",
    desc: "Long sleeve knit sweatshirt-style sweater with a round neckline and ribbed trims.",
    price: "₹ 9,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2488/115/809/2/w/750/2488115809_1_1_1.jpg?ts=1638533221623",
    productName: "KNIT CARDIGAN WITH LARGE BUTTONS",
    desc: "V-neck cardigan with long sleeves and front button fastening.",
    price: "₹ 2,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/9598/002/500/2/w/750/9598002500_1_1_1.jpg?ts=1637920497997",
    productName: "KNIT SWEATER WITH FAUX PEARLS",
    desc: "Sweater with a high neck and long sleeves. Matching faux pearl appliqués. Ribbed trims.",
    price: "₹ 2,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2893/003/800/2/w/750/2893003800_2_1_1.jpg?ts=1638363922607",
    productName: "WOOL KNIT SWEATER",
    desc: "Sweater made of 100% merino wool. Featuring a round neck and long sleeves.",
    price: "₹ 5,590.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2893/003/501/2/w/750/2893003501_2_1_1.jpg?ts=1638364214676",
    productName: "WOOL KNIT SWEATER",
    desc: "Sweater made of 100% merino wool. Featuring a round neck and long sleeves.",
    price: "₹ 5,590.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3859/132/802/2/w/750/3859132802_1_1_1.jpg?ts=1637931117626",
    productName: "KNIT JOGGERS",
    desc: "High-waist trousers with an elastic drawstring waistband. Front pockets. Cuffed hems.",
    price: "₹ 2,790.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1505/102/406/2/w/750/1505102406_1_1_1.jpg?ts=1639138565949",
    productName: "CASHMERE SWEATER",
    desc: "Sweater made of 100% cashmere. Featuring a high neck and long sleeves. Split hem.",
    price: "₹ 13,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2142/017/684/2/w/750/2142017684_1_1_1.jpg?ts=1639127891104",
    productName: "KNIT TOP WITH BACK OPENING",
    desc: "Knit top with a high neck and long sleeves. Tied opening detail at the back.",
    price: "₹ 2,590.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/3519/009/800/2/w/750/3519009800_1_1_1.jpg?ts=1639127891373",
    productName: "HIGH NECK KNIT SWEATER",
    desc: "Long sleeve sweater with a high neck.",
    price: "₹ 2,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/1/p/3519/101/800/2/w/750/3519101800_2_2_1.jpg?ts=1628245228137",
    productName: "KNIT TOP WITH CROSSED STRAPS",
    desc: "Round neck crop top with thin straps that cross at the front and back.",
    price: "₹ 1,590.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4369/003/800/2/w/750/4369003800_1_1_1.jpg?ts=1646822015317",
    productName: "FITTED KNIT CARDIGAN",
    desc: "Cardigan featuring a V-neckline and long sleeves with pleated shoulders. Front button fastening.",
    price: "₹ 2,590.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5802/003/050/2/w/750/5802003050_1_1_1.jpg?ts=1639414288891",
    productName: "KNIT CARDIGAN WITH GOLDEN BUTTONS",
    desc: "Round neck cardigan with long sleeves. Button-up front with golden buttons.",
    price: "₹ 2,990.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1750/004/500/2/w/750/1750004500_1_1_1.jpg?ts=1643898836280",
    productName: "ARGYLE KNIT CARDIGAN",
    desc: "Cardigan with round neckline, long sleeves and button-up fastening.",
    price: "₹ 2,590.00",
    category: "Knitwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/201/545/2/w/750/0167201545_1_1_1.jpg?ts=1654696959894",
    productName: "RIBBED SWIMSUIT",
    desc: "Swimsuit with removable cups, a plunging neckline and straps.",
    price: "₹ 2,890.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/201/712/2/w/750/0167201712_1_1_1.jpg?ts=1654696959886",
    productName: "RIBBED SWIMSUIT",
    desc: "Swimsuit with removable cups, a plunging neckline and straps.",
    price: "₹ 2,890.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/201/712/2/w/750/0167201712_2_1_1.jpg?ts=1654696960363",
    productName: "RIBBED SWIMSUIT",
    desc: "Swimsuit with removable cups, a plunging neckline and straps.",
    price: "₹ 2,890.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/214/800/2/w/750/0167214800_1_1_1.jpg?ts=1654696961246",
    productName: "CUT-OUT SWIMSUIT",
    desc: "Swimsuit with removable cups, a straight neckline and exposed shoulders. Cut-out details on the sides.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0219/009/330/2/w/750/0219009330_2_1_1.jpg?ts=1654696959800",
    productName: "PRINTED SWIMMING TRUNKS",
    desc: "Swimsuit with removable cups, a straight neckline and exposed shoulders. Opening detail at the back.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0219/008/832/2/w/750/0219008832_1_1_1.jpg?ts=1654696959478",
    productName: "ASYMMETRIC WOVEN SWIMSUIT",
    desc: "Swimsuit with removable cups and an asymmetric neckline. Woven detail in the same fabric.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/214/250/2/w/750/0167214250_1_1_1.jpg?ts=1654696959821",
    productName: "CUT-OUT SWIMSUIT",
    desc: "Swimsuit with removable cups, a straight neckline and exposed shoulders. Cut-out details on the sides.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0219/010/420/2/w/750/0219010420_1_1_1.jpg?ts=1654698089980",
    productName: "BRAIDED BIKINI TOP",
    desc: "Bikini top with removable cups, a V-neckline, braided tied detail at the neck and fastening at the back.",
    price: "₹ 1,890.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/7521/002/920/2/w/750/7521002920_15_1_1.jpg?ts=1654251999241",
    productName: "BEADED TUNIC DRESS",
    desc: "Round neck tunic dress with a V-neckline at the back and long sleeves. Featuring matching lining and embroidered and beaded detailing.",
    price: "₹ 16,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/210/250/2/w/750/0167210250_1_1_1.jpg?ts=1653316262712",
    productName: "HIGH-WAIST BIKINI BOTTOMS",
    desc: "High-waist bikini bottom.",
    price: "₹ 1,790.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2856/204/628/2/w/750/2856204628_1_1_1.jpg?ts=1653316260800",
    productName: "CORSET NECK SWIMSUIT",
    desc: "Strapless swimsuit with removable cups and a sweetheart neckline.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2856/204/800/2/w/750/2856204800_1_1_1.jpg?ts=1653316277007",
    productName: "CORSET NECK SWIMSUIT",
    desc: "Strapless swimsuit with removable cups and a sweetheart neckline.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2910/204/630/2/w/750/2910204630_1_1_1.jpg?ts=1653985261862",
    productName: "OTTOMAN SWIMSUIT",
    desc: "Swimsuit with removable cups, a straight neckline and straps.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/002/705/2/w/750/0167002705_1_1_1.jpg?ts=1653035016291",
    productName: "CURTAIN STRING BIKINI BOTTOMS",
    desc: "Bikini bottoms with adjustable side ties.",
    price: "₹ 1,790.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0219/006/717/2/w/750/0219006717_1_1_1.jpg?ts=1653035426123",
    productName: "HALTER SWIMSUIT",
    desc: "Halterneck swimsuit with removable cups, a tie at the neck and an opening at the chest.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2910/008/611/2/w/750/2910008611_1_1_1.jpg?ts=1648463152581",
    productName: "CUT-OUT SWIMSUIT",
    desc: "Swimsuit with removable cups, a V-neckline and double crossed straps at the back. Cut-out detail at the waist.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2910/205/500/2/w/750/2910205500_2_3_1.jpg?ts=1653985319723",
    productName: "OTTOMAN BIKINI TOP",
    desc: "Bikini top with removable cups. V-neckline and straps. Fastens with a metal hook at the back.",
    price: "₹ 1,890.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/001/707/2/w/750/0167001707_1_1_1.jpg?ts=1654007793908",
    productName: "INVERTED BIKINI TOP",
    desc: "Bikini top with removable multiway cups. Features a V-neckline and tied detail at the neck.",
    price: "₹ 1,890.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/002/707/2/w/750/0167002707_2_1_1.jpg?ts=1652958327919",
    productName: "CURTAIN STRING BIKINI BOTTOMS",
    desc: "Bikini bottoms with adjustable side ties.",
    price: "₹ 1,790.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/208/671/2/w/750/0167208671_1_1_1.jpg?ts=1652958327466",
    productName: "SWIMSUIT WITH MAXI RUFFLE",
    desc: "Swimsuit featuring a straight neckline, exposed shoulders and matching ruffle detail.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2910/002/800/2/w/750/2910002800_1_1_1.jpg?ts=1651746886883",
    productName: "MESH SWIMSUIT",
    desc: "Swimsuit made of mesh fabric with a round neck. Bandeau interior with matching removable cups. Buttoned opening at the back.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2910/012/700/2/w/750/2910012700_1_1_1.jpg?ts=1651824604791",
    productName: "MESH DRESS",
    desc: "Semi-sheer dress with round neckline and long sleevess",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0219/004/630/2/w/750/0219004630_1_1_1.jpg?ts=1653038591985",
    productName: "HIGH-WAIST BIKINI BOTTOMS",
    desc: "High-waist bikini bottoms with gathered details.",
    price: "₹ 1,790.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2856/203/505/2/w/750/2856203505_2_1_1.jpg?ts=1651746853563",
    productName: "KNOTTED SWIMSUIT",
    desc: "Swimsuit with removable cups. Adjustable and detachable strap around the neck. Knot detail on the chest.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2856/037/015/2/w/750/2856037015_2_1_1.jpg?ts=1652958308417",
    productName: "PRINTED BIKINI BOTTOM",
    desc: "Curtain string bikini bottoms.",
    price: "₹ 1,790.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2856/021/015/2/w/750/2856021015_1_1_1.jpg?ts=1652958308405",
    productName: "PRINTED BIKINI TOP",
    desc: "Bikini top with removable cups, a V-neckline, straps and tied detail at the waist.",
    price: "₹ 1,890.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/8372/084/711/2/w/750/8372084711_1_1_1.jpg?ts=1649419502652",
    productName: "LINEN TUNIC DRESS",
    desc: "Midi dress with a slot collar and sleeves falling below the elbow. Side in-seam pockets. Side vents. Buttoned front.",
    price: "₹ 3,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/002/707/23/w/750/0167002707_15_2_1.jpg?ts=1654013202881",
    productName: "CURTAIN STRING BIKINI BOTTOMS",
    desc: "Bikini bottoms with adjustable side ties.",
    price: "₹ 1,790.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/0167/001/250/2/w/750/0167001250_1_1_1.jpg?ts=1652958308017",
    productName: "INVERTED BIKINI TOP",
    desc: "Bikini top with removable multiway cups. Features a V-neckline and tied detail at the neck.",
    price: "₹ 1,890.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/2856/038/330/2/w/750/2856038330_1_1_1.jpg?ts=1652958308845",
    productName: "CUT-OUT PRINTED SWIMSUIT",
    desc: "Swimsuit with removable cups, a straight neckline with tied detail and thin straps. Cut-out detail on the front.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2856/033/800/2/w/750/2856033800_1_1_1.jpg?ts=1649241687518",
    productName: "FLORAL ASYMMETRIC SWIMSUIT",
    desc: "Swimsuit with removable cups, an asymmetric neckline and thin straps. Maxi floral detail on the front.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2910/017/250/2/w/750/2910017250_1_1_1.jpg?ts=1649241691147",
    productName: "SWIMSUIT WITH TIES AT THE BACK",
    desc: "Swimsuit with a round neck and adjustable thin straps which tie at the back.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2910/017/513/2/w/750/2910017513_2_1_1.jpg?ts=1649241691555",
    productName: "SWIMSUIT WITH TIES AT THE BACK",
    desc: "Swimsuit with a round neck and adjustable thin straps which tie at the back.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2856/023/630/17/w/750/2856023630_1_1_1.jpg?ts=1652882175443",
    productName: "CONTRAST SWIMSUIT",
    desc: "Swimsuit with a straight-cut neckline and exposed shoulders. Matching fabric. Opening detail on the side.",
    price: "₹ 2,990.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2910/018/717/2/w/750/2910018717_2_1_1.jpg?ts=1650553364238",
    productName: "HIGH-WAIST BIKINI BOTTOMS",
    desc: "High-waist bikini bottom.",
    price: "₹ 1,790.00",
    category: "Swimwear",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/2326/010/070/2/w/750/2326010070_6_1_1.jpg?ts=1654512485061",
    productName: "HIGH-HEEL LEATHER SANDALS WITH FRINGING",
    desc: "High-heel sandals with fringing. Thin straps. Square toe. Buckle fastening at the ankle.",
    price: "₹ 6,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/1324/010/050/2/w/750/1324010050_6_1_1.jpg?ts=1654588547511",
    productName: "HIGH-HEEL VINYL SANDALS WITH RHINESTONES",
    desc: "High-heel vinyl mule sandals. Braided strap with rhinestones. Square toe.",
    price: "₹ 5,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/3314/010/050/2/w/750/3314010050_6_1_1.jpg?ts=1653991289381",
    productName: "SATIN HIGH-HEEL SANDALS",
    desc: "Satin high-heel sandals with toe divider.",
    price: "₹ 2,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/3804/010/050/4/w/750/3804010050_6_1_1.jpg?ts=1654164518370",
    productName: "HIGH-HEEL VINYL SANDALS WITH RHINESTONES",
    desc: "High-heel sandals. Vinyl straps with rhinestone details. Square toe.",
    price: "₹ 3,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/3315/910/612/2/w/750/3315910612_6_1_1.jpg?ts=1654078150119",
    productName: "HIGH-HEEL PLATFORM SANDALS",
    desc: "High-heel platform sandals. Criss-cross straps on the front. Block heel.",
    price: "₹ 2,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/2329/910/091/23/w/750/2329910091_6_1_1.jpg?ts=1651665005901",
    productName: "LOW BLOCK-HEEL SANDALS",
    desc: "Sandals with a low block heel. Thin straps with animal print. Square toe.",
    price: "₹ 2,890.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/3344/910/001/2/w/750/3344910001_6_1_1.jpg?ts=1649842286548",
    productName: "HIGH-HEEL STRAPPY SANDALS",
    desc: "High-heel sandals. Thin straps. Square toe. Buckled ankle strap fastening.",
    price: "₹ 2,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/2343/910/092/2/w/750/2343910092_6_2_1.jpg?ts=1646230893735",
    productName: "VINYL SANDALS WITH CLEAR HEELS",
    desc: "Transparent heeled sandals. Vinyl straps on the front. Clear block heel.",
    price: "₹ 2,890.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/3329/910/098/2/w/750/3329910098_6_1_1.jpg?ts=1643044372807",
    productName: "VINYL SANDALS WITH METHACRYLATE HEELS",
    desc: "Transparent heeled sandals. Vinyl strap on the front and square vamp. Green clear block heel. Square toe.",
    price: "₹ 2,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/3330/010/091/2/w/750/3330010091_6_1_1.jpg?ts=1652861123929",
    productName: "HIGH-HEEL METALLIC SANDALS",
    desc: "High-heel metallic sandals with thin straps. Square toe. Buckle fastening at the ankle.",
    price: "₹ 2,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/1311/010/091/2/w/750/1311010091_6_2_1.jpg?ts=1652781841817",
    productName: "HIGH-HEEL PLATFORM SANDALS",
    desc: "High-heel metallic platform sandals. Criss-cross straps. Square toe. Buckled ankle strap fastening.",
    price: "₹ 4,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/3203/910/202/2/w/750/3203910202_6_1_1.jpg?ts=1648207035171",
    productName: "ANIMAL PRINT HEELED SHOES",
    desc: "High-heel shoes with an animal print. Buckled ankle strap fastening.",
    price: "₹ 3,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1355/810/040/2/w/750/1355810040_6_1_1.jpg?ts=1649153004108",
    productName: "LEATHER BLOCK HEEL SANDALS",
    desc: "Leather heeled sandals with interwoven straps. Lined block heel. Square toe and heel.",
    price: "₹ 4,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/1331/910/001/2/w/750/1331910001_6_1_1.jpg?ts=1651664580652",
    productName: "LEATHER HIGH-HEEL SANDALS",
    desc: "Leather high-heeled sandals with thin criss-cross staps. Tied closure with buckle.",
    price: "₹ 4,590.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1342/910/020/2/w/750/1342910020_2_4_1.jpg?ts=1648629008202",
    productName: "LEATHER HIGH-HEEL SANDALS WITH CHAIN",
    desc: "Leather high-heel sandals with a chain detail on the front. Buckled ankle strap fastening.",
    price: "₹ 6,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1275/910/040/2/w/750/1275910040_6_1_1.jpg?ts=1644497132663",
    productName: "HIGH-HEEL PLATFORM SHOES",
    desc: "High-heel satin effect platform shoes. Block heel. Square toe. Buckled ankle strap fastening.",
    price: "₹ 6,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/2303/010/002/2/w/750/2303010002_6_1_1.jpg?ts=1650983884219",
    productName: "LEATHER STRAPPY HIGH-HEEL SANDALS",
    desc: "Leather high-heel mule sandals with criss-cross straps and a square toe.",
    price: "₹ 5,590.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1525/910/002/2/w/750/1525910002_6_2_1.jpg?ts=1643273996242",
    productName: "LEATHER FLAT LOAFERS WITH BUCKLE DETAIL",
    desc: "Flat leather loafers with metal buckle detail on the front.",
    price: "₹ 6,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/3107/910/002/2/w/750/3107910002_6_2_1.jpg?ts=1636369353931",
    productName: "HEELED SQUARE-TOE ANKLE BOOTS",
    desc: "HIGH-HEEL ANKLE BOOTS. STRETCH LEG. SQUARE TOE. BACK PULL TAB. INSIDE ZIP FASTENING.",
    price: "₹ 4,290.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/3107/910/040/2/w/750/3107910040_6_1_1.jpg?ts=1636042610996",
    productName: "HEELED SQUARE-TOE ANKLE BOOTS",
    desc: "HIGH-HEEL ANKLE BOOTS. STRETCH LEG. SQUARE TOE. BACK PULL TAB. INSIDE ZIP FASTENING.",
    price: "₹ 4,290.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1203/910/009/2/w/750/1203910009_6_1_1.jpg?ts=1637162255974",
    productName: "PRINTED HIGH-HEEL SHOES",
    desc: "High-heeled shoes with an animal print. V vamp. Covered stiletto heel. Pointed toe.",
    price: "₹ 3,290.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/2316/910/031/2/w/750/2316910031_1_1_1.jpg?ts=1639131255473",
    productName: "PLATFORM SANDALS WITH ANKLE STRAP",
    desc: "High-heel platform sandals. Criss-cross straps on the front. Square toe. Lined block heel. Buckled ankle strap fastening.",
    price: "₹ 5,590.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/2354/810/098/2/w/750/2354810098_6_1_1.jpg?ts=1624890386094",
    productName: "RAFFIA LACE-UP WEDGES",
    desc: "Raffia wedges with wraparound straps around the ankle.",
    price: "₹ 4,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1328/910/002/2/w/750/1328910002_6_1_1.jpg?ts=1645096999528",
    productName: "VINYL HIGH HEEL SANDALS",
    desc: "Vinyl heeled sandals. Round toe.",
    price: "₹ 3,590.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1369/810/092/2/w/750/1369810092_6_1_1.jpg?ts=1638378073484",
    productName: "METALLIC HIGH-HEEL SANDALS",
    desc: "Metallic heeled sandals. Thin straps on the front. Square toe. Buckled ankle strap fastening.",
    price: "₹ 4,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/3662/810/040/2/w/750/3662810040_6_2_1.jpg?ts=1629101451096",
    productName: "HIGH HEEL STUDDED SANDALS",
    desc: "High-heel sandals with studs and rhinestones on the straps. Square toe. Buckled ankle strap fastening.",
    price: "₹ 4,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/3662/810/001/2/w/750/3662810001_6_1_1.jpg?ts=1629101419834",
    productName: "HIGH HEEL STUDDED SANDALS",
    desc: "High-heel sandals with studs and rhinestones on the straps. Square toe. Buckled ankle strap fastening.",
    price: "₹ 4,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/1/p/2311/010/202/2/w/750/2311010202_6_1_1.jpg?ts=1652263143122",
    productName: "PLAITED LACE UP LEATHER HIGH-HEEL SANDALS",
    desc: "Leather high-heel sandals. Thin plaited straps in contrast colours. Square toe. Tied closure around the ankle.",
    price: "₹ 9,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1187/810/040/2/w/750/1187810040_6_1_1.jpg?ts=1636548969229",
    productName: "SPLIT SUEDE HEELED COWBOY ANKLE BOOTS",
    desc: "Split suede cowboy-style ankle boots with block heel. Pointed toe. Zip fastening at the back.",
    price: "₹ 2,590.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/2107/810/040/2/w/750/2107810040_6_2_1.jpg?ts=1630592175940",
    productName: "WIDE HEEL ANKLE BOOT",
    desc: "Ankle boots with block heels. Elastic detail on the sides. Round toe.",
    price: "₹ 4,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/2319/810/030/2/w/750/2319810030_6_2_1.jpg?ts=1622630526872",
    productName: "PADDED HEELED SANDALS",
    desc: "Heeled sandals with wide padded strap across the front. Stiletto heel. Square toe.",
    price: "₹ 2,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/2318/810/050/2/w/750/2318810050_6_2_1.jpg?ts=1622624391908",
    productName: "PADDED HEELED SANDALS",
    desc: "Heeled sandals with wide padded strap across the front. Stiletto heel. Square toe.",
    price: "₹ 2,990.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/2843/810/040/2/w/750/2843810040_6_1_1.jpg?ts=1634636146593",
    productName: "HEELED SLINGBACK SHOES WITH RHINESTONES",
    desc: "BLACK HIGH-HEEL SLINGBACK SHOES. RHINESTONES ON THE FRONT. MID STILETTO HEEL. POINTED TOE. SQUARE HEEL.",
    price: "₹ 5,590.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/3800/810/080/2/w/750/3800810080_6_2_1.jpg?ts=1648125572225",
    productName: "SHINY HIGH-HEEL SANDALS",
    desc: "High-heel sandals with rhinestone-encrusted fringing. Square toe.",
    price: "₹ 5,590.00",
    category: "Shoes",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/1/p/1347/910/040/2/w/750/1347910040_6_1_1.jpg?ts=1645718965015",
    productName: "HEELED LEATHER CLOGS WITH BUCKLE",
    desc: "Leather clogs with opening at the front. Buckled strap fastening.",
    price: "₹ 8,990.00",
    category: "Shoes",
    quantity: "1",
  },
];

// storing the womens data in local storage

localStorage.setItem("womensDataArr", JSON.stringify(womensData));
var womensArr = JSON.parse(localStorage.getItem("womensDataArr"));
// console.log(womensArr)

document.querySelector(".bestProd").addEventListener("click", bestSellerData);

function bestSellerData() {
  var bestSellerDataArr = womensArr.filter(function (el) {
    return el.category == "Bestseller";
  });
  window.location.href = "bestSeller.html";
  localStorage.setItem("bestSellerData", JSON.stringify(bestSellerDataArr));
}

document.querySelector(".dressProd").addEventListener("click", dressData);

function dressData() {
  var dressDataArr = womensArr.filter(function (el) {
    return el.category == "Dresses";
  });
  window.location.href = "dress.html";
  localStorage.setItem("dressData", JSON.stringify(dressDataArr));
}

document.querySelector(".knitwearProd").addEventListener("click", knitwearData);

function knitwearData() {
  var knitwearDataArr = womensArr.filter(function (el) {
    return el.category == "Knitwear";
  });
  window.location.href = "knitwear.html";
  localStorage.setItem("knitwearData", JSON.stringify(knitwearDataArr));
}

document.querySelector(".swimwearProd").addEventListener("click", swimwearData);

function swimwearData() {
  var swimwearDataArr = womensArr.filter(function (el) {
    return el.category == "Swimwear";
  });
  window.location.href = "swimwear.html";
  localStorage.setItem("swimwearData", JSON.stringify(swimwearDataArr));
}

document.querySelector(".shoesProd").addEventListener("click", shoesData);

function shoesData() {
  var shoesDataArr = womensArr.filter(function (el) {
    return el.category == "Shoes";
  });
  window.location.href = "shoe.html";
  localStorage.setItem("shoesData", JSON.stringify(shoesDataArr));
}

// displaying kids data

var kidsData = [
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/3402/605/406/102/w/750/3402605406_1_1_1.jpg?ts=1653638287560",
    productName: "COLOUR BLOCK T-SHIRT AND BERMUDA SHORTS PACK",
    desc: "Two-piece pack. Round neck T-shirt with short sleeves. Bermuda shorts with an elastic waistband and front pockets. This pack is indivisible and must be returned complete.",
    price: "₹ 1,590.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/3402/605/406/103/w/750/3402605406_1_1_1.jpg?ts=1653638278738",
    productName: "COLOUR BLOCK T-SHIRT AND BERMUDA SHORTS PACK",
    desc: "Two-piece pack. Round neck T-shirt with short sleeves. Bermuda shorts with an elastic waistband and front pockets. This pack is indivisible and must be returned complete.",
    price: "₹ 1,590.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/1137/930/203/2/w/750/1137930203_6_1_1.jpg?ts=1640087939005",
    productName: "KIDS/ VINYL BACKPACK",
    desc: "Vinyl backpack. Featuring a main compartment and a front pocket with zip fastening and pull tab. Top handle and adjustable shoulder straps.",
    price: "₹ 2,490.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/3402/605/406/2/w/750/3402605406_6_1_1.jpg?ts=1653409761872",
    productName: "COLOUR BLOCK T-SHIRT AND BERMUDA SHORTS PACK",
    desc: "Two-piece pack. Round neck T-shirt with short sleeves. Bermuda shorts with an elastic waistband and front pockets. This pack is indivisible and must be returned complete.",
    price: "₹ 1,590.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/9006/595/933/102/w/750/9006595933_1_1_1.jpg?ts=1653638271718",
    productName: "TURTLE T-SHIRT",
    desc: "T-shirt with a ribbed round neckline and short sleeves. All-over print.",
    price: "₹ 790.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/0475/693/400/2/w/750/0475693400_6_2_1.jpg?ts=1653031170418",
    productName: "ROUND SUNGLASSES",
    desc: "Round sunglasses with a resin frame.",
    price: "₹ 1,090.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/9006/595/933/2/w/750/9006595933_6_1_1.jpg?ts=1650384477174",
    productName: "TURTLE T-SHIRT",
    desc: "T-shirt with a ribbed round neckline and short sleeves. All-over print.",
    price: "₹ 790.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/2628/930/040/2/w/750/2628930040_6_1_1.jpg?ts=1652430036943",
    productName: "KIDS/ STRAPPY SANDALS",
    desc: "Monochrome sandals with reflective finish. Adjustable and hook-and-loop strap around the back. Flexible rubber sole.",
    price: "₹ 2,590.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/9006/063/406/2/w/750/9006063406_6_1_1.jpg?ts=1649863667178",
    productName: "LOS ANGELES DRESS",
    desc: "Dress with a round neckline and short sleeves. Slogan print on the chest. Pleated details.",
    price: "₹ 1,790.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/6224/706/400/103/w/750/6224706400_1_1_1.jpg?ts=1653638290558",
    productName: "SMILEYWORLD ® HAPPY COLLECTION PLAYSUIT",
    desc: "Sleeveless round neck playsuit. Featuring drawstrings at the front with elastic detail and a SMILEYWORLD ® HAPPY COLLECTION print.",
    price: "₹ 1,790.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/7243/637/500/2/w/750/7243637500_6_1_1.jpg?ts=1652267933348",
    productName: "BEADED NECKLACE WITH INITIAL",
    desc: "Necklace with bead appliqués and initial. Lobster clasp fastening. Contains small pieces. Not recommended for children under 3 years old.",
    price: "₹ 690.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/2187/600/400/2/w/750/2187600400_6_1_1.jpg?ts=1642150031329",
    productName: "EXTREME WIDE-LEG JEANS",
    desc: "Extreme wide-leg jeans with a five-pocket design, adjustable inner waistband and front button fastening.",
    price: "₹ 1,990.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0208/700/251/2/w/750/0208700251_6_1_1.jpg?ts=1654529187489",
    productName: "PACIFIC SWEATSHIRT",
    desc: "Long sleeve sweatshirt with a round neckline.",
    price: "₹ 1,790.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/3920/685/710/2/w/750/3920685710_6_1_1.jpg?ts=1650533647381",
    productName: "KIDS/CAP WITH TERRY ALPHABET PATCH",
    desc: "Peak cap. Embroidered motifs on the front with raised detailing and contrast terry fabric. Adjustable hook-and-loop fastening at the back.",
    price: "₹ 990.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/7243/695/400/2/w/750/7243695400_6_1_1.jpg?ts=1652256915959",
    productName: "PRINTED CORD FOR GLASSES AND MASK",
    desc: "Cord with adjustable tips for glasses and metal lobster clasps for mask. Contains small pieces. Not recommended for children under 3 years old.",
    price: "₹ 550.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/4786/610/643/2/w/750/4786610643_6_1_1.jpg?ts=1647448339635",
    productName: "DRESS WITH SWISS EMBROIDERY",
    desc: "Dress with a V-neckline and short sleeves. Button fastening on the yoke. Embroidered motifs.",
    price: "₹ 2,490.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/1044/602/400/103/w/750/1044602400_1_1_1.jpg?ts=1653471653449",
    productName: "WAFFLE-KNIT FLARED TROUSERS",
    desc: "Waffle-knit flared trousers with an elastic waistband and side vents.",
    price: "₹ 1,290.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0700/647/330/2/w/750/0700647330_6_1_1.jpg?ts=1653031129487",
    productName: "COLORED STONE NECKLACE",
    desc: "Necklace with coloured stones and a lobster clasp.",
    price: "₹ 590.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/2614/600/251/102/w/750/2614600251_1_1_1.jpg?ts=1653471653381",
    productName: "RIBBED ANIME T-SHIRT",
    desc: "Ribbed round neck T-shirt with straps. Featuring an anime print on the front.",
    price: "₹ 790.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0673/617/250/102/w/750/0673617250_1_1_1.jpg?ts=1652701438376",
    productName: "SPORTY PIQUÉ BERMUDA SKORT",
    desc: "Piqué Bermuda skort with a contrast elastic waistband. Inner cycling leggings with a pocket and elastic details for tennis balls. Front print and box pleats.",
    price: "₹ 1,290.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/3037/714/807/2/w/750/3037714807_6_1_1.jpg?ts=1653577217574",
    productName: "ACID WASH SCOOBY-DOO™ T-SHIRT",
    desc: "Round neck T-shirt with short sleeves. SCOOBY-DOO™ print.",
    price: "₹ 1,090.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/5048/115/620/2/w/750/5048115620_6_1_1.jpg?ts=1651147002378",
    productName: "RIBBED T-SHIRT",
    desc: "Sleeveless ribbed racerback T-shirt with a round neckline.",
    price: "₹ 590.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0700/647/330/2/w/750/0700647330_6_2_1.jpg?ts=1653031133860",
    productName: "COLORED STONE NECKLACE",
    desc: "Necklace with coloured stones and a lobster clasp.",
    price: "₹ 590.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/1274/930/202/2/w/750/1274930202_6_1_1.jpg?ts=1653038288610",
    productName: "KIDS/ MULTICOLOURED TECHNICAL BACKPACK",
    desc: "Mini backpack in contrast colours. Main compartment and front pocket. Zip closure.",
    price: "₹ 1,990.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/1260/930/202/2/w/750/1260930202_6_1_1.jpg?ts=1650970087485",
    productName: "KIDS/ QUILTED TOTE BAG",
    desc: "Quilted tote bag. Contrast print details. Shoulder straps.",
    price: "₹ 1,990.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/2624/930/100/2/w/750/2624930100_6_1_1.jpg?ts=1645698134119",
    productName: "KIDS/ STRAPPY LEATHER SANDALS",
    desc: "Strappy sandals made of 100% cowhide leather. Buckled ankle strap fastening. 100% goatskin insole and rubber sole.",
    price: "₹ 2,990.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/4703/030/018/2/w/750/4703030018_6_1_1.jpg?ts=1653477096562",
    productName: "KIDS/ MONOCHROME SANDALS",
    desc: "Monochrome sandals with adjustable hook-and-loop straps on the instep and heel. Matching rubber sole.",
    price: "₹ 2,590.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/4703/030/018/2/w/750/4703030018_6_1_1.jpg?ts=1653477096562",
    productName: "KIDS/ MONOCHROME POOL SANDALS",
    desc: "Rubber pool sandals with a strap across the instep.",
    price: "₹ 1,690.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/4703/030/020/2/w/750/4703030020_6_2_1.jpg?ts=1652281596251",
    productName: "KIDS/ MONOCHROME POOL SANDALS",
    desc: "Rubber pool sandals with a strap across the instep.",
    price: "₹ 1,690.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/4703/030/030/2/w/750/4703030030_6_5_1.jpg?ts=1652281592426",
    productName: "KIDS/ MONOCHROME POOL SANDALS",
    desc: "Rubber pool sandals with a strap across the instep.",
    price: "₹ 1,690.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/2716/930/092/2/w/750/2716930092_6_1_1.jpg?ts=1652700274599",
    productName: "KIDS/ RUBBERISED CLOGS WITH RHINESTONES",
    desc: "Rubberised clogs with rhinestone details on the instep. Adjustable buckled strap around the back. Fabric lining. Rubber track sole.",
    price: "₹ 3,590.00",
    category: "Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/579/637/102/w/750/5644579637_1_1_1.jpg?ts=1654500831305",
    productName: "KIDS/ SWIM SHORTS WITH WATERCOLOUR OLIVES",
    desc: "Bermuda swim shorts featuring an elastic waistband with adjustable drawstrings and rear patch pocket with flap.",
    price: "₹ 1,590.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/678/707/302/w/750/5644678707_1_1_1.jpg?ts=1654586520238",
    productName: "KIDS/ SWIM SHORTS WITH WATERCOLOUR OLIVES",
    desc: "Bermuda swim shorts featuring an elastic waistband with adjustable drawstrings and rear patch pocket with flap.",
    price: "₹ 1,590.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/4442/761/756/303/w/750/4442761756_1_1_1.jpg?ts=1653299602068",
    productName: "STRANGER THINGS TM © NETFLIX T-SHIRT",
    desc: "T-shirt featuring a ribbed round neckline and short sleeves with label appliqué. Featuring a front print, embroidered STRANGER THINGS TM © NETFLIX motifs, contrast back motifs and matching topstitching.",
    price: "₹ 1,090.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/4442/761/756/304/w/750/4442761756_1_1_1.jpg?ts=1653299613913",
    productName: "STRANGER THINGS TM © NETFLIX T-SHIRT",
    desc: "T-shirt featuring a ribbed round neckline and short sleeves with label appliqué. Featuring a front print, embroidered STRANGER THINGS TM © NETFLIX motifs, contrast back motifs and matching topstitching.",
    price: "₹ 1,090.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/4934/741/250/2/w/750/4934741250_6_2_1.jpg?ts=1654257772540",
    productName: "LONG GREMLINS™ SOCKS",
    desc: "Long socks with a GREMLINS™ print.",
    price: "₹ 590.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/0475/691/064/2/w/750/0475691064_6_1_1.jpg?ts=1648625024923",
    productName: "CHEQUERED SUNGLASSES",
    desc: "Sunglasses with a resin frame and a chequered print. 100% UV PROTECTION. CATEGORY 3.",
    price: "₹ 1,090.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5431/702/250/302/w/750/5431702250_1_1_1.jpg?ts=1653394822557",
    productName: "SMILEYWORLD ® HAPPY COLLECTION T-SHIRT",
    desc: "SMILEYWORLD ® HAPPY COLLECTION T-SHIRT",
    price: "₹ 1,090.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/6208/663/600/302/w/750/6208663600_1_1_1.jpg?ts=1651575093102",
    productName: "PRINTED SWEATSHIRT",
    desc: "Long sleeve sweatshirt with a round neckline.",
    price: "₹ 1,290.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/4805/685/450/302/w/750/4805685450_1_1_1.jpg?ts=1651575093431",
    productName: "LEMON T-SHIRT",
    desc: "Short sleeve round neck T-shirt featuring an all-over print and embroidered motifs on the chest.",
    price: "₹ 990.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/6208/618/406/302/w/750/6208618406_1_1_1.jpg?ts=1651575092158",
    productName: "FRUIT TEAM T-SHIRT",
    desc: "Round neck T-shirt with short sleeves.",
    price: "₹ 890.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/6917/692/505/302/w/750/6917692505_1_1_1.jpg?ts=1653908829388",
    productName: "PREMIUM LINEN BERMUDA SHORTS",
    desc: "Linen Bermuda shorts with an elastic waistband and front adjustable drawstrings. Front pockets.",
    price: "₹ 1,790.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/761/710/302/w/750/5644761710_1_1_1.jpg?ts=1653908641566",
    productName: "LINEN-BLEND CHINO BERMUDA SHORTS",
    desc: "Chino Bermuda shorts with an elastic waistband and front button fastening. Patch pockets on the front and back. Made of 52% linen.",
    price: "₹ 1,590.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/1656/790/450/303/w/750/1656790450_1_1_1.jpg?ts=1653999321935",
    productName: "GINGHAM LINEN-BLEND BERMUDA SHORTS",
    desc: "Bermuda shorts featuring an elasticated waistband and front adjustable drawstrings. Front pockets and rear patch pockets. 15% linen blend fabric.",
    price: "₹ 1,790.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/1656/790/700/2/w/750/1656790700_6_2_1.jpg?ts=1653390325708",
    productName: "GINGHAM LINEN-BLEND BERMUDA SHORTS",
    desc: "Bermuda shorts featuring an elasticated waistband and front adjustable drawstrings. Front pockets and rear patch pockets. 15% linen blend fabric.",
    price: "₹ 1,790.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/9959/790/712/2/w/750/9959790712_6_1_1.jpg?ts=1653577234228",
    productName: "LINEN BLEND CHINO TROUSERS",
    desc: "Chino trousers with an elastic waistband and front button fastening. Front pockets and buttoned back pockets. Made of 52% linen.",
    price: "₹ 1,790.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/4152/699/400/302/w/750/4152699400_1_1_1.jpg?ts=1653405797360",
    productName: "TIE-DYE SHIRT",
    desc: "Collared denim shirt with short sleeves and a button-up front.",
    price: "₹ 1,790.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/4152/799/400/2/w/750/4152799400_6_1_1.jpg?ts=1653389565913",
    productName: "DIP-DYE DENIM SWEATSHIRT",
    desc: "Long sleeve denim sweatshirt with a round neckline and ribbed trims.",
    price: "₹ 1,990.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/4676/712/250/302/w/750/4676712250_1_1_1.jpg?ts=1653466645645",
    productName: "SUNSET TWILL OVERSHIRT",
    desc: "Collared twill overshirt with long sleeves. Snap buttons down the front. Patch pocket on the chest. Contrast print on the back. Ripped and frayed details.",
    price: "₹ 2,290.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/2795/695/425/2/w/750/2795695425_6_1_1.jpg?ts=1653910631172",
    productName: "PLAIN PLUSH TROUSERS",
    desc: "Plush trousers with an elastic waistband and adjustable drawstrings at the front. Front pockets and trim detail. Cuffed hems.",
    price: "₹ 1,290.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/2795/695/711/2/w/750/2795695711_6_1_1.jpg?ts=1653910631076",
    productName: "PLAIN PLUSH TROUSERS",
    desc: "Plush trousers with an elastic waistband and adjustable drawstrings at the front. Front pockets and trim detail. Cuffed hems.",
    price: "₹ 1,290.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/4303/030/129/2/w/750/4303030129_6_1_1.jpg?ts=1654184126238",
    productName: "KIDS/ SPORTY MESH SNEAKERS",
    desc: "Sneakers in a combination of materials. Adjustable lace-up fastening. Front pull tab for slipping on with ease. Memory-effect cotton insole and lining. Lightweight rubber sole.",
    price: "₹ 2,990.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/9959/685/920/2/w/750/9959685920_6_1_1.jpg?ts=1649347882520",
    productName: "BASIC CHINO BERMUDA SHORTS",
    desc: "Chino-style Bermuda shorts with an adjustable interior waistband and front button fastening. Five pockets and turn-up hems.",
    price: "₹ 1,590.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/1887/669/402/2/w/750/1887669402_6_1_1.jpg?ts=1649345593677",
    productName: "PLAIN SLUB KNIT T-SHIRT",
    desc: "Round neck T-shirt with short sleeves.",
    price: "₹ 550.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/1887/669/671/2/w/750/1887669671_6_1_1.jpg?ts=1649345589270",
    productName: "PLAIN SLUB KNIT T-SHIRT",
    desc: "Round neck T-shirt with short sleeves.",
    price: "₹ 550.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/2300/030/002/2/w/750/2300030002_6_1_1.jpg?ts=1653386370309",
    productName: "KIDS/ COLOUR CHANGING TRAINERS",
    desc: "Multi-piece trainers with adjustable lace-up fastening. Back pull tab for slipping on with ease. Memory-effect cotton insole and lining. Lightweight rubber sole.",
    price: "₹ 2,990.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/2300/030/002/2/w/750/2300030002_6_1_1.jpg?ts=1653386370309",
    productName: "KIDS/ COLOUR CHANGING TRAINERS",
    desc: "Multi-piece trainers with adjustable lace-up fastening. Back pull tab for slipping on with ease. Memory-effect cotton insole and lining. Lightweight rubber sole.",
    price: "₹ 2,990.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/4300/030/001/2/w/750/4300030001_6_1_1.jpg?ts=1653386370430",
    productName: "KIDS/ COLOUR CHANGING TRAINERS",
    desc: "Multi-piece trainers with adjustable lace-up fastening. Back pull tab for slipping on with ease. Memory-effect cotton insole and lining. Lightweight rubber sole.",
    price: "₹ 2,990.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/1403/030/203/2/w/750/1403030203_6_1_1.jpg?ts=1652777275057",
    productName: "KIDS/ COLOURED BELT BAG",
    desc: "Fabric belt bag in a combination of colours with slogan. Main compartment and front pocket with zip closure. Adjustable contrast strap with clip buckle fastening.",
    price: "₹ 1,690.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0620/696/615/2/w/750/0620696615_6_1_1.jpg?ts=1654013826011",
    productName: "KIDS/ MESH CALIFORNIA CAP",
    desc: "Contrast mesh cap with adjustable fastening in the back.",
    price: "₹ 890.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/682/300/2/w/750/5644682300_6_1_1.jpg?ts=1654250118315",
    productName: "KIDS/ SMILEYWORLD ® HAPPY COLLECTION SWIM SHORTS",
    desc: "Swim shorts with an elastic waistband and adjustable drawstrings. Rear pockets. SMILEYWORLD ® HAPPY COLLECTION print.",
    price: "₹ 1,490.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/7096/698/300/2/w/750/7096698300_6_1_1.jpg?ts=1654255951945",
    productName: "SMILEYWORLD ® HAPPY COLLECTION PONCHO TOWEL",
    desc: "Hooded poncho towel with short sleeves. SMILEYWORLD ® HAPPY COLLECTION print.",
    price: "₹ 1,790.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/2224/662/898/2/w/750/2224662898_6_1_1.jpg?ts=1653030381490",
    productName: "EMBOSSED STRANGER THINGS TM © NETFLIX SWEATSHIRT",
    desc: "Round neck sweatshirt featuring long sleeves with cuffs. STRANGER THINGS TM © NETFLIX print on the front and back, a contrast raised detail on the chest and ribbed trims.",
    price: "₹ 1,990.00",
    category: "Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/5048/301/611/2/w/750/5048301611_6_1_1.jpg?ts=1651833295710",
    productName: "OPEN KNIT BLONDE LACE T-SHIRT",
    desc: "Sleeveless round neck T-shirt with blonde lace on the armholes and a buttoned placket appliqué on the chest.",
    price: "₹ 590.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0485/515/052/2/w/750/0485515052_6_1_1.jpg?ts=1653902245076",
    productName: "FLORAL TEXTURED DRESS",
    desc: "Round neck dress with straps that cross at the back, ruffle trims, elastic detail and an all-over print.",
    price: "₹ 1,490.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0485/515/052/2/w/750/0485515052_6_1_1.jpg?ts=1653902245076",
    productName: "FLORAL TEXTURED DRESS",
    desc: "Round neck dress with straps that cross at the back, ruffle trims, elastic detail and an all-over print.",
    price: "₹ 1,490.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0722/525/701/2/w/750/0722525701_6_1_1.jpg?ts=1653582524386",
    productName: "BOHO-STYLE TROUSERS WITH BOW",
    desc: "Trousers with an elastic waistband, front bow appliqué and front pockets.",
    price: "₹ 690.00",
    category: "Baby Girl",
    quantity: "1",
  },

  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5767/506/658/202/w/750/5767506658_1_1_1.jpg?ts=1654701703056",
    productName: "CONTRAST STRIPED TEXTURED TOP",
    desc: "Strappy straight-neck top with textured fabric on the chest, a gathered finish on the back and ruffles.",
    price: "₹ 990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0700/647/330/2/w/750/0700647330_6_1_1.jpg?ts=1653031129487",
    productName: "COLORED STONE NECKLACE",
    desc: "Necklace with coloured stones and a lobster clasp.",
    price: "₹ 590.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5767/502/658/2/w/750/5767502658_6_1_1.jpg?ts=1653994585276",
    productName: "CONTRAST STRIPED TEXTURED BERMUDA SHORTS",
    desc: "Bermuda shorts with a contrast elastic waistband and textured trims on the hem. Gathered and ruffled details.",
    price: "₹ 890.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/6659/030/002/2/w/750/6659030002_6_1_1.jpg?ts=1652189275260",
    productName: "BABY/ LEATHER SANDALS",
    desc: "Cage sandals made of 100% cowhide leather. Side hook-and-loop strap fastening. Rubber sole.",
    price: "₹ 3,590.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/6061/510/807/2/w/750/6061510807_6_1_1.jpg?ts=1654007869183",
    productName: "© DISNEY T-SHIRT",
    desc: "Short sleeve T-shirt with a round neckline. © DISNEY print.",
    price: "₹ 990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/1135/506/400/2/w/750/1135506400_6_1_1.jpg?ts=1647516991996",
    productName: "MINNIE MOUSE © DISNEY DENIM JACKET",
    desc: "Collared denim jacket with long sleeves. Front snap-button fastening. Front patch pockets with flaps. MINNIE MOUSE © DISNEY print.",
    price: "₹ 2,290.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/0653/544/250/2/w/750/0653544250_6_1_1.jpg?ts=1650441448696",
    productName: "BABY/ TWILL BUCKET HAT WITH LABEL",
    desc: "Twill bucket hat with label appliqué and contrast slogan print on the brim.",
    price: "₹ 990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/6117/131/620/2/w/750/6117131620_6_1_1.jpg?ts=1653464104974",
    productName: "POPLIN PANELLED DRESS",
    desc: "Dress featuring a straight-cut neckline and ruffle straps. Smocked detail on the back.",
    price: "₹ 1,990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/5770/509/620/2/w/750/5770509620_6_1_1.jpg?ts=1648801459452",
    productName: "FLORAL SCHIFFLI EMBROIDERY DRESS",
    desc: "Sleeveless dress with a round neckline. Panelled detail and embroidered motifs.",
    price: "₹ 1,990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5431/506/250/2/w/750/5431506250_6_1_1.jpg?ts=1654505807148",
    productName: "PLAIN HOODIE",
    desc: "Hoodie with long sleeves. Invisible front injected zip fastening. Front pockets with trim detail. Elastic trims.",
    price: "₹ 1,490.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5431/506/620/2/w/750/5431506620_6_1_1.jpg?ts=1654505807583",
    productName: "PLAIN HOODIE",
    desc: "Hoodie with long sleeves. Invisible front injected zip fastening. Front pockets with trim detail. Elastic trims.",
    price: "₹ 1,490.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/3920/541/400/2/w/750/3920541400_6_1_1.jpg?ts=1642150018120",
    productName: "BABY/ DENIM BUCKET HAT",
    desc: "Denim bucket hat with a chequered print.",
    price: "₹ 1,090.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/7521/503/250/2/w/750/7521503250_6_1_1.jpg?ts=1649332849464",
    productName: "EMBROIDERED POPLIN SHIRT",
    desc: "Round neck poplin shirt featuring short sleeves with elastic cuffs. Front button fastening and ruffle appliqué on the yoke with embroidered motifs.",
    price: "₹ 1,490.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/4152/501/400/2/w/750/4152501400_6_1_1.jpg?ts=1653475417006",
    productName: "DENIM SKORT",
    desc: "Denim skort with an elastic waistband at the back. Button fastening on the inside and crossover snap buttons at the front. Front and back patch pockets with frayed detailing.",
    price: "₹ 1,590.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/6645/930/002/2/w/750/6645930002_6_1_1.jpg?ts=1650365263593",
    productName: "BABY/ CROCHET SANDALS",
    desc: "Cage sandals made of 100% cotton. Hook-and-loop strap fastening on the side. Chunky rubber sole.",
    price: "₹ 2,990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/7243/642/400/2/w/750/7243642400_6_1_1.jpg?ts=1649748791679",
    productName: "THREE PACK BEADED HAIR CLIPS",
    desc: "Pack of 3 hair clips with bead appliqués. This pack is indivisible and must be returned complete. Contains small pieces. Not recommended for children under 3 years old.",
    price: "₹ 690.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/8367/502/406/2/w/750/8367502406_6_3_1.jpg?ts=1652354807275",
    productName: "STRIPED DENIM DRESS",
    desc: "Denim dress featuring a straight-cut neckline and tied straps. Smocked detail on the chest.",
    price: "₹ 1,790.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/3333/915/712/2/w/750/3333915712_6_1_1.jpg?ts=1653565648974",
    productName: "QUILTED FLORAL OVERSHIRT",
    desc: "Quilted collared overshirt with long sleeves. Button-up front. Patch pockets on the chest.",
    price: "₹ 2,290.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/8574/522/400/2/w/750/8574522400_6_1_1.jpg?ts=1652277214184",
    productName: "TEXTURED TOP WITH RUFFLE TRIMS",
    desc: "Top with a straight neckline and ruffled straps. Front button fastening.",
    price: "₹ 1,290.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/0475/640/620/2/w/750/0475640620_6_1_1.jpg?ts=1651069816090",
    productName: "RETRO METAL GLASSES",
    desc: "Retro-style metal sunglasses.",
    price: "₹ 1,090.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/6643/930/107/2/w/750/6643930107_6_1_1.jpg?ts=1651825759607",
    productName: "BABY/ ROPE SANDALS WITH LEATHER DETAIL",
    desc: "Monochrome sandals with a cotton rope design and leather straps. Hook-and-loop strap fastening at the back and rubber soles.",
    price: "₹ 2,990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/6651/030/030/2/w/750/6651030030_6_2_1.jpg?ts=1652969488143",
    productName: "BABY/ LEATHER SANDALS",
    desc: "100% cowhide leather sandals. Hook-and-loop strap fastening at the back. Includes hook-and-loop straps on the instep. Rubber sole. Made in Spain.",
    price: "₹ 2,990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/382/800/2/w/750/5644382800_6_1_1.jpg?ts=1654788365836",
    productName: "BABY/ OCEAN BAY WAVES TIE-DYE RASH GUARD",
    desc: "Long sleeve anti-UV rash guard with a round neckline. Injected zip fastening on the yoke. Print on the chest. Piping detail.",
    price: "₹ 1,590.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/7096/698/300/2/w/750/7096698300_6_1_1.jpg?ts=1654255951945",
    productName: "SMILEYWORLD ® HAPPY COLLECTION PONCHO TOWEL",
    desc: "Hooded poncho towel with short sleeves. SMILEYWORLD ® HAPPY COLLECTION print.",
    price: "₹ 1,790.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/3920/597/250/2/w/750/3920597250_6_1_1.jpg?ts=1650440570374",
    productName: "BABY/ TWILL BUCKET HAT WITH LABEL",
    desc: "This hat is for baby older than 5yrs",
    price: "₹ 1,090.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/3920/513/427/2/w/750/3920513427_6_1_1.jpg?ts=1654588405783",
    productName: "BABY/ SPIDER-MAN © MARVEL CAP",
    desc: "Cap with adjustable closure at the back. SPIDER-MAN © MARVEL print.",
    price: "₹ 990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/1558/930/050/2/w/750/1558930050_6_1_1.jpg?ts=1652972530928",
    productName: "BABY/ RAFFIA-EFFECT HANDBAG",
    desc: "Raffia-effect handbag. Two top handles and a long strap.",
    price: "₹ 1,990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/1557/930/030/2/w/750/1557930030_6_1_1.jpg?ts=1652971174611",
    productName: "BABY/ RAFFIA-EFFECT HANDBAG",
    desc: "Raffia-effect handbag. Two top handles and a long shoulder strap.",
    price: "₹ 1,990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/3920/518/710/2/w/750/3920518710_6_1_1.jpg?ts=1650469411152",
    productName: "BABY/CAP WITH TERRY ALPHABET PATCH",
    desc: "Peak cap. Embroidered motifs on the front with raised detailing and contrast terry fabric. Adjustable hook-and-loop fastening at the back.",
    price: "₹ 990.00",
    category: "Baby Girl",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/6048/558/802/402/w/750/6048558802_1_1_1.jpg?ts=1654156221028",
    productName: "TEXTURED PLAIN T-SHIRT",
    desc: "Round neck T-shirt with short sleeves. Buttoned teardrop opening at the back. Chest patch pocket. Ribbed trims.",
    price: "₹ 1,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/6048/558/666/402/w/750/6048558666_1_1_1.jpg?ts=1654156221750",
    productName: "TEXTURED PLAIN T-SHIRT",
    desc: "Round neck T-shirt with short sleeves. Buttoned teardrop opening at the back. Chest patch pocket. Ribbed trims.",
    price: "₹ 1,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/6048/558/666/2/w/750/6048558666_6_1_1.jpg?ts=1652371598792",
    productName: "TEXTURED PLAIN T-SHIRT",
    desc: "Round neck T-shirt with short sleeves. Buttoned teardrop opening at the back. Chest patch pocket. Ribbed trims.",
    price: "₹ 1,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/8637/930/107/2/w/750/8637930107_6_1_1.jpg?ts=1650366152378",
    productName: "BABY/ LEATHER SANDALS",
    desc: "Menorcan sandals made of 100% cowhide leather. Hook-and-loop strap fastening on the side. Rubber sole.",
    price: "₹ 2,990.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/4333/555/666/2/w/750/4333555666_6_1_1.jpg?ts=1654505126196",
    productName: "TEXTURED PLAIN BERMUDA SHORTS",
    desc: "Bermuda shorts with an elastic waistband. Front patch pockets.",
    price: "₹ 1,290.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/0653/543/514/2/w/750/0653543514_6_1_1.jpg?ts=1644489045638",
    productName: "BABY/ FADED DENIM BUCKET HAT",
    desc: "Faded denim bucket hat.",
    price: "₹ 990.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/5431/802/804/2/w/750/5431802804_6_1_1.jpg?ts=1651217704476",
    productName: "TEXTURED LEAF PRINT TROUSERS",
    desc: "Textured trousers with an elastic waistband and front button appliqué. Featuring front and back patch pockets.",
    price: "₹ 1,290.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/5350/801/450/2/w/750/5350801450_6_1_1.jpg?ts=1647361258052",
    productName: "CONTRAST PLAIN TROUSERS",
    desc: "Trousers with an elastic waistband and front adjustable drawstrings. Front pockets. Contrast fabric on the legs.",
    price: "₹ 1,290.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/6048/563/712/2/w/750/6048563712_6_1_1.jpg?ts=1652370563860",
    productName: "SPECKLED TEXTURED SHIRT",
    desc: "Collared shirt featuring short turn-up sleeves, a button-up front and an all-over print.",
    price: "₹ 1,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/4333/555/406/2/w/750/4333555406_6_3_1.jpg?ts=1654254343525",
    productName: "TEXTURED PLAIN BERMUDA SHORTS",
    desc: "Bermuda shorts with an elastic waistband. Front patch pockets.",
    price: "₹ 1,290.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/7545/531/712/2/w/750/7545531712_6_1_1.jpg?ts=1653490628926",
    productName: "TEXTURED STRIPED TOP",
    desc: "Round neck shirt with long sleeves. Button-up front. Front patch pocket.",
    price: "₹ 1,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/7878/559/250/2/w/750/7878559250_6_3_1.jpg?ts=1653402200175",
    productName: "TECHNICAL PALM TREE T-SHIRT",
    desc: "Round neck T-shirt with short sleeves.",
    price: "₹ 890.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0722/505/406/2/w/750/0722505406_6_1_1.jpg?ts=1653320520211",
    productName: "PLAIN T-SHIRT",
    desc: "Round neck T-shirt with short sleeves and a chest patch pocket.",
    price: "₹ 450.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0722/524/401/2/w/750/0722524401_6_1_1.jpg?ts=1653986276787",
    productName: "T-SHIRT WITH POCKET",
    desc: "Sleeveless top with a round neckline and a chest patch pocket.",
    price: "₹ 450.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/8367/555/403/2/w/750/8367555403_6_1_1.jpg?ts=1654007868712",
    productName: "RIPPED DENIM BERMUDA SHORTS",
    desc: "Denim Bermuda shorts with an adjustable inner waistband and front snap-button fastening. Five-pocket design. Ripped details.",
    price: "₹ 1,290.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0722/550/400/2/w/750/0722550400_6_3_1.jpg?ts=1652957547466",
    productName: "PRINTED T-SHIRT",
    desc: "Round neck T-shirt with short sleeves.",
    price: "₹ 550.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/6411/930/001/2/w/750/6411930001_6_1_1.jpg?ts=1642415090466",
    productName: "BABY/ CONTRAST FABRIC PLIMSOLLS",
    desc: "Sneakers with contrast details. Back pull tab for slipping on with ease. Side zip and adjustable lace-up fastening. Contrast rubber sole.",
    price: "₹ 1,990.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/4934/595/812/2/w/750/4934595812_6_1_1.jpg?ts=1654705650187",
    productName: "BABY/ THREE-PACK OF BASIC LONG SOCKS",
    desc: "Pack of three pairs of plain long socks.",
    price: "₹ 450.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0722/550/300/2/w/750/0722550300_6_1_1.jpg?ts=1653403312192",
    productName: "PRINTED T-SHIRT",
    desc: "Round neck T-shirt with short sleeves.",
    price: "₹ 550.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/6411/930/001/2/w/750/6411930001_6_2_1.jpg?ts=1642415079385",
    productName: "BABY/ CONTRAST FABRIC PLIMSOLLS",
    desc: "Sneakers with contrast details. Back pull tab for slipping on with ease. Side zip and adjustable lace-up fastening. Contrast rubber sole.",
    price: "₹ 1,990.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/0722/505/310/2/w/750/0722505310_6_1_1.jpg?ts=1653390344436",
    productName: "PLAIN T-SHIRT",
    desc: "Round neck T-shirt with short sleeves and a chest patch pocket.",
    price: "₹ 450.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/549/514/2/w/750/5644549514_6_1_1.jpg?ts=1654243891309",
    productName: "BABY/ WATERCOLOUR OLIVES BABY SWIM CAP WITH UPF 50",
    desc: "Swim cap with peak and lapels. UPF 50 sun protection.",
    price: "₹ 890.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/434/514/2/w/750/5644434514_6_3_1.jpg?ts=1654852449424",
    productName: "BABY/ SWIM SHORTS WITH WATERCOLOUR OLIVES",
    desc: "Swim shorts with an elastic waistband.",
    price: "₹ 990.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/433/707/2/w/750/5644433707_6_1_1.jpg?ts=1654254973688",
    productName: "BABY/ SWIM SHORTS WITH WATERCOLOUR OLIVES",
    desc: "Bermuda swim shorts featuring an elastic waistband with adjustable drawstrings and rear patch pocket with flap.",
    price: "₹ 1,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/7096/698/300/2/w/750/7096698300_6_1_1.jpg?ts=1654255951945",
    productName: "SMILEYWORLD ® HAPPY COLLECTION PONCHO TOWEL",
    desc: "Hooded poncho towel with short sleeves. SMILEYWORLD ® HAPPY COLLECTION print.",
    price: "₹ 1,790.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/382/800/2/w/750/5644382800_6_1_1.jpg?ts=1654788365836",
    productName: "BABY/ OCEAN BAY WAVES TIE-DYE RASH GUARD",
    desc: "Long sleeve anti-UV rash guard with a round neckline. Injected zip fastening on the yoke. Print on the chest. Piping detail.",
    price: "₹ 1,590.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/388/712/2/w/750/5644388712_6_1_1.jpg?ts=1652859358564",
    productName: "BABY/ SMILEYWORLD ® HAPPY COLLECTION BERMUDA SWIM SHORTS",
    desc: "Bermuda swim shorts featuring an elastic waistband with front adjustable drawstrings. Patch pocket on the back.",
    price: "₹ 1,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/3/p/5644/432/401/2/w/750/5644432401_6_3_1.jpg?ts=1654012674046",
    productName: "BABY/ SPIDER-MAN © MARVEL SWIM SHORTS",
    desc: "Bermuda swim shorts featuring an elastic waistband with front adjustable drawstrings. Back patch pocket with flap. SPIDER-MAN © MARVEL print.",
    price: "₹ 1,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/3/p/3920/513/427/2/w/750/3920513427_6_1_1.jpg?ts=1654588405783",
    productName: "BABY/ SPIDER-MAN © MARVEL CAP",
    desc: "Cap with adjustable closure at the back. SPIDER-MAN © MARVEL print.",
    price: "₹ 990.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/1530/930/202/2/w/750/1530930202_6_1_1.jpg?ts=1642522911608",
    productName: "BABY/ MULTICOLORED BACKPACK",
    desc: "Multicoloured backpack. Main compartment with zip closure. Extra pockets, handle and adjustable padded straps.",
    price: "₹ 2,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/3/p/1532/930/040/2/w/750/1532930040_6_2_1.jpg?ts=1652374255984",
    productName: "BABY/ MICKEY MOUSE & FRIENDS © DISNEY BACKPACK",
    desc: "Backpack with a Disney print. Main compartment with gathered drawstring closure and a clip flap. Two side pockets and one front pocket with zip closure. Top handle and two adjustable shoulder straps.",
    price: "₹ 2,490.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/1585/930/202/2/w/750/1585930202_6_1_1.jpg?ts=1652194449579",
    productName: "BABY/ MESH TOTE BAG",
    desc: "Multicoloured tote bag with a striped print and front pockets. Double handle and adjustable shoulder strap.",
    price: "₹ 1,990.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/1584/930/202/2/w/750/1584930202_6_1_1.jpg?ts=1652189085194",
    productName: "BABY/ PACK OF MESH BAGS",
    desc: "Pack of 2 mesh bags with adjustable drawstring fastening. Two sizes.",
    price: "₹ 1,690.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/1583/930/202/2/w/750/1583930202_6_1_1.jpg?ts=1652110286893",
    productName: "BABY/ MULTICOLOURED MESH BACKPACK",
    desc: "Backpack with adjustable drawstring closure, front zip pocket and adjustable shoulder straps.",
    price: "₹ 1,990.00",
    category: "Baby Boy",
    quantity: "1",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/3/p/1506/930/117/2/w/750/1506930117_6_1_1.jpg?ts=1648725694295",
    productName: "BABY/ LUCA RAFFIA HANDBAG",
    desc: "Raffia tote bag. Gathered closure. Double handle and long strap.",
    price: "₹ 1,990.00",
    category: "Baby Boy",
    quantity: "1",
  },
];

localStorage.setItem("kidsDataArr", JSON.stringify(kidsData));
var kidsArr = JSON.parse(localStorage.getItem("kidsDataArr"));

document.querySelector(".girlProd").addEventListener("click", girlData);

function girlData() {
  var girlDataArr = kidsArr.filter(function (el) {
    return el.category == "Girl";
  });
  window.location.href = "girl.html";
  localStorage.setItem("girlData", JSON.stringify(girlDataArr));
}

document.querySelector(".boyProd").addEventListener("click", boyData);

function boyData() {
  var boyDataArr = kidsArr.filter(function (el) {
    return el.category == "Boy";
  });
  window.location.href = "boys.html";
  localStorage.setItem("boyData", JSON.stringify(boyDataArr));
}

document.querySelector(".babyGirlProd").addEventListener("click", babyGirlData);

function babyGirlData() {
  var babyGirlDataArr = kidsArr.filter(function (el) {
    return el.category == "Baby Girl";
  });
  window.location.href = "babyGirl.html";
  localStorage.setItem("babyGirlData", JSON.stringify(babyGirlDataArr));
}

document.querySelector(".babyBoyProd").addEventListener("click", babyBoyData);

function babyBoyData() {
  var babyBoyDataArr = kidsArr.filter(function (el) {
    return el.category == "Baby Boy";
  });
  window.location.href = "babyBoy.html";
  localStorage.setItem("babyBoyData", JSON.stringify(babyBoyDataArr));
}
