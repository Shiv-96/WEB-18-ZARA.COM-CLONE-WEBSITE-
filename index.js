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
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7505/481/401/32/w/750/7505481401_1_1_1.jpg?ts=1653988839525",
    productName: "WIDE FIT TROUSERS BY JAVIER S. MEDINA",
    desc: "Wide trousers made of cotton. Featuring side pockets, back welt pockets with button and front button fastening.",
    price: "₹ 5,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/7505/483/710/2/w/750/7505483710_6_1_1.jpg?ts=1652365785975",
    productName: "PLEATED TROUSERS BY JAVIER S. MEDINA",
    desc: "Relaxed-fit trousers made of cotton fabric. Front pleated detail at the waist. Side pockets and back welt pockets with button. Front button fastening.",
    price: "₹ 5,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/4327/130/300/2/w/750/4327130300_2_2_1.jpg?ts=1654008345865",
    productName: "STRIPED SHIRT BY JAVIER S. MEDINA",
    desc: "Relaxed fit shirt made of stretchy cotton. Featuring a lapel collar and long sleeves with buttoned cuffs. Chest patch pocket. Button-up front.",
    price: "₹ 2,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/7505/193/251/2/w/750/7505193251_6_1_1.jpg?ts=1652365757976",
    productName: "JACKET WITH POCKETS BY JAVIER S. MEDINA",
    desc: "Boxy fit collared jacket made of stretchy cotton fabric. Long sleeves with buttoned cuffs. Hip patch pockets. Button-up front.",
    price: "₹ 6,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7505/480/615/32/w/750/7505480615_1_1_1.jpg?ts=1653988841450",
    productName: "WIDE FIT TROUSERS X JAVIER S. MEDINA",
    desc: "Wide cotton trousers with side pockets, jetted back pockets with buttons and button fastening.",
    price: "₹ 5,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7505/193/420/32/w/750/7505193420_1_1_1.jpg?ts=1653988839487",
    productName: "JACKET WITH POCKETS BY JAVIER S. MEDINA",
    desc: "Boxy fit collared jacket made of stretchy cotton fabric. Long sleeves with buttoned cuffs. Hip patch pockets. Button-up front.",
    price: "₹ 6,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2888/408/403/2/w/750/2888408403_6_3_1.jpg?ts=1652365772049",
    productName: "JACQUARD T-SHIRT X JAVIER S. MEDINA",
    desc: "Sleeveless t-shirt with a round neckline and ribbed trims.",
    price: "₹ 1,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/7505/193/420/2/w/750/7505193420_2_1_1.jpg?ts=1654008351725",
    productName: "JACKET WITH POCKETS BY JAVIER S. MEDINA",
    desc: "Boxy fit collared jacket made of stretchy cotton fabric. Long sleeves with buttoned cuffs. Hip patch pockets. Button-up front.",
    price: "₹ 6,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/2/p/2721/020/040/2/w/750/2721020040_6_3_1.jpg?ts=1652438655358",
    productName: "JAVIER S. MEDINA® LEATHER CLOGS",
    desc: "Dark brown leather clogs. Wraparound upper with openwork. Adjusts at the back with buckled strap. Sole in a combination of colours.",
    price: "₹ 6,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/2/p/3223/020/010/2/w/750/3223020010_6_1_1.jpg?ts=1652700728461",
    productName: "JAVIER S. MEDINA® LEATHER BACKPACK",
    desc: "Navy blue leather backpack. Main pocket with gathered closure. Small inside pocket. Two tubular shoulder straps and two handles.",
    price: "₹ 12,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/4023/300/712/2/w/750/4023300712_6_1_1.jpg?ts=1653635434078",
    productName: "PRINTED BANDANA X JAVIER S. MEDINA",
    desc: "Bandanna made of satiny fabric.",
    price: "₹ 990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/3334/301/712/2/w/750/3334301712_6_1_1.jpg?ts=1652427913164",
    productName: "BAND SOCKS X JAVIER S. MEDINA",
    desc: "Lightweight ribbed knit socks with ribbed trims.",
    price: "₹ 1,590.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0775/434/401/2/w/750/0775434401_6_3_1.jpg?ts=1650981902358",
    productName: "STRIPED PYJAMA SHIRT",
    desc: "Pyjama shirt made of cotton fabric. Camp collar and long sleeves. Chest patch pocket. Button-up front.",
    price: "₹ 2,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/6987/410/427/35/w/750/6987410427_1_1_1.jpg?ts=1654588028747",
    productName: "DENIM SHIRT",
    desc: "Faded relaxed fit shirt with a button-down collar and long sleeves with buttoned cuffs. Featuring a chest patch pocket and button fastening on the front.",
    price: "₹ 1,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/1/p/8574/426/500/32/w/750/8574426500_1_1_1.jpg?ts=1654589424869",
    productName: "BASIC SWIMMING TRUNKS",
    desc: "Swimming trunks with an elastic waistband and adjustable drawstrings. Side pockets and a back patch pocket. Lining.",
    price: "₹ 1,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1300/149/712/2/w/750/1300149712_2_5_1.jpg?ts=1654615968397",
    productName: "EMBROIDERED OVERSHIRT",
    desc: "Collared overshirt with long sleeves with buttoned cuffs. Chest patch pocket and patch hip pockets with contrast embroidery. Button-up front.",
    price: "₹ 5,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0706/486/251/2/w/750/0706486251_6_3_1.jpg?ts=1653564839034",
    productName: "PRINTED JACKET WITH EMBROIDERY",
    desc: "Lightweight collared jacket with an all-over embroidered print. Long sleeves with buttoned cuffs. Patch pockets with flaps at the hip. Buttoned front.",
    price: "₹ 5,990.00",
    category: "New",
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
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1538/333/406/2/w/750/1538333406_1_1_1.jpg?ts=1654598027660",
    productName: "DENIM JOGGER BERMUDA SHORTS",
    desc: "Bermuda shorts featuring an elastic waistband with adjustable drawstring. Side pockets and rear pocket detail.",
    price: "₹ 2,590.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/6085/312/501/2/w/750/6085312501_1_1_1.jpg?ts=1654069449794",
    productName: "CONTRAST BERMUDA SHORTS",
    desc: "Satin fabric Bermuda shorts. Adjustable elastic drawstring waistband. Contrast trims.",
    price: "₹ 2,990.00",
    category: "New",
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
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/6861/442/803/2/w/750/6861442803_1_1_1.jpg?ts=1650623523236",
    productName: "SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and hip patch pocket. Inside pocket detail. Back vents at the hem. Front button fastening.",
    price: "₹ 8,990.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/9065/303/526/2/w/750/9065303526_6_1_1.jpg?ts=1654076777870",
    productName: "BASIC SOFT CAP",
    desc: "Peak cap. Faded effect. Adjustable fastening.",
    price: "₹ 1,590.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1012/303/808/2/w/750/1012303808_6_2_1.jpg?ts=1654076773233",
    productName: "EMBOSSED RING",
    desc: "Metal ring with contrast embossing.",
    price: "₹ 1,590.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1012/304/808/2/w/750/1012304808_6_2_1.jpg?ts=1654076719726",
    productName: "CONTRAST SIGNET RING",
    desc: "Metal ring with a contrast signet.",
    price: "₹ 1,590.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1012/301/808/2/w/750/1012301808_6_1_1.jpg?ts=1654076716352",
    productName: "CHAIN PENDANT",
    desc: "Metal chain with a matching embossed pendant. Lobster clasp fastening.",
    price: "₹ 1,790.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/1012/302/808/2/w/750/1012302808_6_1_1.jpg?ts=1654076743201",
    productName: "ROPE CHAIN",
    desc: "Metal chain. Lobster clasp fastening.",
    price: "₹ 1,790.00",
    category: "New",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4499/120/800/102/w/750/4499120800_1_1_1.jpg?ts=1649764598841",
    productName: "SLIM FIT DOUBLE-BREASTED BLAZER",
    desc: "Slim-fit blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and flap hip pockets. Inside pocket detail. Back vents. Double-breasted buttoned front.",
    price: "₹ 7,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/610/800/102/w/750/1564610800_1_1_1.jpg?ts=1649764487133",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button details on the cuffs. Chest welt pocket and hip flap pockets. Inside pocket detail. Front button fastening.",
    price: "₹ 5,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/414/800/102/w/750/1564414800_1_1_1.jpg?ts=1649765084342",
    productName: "SLIM-FIT SUIT WAISTCOAT",
    desc: "Slim-fit waistcoat with a V-neckline. Jetted pockets at the hip. Adjustable tabs at the back. Button-up front.",
    price: "₹ 3,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/611/800/102/w/750/1564611800_1_1_1.jpg?ts=1649764488529",
    productName: "SLIM FIT TAILORED SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets, rear welt pockets and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1564/610/420/102/w/750/1564610420_1_1_1.jpg?ts=1649771278063",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button details on the cuffs. Chest welt pocket and hip flap pockets. Inside pocket detail. Front button fastening.",
    price: "₹ 5,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1564/610/708/2/w/750/1564610708_1_1_1.jpg?ts=1649876099315",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button details on the cuffs. Chest welt pocket and hip flap pockets. Inside pocket detail. Front button fastening.",
    price: "₹ 5,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4499/800/708/103/w/750/4499800708_2_1_1.jpg?ts=1649843187977",
    productName: "SLIM FIT DOUBLE-BREASTED BLAZER",
    desc: "Slim-fit blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and flap hip pockets. Inside pocket detail. Back vents. Double-breasted buttoned front.",
    price: "₹ 7,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4536/878/251/102/w/750/4536878251_1_1_1.jpg?ts=1649762724236",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button detail on the cuffs. Welt pockets at the chest and flap pockets at the hip. Inside pocket detail. Front button fastening.",
    price: "₹ 7,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4166/878/251/2/w/750/4166878251_6_1_1.jpg?ts=1648196784719",
    productName: "SLIM FIT SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets, rear welt pockets and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1564/610/737/2/w/750/1564610737_1_1_1.jpg?ts=1649876169252",
    productName: "SLIM FIT SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with button details on the cuffs. Chest welt pocket and hip flap pockets. Inside pocket detail. Front button fastening.",
    price: "₹ 5,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/611/737/2/w/750/1564611737_6_1_1.jpg?ts=1643717882480",
    productName: "SLIM FIT TAILORED SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets, rear welt pockets and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/651/708/103/w/750/1564651708_1_1_1.jpg?ts=1649761637693",
    productName: "SLIM FIT TAILORED SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets, rear welt pockets and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4260/583/401/102/w/750/4260583401_1_1_1.jpg?ts=1649774729263",
    productName: "CHECK COMFORT SUIT TROUSERS",
    desc: "Slim fit trousers made of an elastic and comfortable fabric. Featuring front pockets, back buttoned welt pockets and a zip fly and top button fastening.",
    price: "₹ 4,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4553/941/250/2/w/750/4553941250_1_1_1.jpg?ts=1651587955199",
    productName: "PREMIUM TWILL SHIRT",
    desc: "Regular fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front.",
    price: "₹ 4,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4553/941/403/2/w/750/4553941403_1_1_1.jpg?ts=1651588069728",
    productName: "PREMIUM TWILL SHIRT",
    desc: "Regular fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front.",
    price: "₹ 4,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4551/942/250/2/w/750/4551942250_1_1_1.jpg?ts=1651236125058",
    productName: "PREMIUM TEXTURED SHIRT",
    desc: "Regular fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front.",
    price: "₹ 4,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/4552/945/400/2/w/750/4552945400_1_1_1.jpg?ts=1651579046338",
    productName: "PREMIUM STRIPED SHIRT",
    desc: "Regular fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front.",
    price: "₹ 4,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4022/530/800/102/w/750/4022530800_1_1_1.jpg?ts=1649767271289",
    productName: "TEXTURED SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Hip and chest welt pockets and an inside pocket. Central back vent at the hem. Front button fastening.",
    price: "₹ 6,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4023/530/800/2/w/750/4023530800_6_1_1.jpg?ts=1637915054482",
    productName: "TEXTURED SUIT TROUSERS",
    desc: "Slim fit trousers with front pockets and rear jetted pockets. Featuring turn-up hems and zip fly and top button fastening.",
    price: "₹ 2,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4022/540/704/102/w/750/4022540704_1_1_1.jpg?ts=1649767315777",
    productName: "TEXTURED SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves featuring cuffs with buttoned details. Hip welt pockets and inside pocket detail. Central back vent. Button-up front.",
    price: "₹ 6,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4438/494/512/102/w/750/4438494512_1_1_1.jpg?ts=1649756109251",
    productName: "SUIT BLAZER",
    desc: "Relaxed-fit blazer with a notched lapel collar. Long sleeves. Hip flap pockets and an inside pocket detail. Central back vent at the hem. Hidden button fastening at the front.",
    price: "₹ 8,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4439/494/512/102/w/750/4439494512_1_1_1.jpg?ts=1649756096115",
    productName: "SUIT TROUSERS",
    desc: "Straight-fit trousers. Front pockets and back flap pockets detail. Zip fly and concealed metal hook fastening.",
    price: "₹ 4,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4349/526/505/102/w/750/4349526505_1_1_1.jpg?ts=1649756097483",
    productName: "DOUBLE-BREASTED SUIT BLAZER",
    desc: "Blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Hip flap pockets and an inside pocket detail. Back vents. Double-breasted button fastening.",
    price: "₹ 8,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/4350/526/505/2/w/750/4350526505_6_2_1.jpg?ts=1643705251325",
    productName: "STRAIGHT SUIT TROUSERS",
    desc: "Straight fit trousers with front pockets, rear pockets and zip fly and top button fastening.",
    price: "₹ 4,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/420/401/103/w/750/1564420401_1_1_1.jpg?ts=1649757650280",
    productName: "BIRD’S-EYE SUIT BLAZER",
    desc: "Regular fit blazer with a notched lapel collar. Long sleeves with buttons on the cuffs. Chest welt pocket and flap hip pockets. Inside pocket detail. Back vent at the hem. Front button fastening.",
    price: "₹ 8,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1564/421/401/2/w/750/1564421401_6_1_1.jpg?ts=1644837901104",
    productName: "BIRD’S-EYE SUIT TROUSERS",
    desc: "Regular fit trousers with front pockets and back welt pockets. Zip fly and top button fastening.",
    price: "₹ 4,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2005/920/040/2/w/750/2005920040_6_1_1.jpg?ts=1636630813748",
    productName: "LEATHER CHELSEA BOOTS",
    desc: "Chelsea ankle boots made of leather with a glossy finish. Featuring matching elastic bands on the sides and a pull tab at the back. Rounded toe. Matching sole.",
    price: "₹ 7,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2417/920/040/2/w/750/2417920040_6_1_1.jpg?ts=1637147253451",
    productName: "SMART POINTED SHOES",
    desc: "Formal leather shoes with laces. Semi-round toe. Five-eyelet facing. Three-level welt detail on the sole. Cowboy-style heel.",
    price: "₹ 7,990.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5568/401/800/2/w/750/5568401800_6_2_1.jpg?ts=1646992804097",
    productName: "BASIC TEXTURED TIE",
    desc: "Wide tie made of a textured silk fabric.",
    price: "₹ 2,590.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/2/p/2823/301/800/2/w/750/2823301800_6_1_1.jpg?ts=1628689768370",
    productName: "TOPSTITCHED LEATHER BELT",
    desc: "Leather belt with topstitching along the edges. Fastening with metal buckle and loop.",
    price: "₹ 2,590.00",
    category: "Suits",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0706/729/803/2/w/750/0706729803_1_1_1.jpg?ts=1641307282489",
    productName: "COMFORT OVERSHIRT",
    desc: "Regular fit overshirt with a lapel collar, long sleeves and buttoned cuffs. Featuring chest patch pockets with flaps and snap-button fastening on the front.",
    price: "₹ 2,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/3046/488/916/2/w/750/3046488916_1_1_1.jpg?ts=1638372860019",
    productName: "CONTRAST BOMBER JACKET",
    desc: "Varsity jacket with padded interior. Collar and long sleeves with ribbed trims. Front pockets and inside pocket detail. Elastic hem. Fastens with snap buttons down the front.",
    price: "₹ 6,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/9632/348/405/2/w/750/9632348405_1_1_1.jpg?ts=1643209990022",
    productName: "GEOMETRIC JACQUARD BOMBER JACKET",
    desc: "Jacket with a ribbed collar. Long sleeves. Welt pockets at the hip. Elastic hem. Front zip fastening.",
    price: "₹ 5,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/3046/489/250/2/w/750/3046489250_1_1_1.jpg?ts=1641298009147",
    productName: "BOMBER JACKET WITH RIBBING",
    desc: "Varsity jacket with lightly padded interior. Double ribbed collar and long sleeves with elastic cuffs. Jetted pockets at the hip and inside pocket detail. Ribbed hem. Fastens with snap buttons down the front.",
    price: "₹ 6,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
    productName: "COLOUR BLOCK JACKET",
    desc: "Lightweight jacket with a collar and hood. Long sleeves with elastic cuffs. Hip welt pockets. Elastic hem. Zip-up front.",
    price: "₹ 3,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
    productName: "FAUX SUEDE JACKET",
    desc: "Collared jacket with long sleeves and buttoned cuffs. Featuring chest patch pockets with flaps, welt hip pockets and front zip fastening.",
    price: "₹ 5,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1538/404/500/2/w/750/1538404500_1_1_1.jpg?ts=1648032646381",
    productName: "BANDANNA PRINT JACKET",
    desc: "Collared jacket with lightly quilted interior. Long sleeves with buttoned cuffs. Hip welt pockets. Zip-up front.",
    price: "₹ 4,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/0/2/p/8062/433/800/2/w/750/8062433800_1_1_1.jpg?ts=1652864342079",
    productName: "ASYMMETRIC DENIM OVERSHIRT",
    desc: "Relaxed-fit collared overshirt featuring long sleeves with buttoned cuffs. Patch pockets with flaps on the chest. Faded-effect. Asymmetric hem with irregular trims at the back. Button-up front.",
    price: "₹ 4,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/8288/631/800/2/w/750/8288631800_1_1_1.jpg?ts=1641307227467",
    productName: "OVERSIZE TRENCH COAT",
    desc: "Loose-fitting trench coat with a notched lapel collar. Featuring long sleeves, a belt in the same fabric at the waist, hip welt pockets, a central back vent and double-breasted button fastening.",
    price: "₹ 7,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
    productName: "FLOWING TRENCH COAT",
    desc: "Relaxed fit trench coat with notched lapel collar and long sleeves. Welt pockets at the hip. Belt in the same fabric at the waist. Central back vent at the hem. Double-breasted front button fastening.",
    price: "₹ 7,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0840/406/401/2/w/750/0840406401_6_1_1.jpg?ts=1641229861722",
    productName: "RIPPED TAPERED JEANS",
    desc: "Tapered fit jeans featuring a five-pocket design and faded and ripped detail on the legs. Uneven hems. Zip fly and top button fastening.",
    price: "₹ 1,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
    productName: "RELAXED FIT CARROT FIT JEANS",
    desc: "Balloon-fit faded carrot jeans with five pockets and zip fly and top button fastening.",
    price: "₹ 3,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
    productName: "SLIM FIT JEANS WITH TOPSTITCHING",
    desc: "Slim fit jeans. Five-pocket design. Faded and ripped details with contrast topstitching. Zip fly and button fastening.",
    price: "₹ 4,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
    productName: "THE 90S SLIM FIT JEANS",
    desc: "Slim fit jeans. Five pockets. Faded effect. Turn-up hems. Front button fastening.",
    price: "₹ 2,490.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0840/477/800/2/w/750/0840477800_1_1_1.jpg?ts=1644568513376",
    productName: "RIPPED SLIM-FIT JEANS",
    desc: "Slim-fit jeans with a five-pocket design. Faded and ripped effect on the legs. Cropped length. Button fly.",
    price: "₹ 4,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
    productName: "SKINNY FIT JEANS",
    desc: "Faded-effect skinny jeans with a five-pocket design. Front zip fly and top button fastening.",
    price: "₹ 2,490.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/6688/406/800/2/w/750/6688406800_6_1_1.jpg?ts=1646319963150",
    productName: "RIPPED JEANS WITH TOPSTITCHING",
    desc: "Faded skinny jeans with a five-pocket design. Ripped detail with topstitching on the legs. Zip fly and top button fastening.",
    price: "₹ 4,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
    productName: "BASIC SLIM FIT JEANS",
    desc: "Faded slim fit jeans with five pockets. Front zip fly and top button fastening.",
    price: "₹ 2,490.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5575/425/427/2/w/750/5575425427_6_1_1.jpg?ts=1636705905399",
    productName: "SKINNY FIT JEANS",
    desc: "Faded-effect skinny jeans with a five-pocket design. Front zip fly and top button fastening.",
    price: "₹ 2,490.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
    productName: "RIPPED SKINNY JEANS",
    desc: "Skinny fit jeans featuring a five-pocket design, faded effect and ripped detail on the legs and front button fastening.",
    price: "₹ 2,990.00",
    category: "Join Life",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5584/304/250/2/w/750/5584304250_1_1_1.jpg?ts=1652177968429",
    productName: "BASKETBALL TRAINING T-SHIRT",
    desc: "Training T-shirt made of textured knit fabric with an all-over stretch.",
    price: "₹ 1,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5584/304/800/2/w/750/5584304800_1_1_1.jpg?ts=1652177969173",
    productName: "BASKETBALL TRAINING T-SHIRT",
    desc: "Training T-shirt made of textured knit fabric with an all-over stretch.",
    price: "₹ 1,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1368/301/250/2/w/750/1368301250_1_1_1.jpg?ts=1651484528087",
    productName: "TOP LAYER TOP",
    desc: "Top made of lightweight, flexible and comfortable technical fabric.",
    price: "₹ 2,890.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2966/301/401/2/w/750/2966301401_1_1_1.jpg?ts=1651484527390",
    productName: "STRAPPY CYCLING CULOTTES",
    desc: "Culottes made of a fabric with high elasticity.",
    price: "₹ 6,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5643/309/800/2/w/750/5643309800_1_1_1.jpg?ts=1649860731627",
    productName: "FADED-EFFECT T-SHIRT",
    desc: "T-shirt made in soft and lightweight fabric.",
    price: "₹ 1,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/0381/303/800/2/w/750/0381303800_1_1_1.jpg?ts=1649858087331",
    productName: "YOGA PRINT T-SHIRT",
    desc: "Stretch cotton T-shirt featuring a round neck, short sleeves and contrast print on the front.",
    price: "₹ 1,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5320/307/800/2/w/750/5320307800_1_1_1.jpg?ts=1643982265289",
    productName: "TEXTURED WORKOUT T-SHIRT",
    desc: "Training T-shirt made of lightweight technical fabric with a textured weave. Featuring a round neckline and short sleeves.",
    price: "₹ 1,890.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2651/400/401/2/w/750/2651400401_1_1_1.jpg?ts=1646051168646",
    productName: "TEXTURED T-SHIRT",
    desc: "Training top made of technical fabric with a highly elastic texture.",
    price: "₹ 2,790.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/0761/343/030/2/w/750/0761343030_1_1_1.jpg?ts=1646051676650",
    productName: "COLOUR BLOCK HOODED JACKET",
    desc: "Jacket made of technical fabric with a napped finish on the interior. Long sleeves. Chest pocket with thermo-sealed zip fastening. Front hip pockets. Asymmetric hem with extra length at the back. Reflective logo detail. Zip-up front with auto-lock pull tab.",
    price: "₹ 3,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5644/305/800/2/w/750/5644305800_1_1_1.jpg?ts=1643982390363",
    productName: "MOUNT FUJI PRINT HOODIE",
    desc: "Cotton hoodie with an adjustable hood and long sleeves. Featuring contrast prints on the front and back. Ribbed trims.",
    price: "₹ 2,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5584/305/250/2/w/750/5584305250_1_1_1.jpg?ts=1652177982846",
    productName: "BASKETBALL TRAINING SHORTS",
    desc: "Training shorts made of textured knit fabric with all-over elastic.",
    price: "₹ 2,590.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/5320/208/088/2/w/750/5320208088_1_1_1.jpg?ts=1646051633936",
    productName: "COLOUR BLOCK WINDBREAKER",
    desc: "Jacket made of lightweight technical fabric. Ergonomic design that adapts to movement. Designed to practice any sport outdoors.",
    price: "₹ 6,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/2651/404/800/2/w/750/2651404800_1_1_1.jpg?ts=1646052021867",
    productName: "TECHNICAL HOODED JACKET",
    desc: "Jacket made of technical fabric with a napped finish on the interior. Long sleeves. Hip pockets. Asymmetric hem with extra length at the back. Reflective logo detail. Zip-up front with auto-lock pull tab.",
    price: "₹ 5,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1591/401/800/2/w/750/1591401800_1_1_1.jpg?ts=1646052345180",
    productName: "COMBINED QUILTED GILET",
    desc: "Lightweight puffer gilet made of a combination of stretchy and breathable technical fabrics. Designed for outdoor workouts.",
    price: "₹ 4,590.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/1/p/1246/306/250/2/w/750/1246306250_6_2_1.jpg?ts=1653304531340",
    productName: "TRAINING TOWEL",
    desc: "Towel made of cotton fabric.",
    price: "₹ 1,590.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/1246/306/500/2/w/750/1246306500_2_1_1.jpg?ts=1652177969938",
    productName: "TRAINING TOWEL",
    desc: "Towel made of cotton fabric.",
    price: "₹ 1,590.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2956/300/515/2/w/750/2956300515_6_1_1.jpg?ts=1643817474324",
    productName: "1L / 34 OZ NALGENE BOTTLE",
    desc: "Wide-rim bottle that allows you to easily introduce ice cubes and clean it. Made of extremely shock-resistant material.",
    price: "₹ 2,590.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/3265/301/800/2/w/750/3265301800_6_1_1.jpg?ts=1651233654775",
    productName: "CYCLING TRAINING SOCKS",
    desc: "Short socks made of seamless mesh.",
    price: "₹ 990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/2/p/1281/301/555/2/w/750/1281301555_6_3_1.jpg?ts=1632826159081",
    productName: "2-PACK OF BOXERS",
    desc: "Pack of two pairs of boxers with an elastic waistband.",
    price: "₹ 1,790.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/0/2/p/2747/300/800/2/w/750/2747300800_6_4_1.jpg?ts=1632826174101",
    productName: "PREMIUM GPS COROS PACE 2 SPORTS WATCH",
    desc: "Lightweight, with many functions including in-race power estimate, training plans for various platforms and a triathlon profile.",
    price: "₹ 19,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/I/1/2/p/2330/920/001/2/w/750/2330920001_6_1_1.jpg?ts=1652784673766",
    productName: "SPUMEFOAM TECHNOLOGY ATHLETICZ RUNNING TRAINERS",
    desc: "Running trainers. Designed for running thanks to spumefoam technology that guarantees lightness and comfort. Breathable technical fabric upper with rubberised details. Six-eyelet facing. Sole in a combination of ombré colours. Non-slip soles, designed to give stability and balance.",
    price: "₹ 5,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2380/820/040/2/w/750/2380820040_6_1_1.jpg?ts=1652787034941",
    productName: "JOMA® RUNNING SNEAKERS",
    desc: "Joma® brand running sneakers from the Zara Athletics collection. Five-eyelet facing. Combination of materials and monochrome fabrics. Heel pull tab with number detail: ZARA letters are written with numbers that match each letter in the Latin alphabet (26,1,18,1). The lightweight sole has special technology for greater comfort: it is breathable, designed to absorb impact and designed to have better stability during exercise.",
    price: "₹ 7,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/2/p/2382/820/009/2/w/750/2382820009_6_1_1.jpg?ts=1632843068238",
    productName: "JOMA® RUNNING SNEAKERS",
    desc: "Joma® brand running sneakers from the Zara Athletics collection. Seven-eyelet facing. Pull tab on the heel. The lightweight sole has special technology for improved comfort: it is breathable, designed to absorb impact and designed to have better stability during exercise.",
    price: "₹ 7,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/2381/820/032/2/w/750/2381820032_1_1_1.jpg?ts=1632939055001",
    productName: "JOMA® RUNNING SNEAKERS",
    desc: "Joma® brand running sneakers from the Zara Athletics collection. Knit fabric. Seven-eyelet facing. Pull tab on the tongue and heel. The lightweight sole has special technology for improved comfort: it is breathable, designed to absorb impact and designed to have better stability during exercise.",
    price: "₹ 7,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2350/820/203/2/w/750/2350820203_6_1_1.jpg?ts=1652785424663",
    productName: "RUNNING SPUMEFOAM TECHNOLOGY SNEAKERS",
    desc: "Running sneakers with a spumefoam sole, a technology that guarantees lightness and comfort. Featuring a breathable technical fabric upper with rubberised details, a five-eyelet facing and non-slip soles designed to give stability and balance.",
    price: "₹ 5,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/1/2/p/2350/820/008/2/w/750/2350820008_6_1_1.jpg?ts=1652784787768",
    productName: "RUNNING SPUMEFOAM TECHNOLOGY SNEAKERS",
    desc: "Running sneakers with a spumefoam sole, a technology that guarantees lightness and comfort. Featuring a breathable technical fabric upper with rubberised details, a five-eyelet facing and non-slip soles designed to give stability and balance.",
    price: "₹ 5,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2021/I/1/1/p/2730/820/040/2/w/750/2730820040_1_1_1.jpg?ts=1632938751815",
    productName: "SPUMEFOAM SLIDE SANDALS",
    desc: "Single-piece slide sandals with our new spumefoam technology to guarantee maximum lightness and comfort. Black non-slip track soles. Sandals that give comfort and rest after exercise.",
    price: "₹ 2,290.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/5320/312/800/2/w/750/5320312800_1_1_1.jpg?ts=1646738224961",
    productName: "TRAINING SHORTS",
    desc: "Training shorts made of technical fabric with elastic in every direction. Designed for all types of training.",
    price: "₹ 2,890.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2966/302/401/2/w/750/2966302401_1_1_1.jpg?ts=1651237104910",
    productName: "CYCLING TRAINING TOP",
    desc: "Top made of lightweight technical fabric with an open texture for better breathability.",
    price: "₹ 2,990.00",
    category: "Zara Athleticz",
  },
  {
    image_url:
      "https://static.zara.net/photos///2022/V/0/2/p/2966/302/800/2/w/750/2966302800_1_1_1.jpg?ts=1651237103008",
    productName: "CYCLING TRAINING TOP",
    desc: "Top made of lightweight technical fabric with an open texture for better breathability.",
    price: "₹ 2,990.00",
    category: "Zara Athleticz",
  },
];
