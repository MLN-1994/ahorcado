//pagina de inicio, direcciones a el juego y agregar palabra
let boton = document.getElementById("boton")
let addWord = document.getElementById("add-word")

boton.addEventListener("click", redirect)
function redirect() {
    window.location.href = "/game.html"
}
addWord.addEventListener("click", goToAdd)
function goToAdd() {
    window.location.href = "/addWord.html"
}


//a partir de aca corresponde al game
const usedLettersElement = document.getElementById("usedLetters")
const wordContainer = document.getElementById("wordContainer")
const startButton = document.getElementById("startButton")

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
]

let selectedWord
let usedLetters
let mistake
let hits

const drawHangMan = () => {
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.sillStyle = "#8be407";
    ctx.fillRect(0,7,4,1);
    ctx.fillRect(1,0,1,8);
    ctx.fillRect(2,0,3,1);
    ctx.fillRect(4,1,1,1);
}

startButton.addEventListener("click", startGame)
const startGame =()=>{
    usedLetters = []
    mistake = 0
    hits = 0
    wordContainer.innerHTML=""
    usedLettersElement.innerHTML=""
    startButton.style.display = "none"
    drawHangMan()
}

