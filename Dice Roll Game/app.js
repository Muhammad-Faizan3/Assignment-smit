function rollDice(){

let dice = document.querySelectorAll(".dice")

dice.forEach(function(img){
img.style.display = "none"
})

let random = Math.floor(Math.random()*6)

dice[random].style.display = "inline"

dice[random].classList.add("roll")

setTimeout(function(){
dice[random].classList.remove("roll")
},500)

}