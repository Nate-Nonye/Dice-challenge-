var name = prompt("What's Your Name");
document.querySelectorAll("p")[0].innerHTML = name;
//img1
var randomImageNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice" + randomImageNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
//img1 code end

//image2code
var randomImageNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "images/dice" + randomImageNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
//image2code end

//conditions code
if (randomImageNumber1 > randomImageNumber2) { document.querySelector("h1").innerHTML = "🏁" + name + " Wins";

}else if (randomImageNumber2 > randomImageNumber1) {  document.querySelector("h1").innerHTML = " Player 2 Wins 🏁";

}else { document.querySelector("h1").innerHTML = " It's a Draw";

}
