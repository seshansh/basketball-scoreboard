
 let score = 0
 let score1 = 0
function newPoint1(){
    score += 1
    document.querySelectorAll(".points")[0].textContent = score
}

function newPoint2(){
    score += 2
    document.querySelectorAll(".points")[0].textContent = score
}

function newPoint3(){
    score += 3
    document.querySelectorAll(".points")[0].textContent = score
}

function new2point1(){
    score1+=1
    document.querySelectorAll(".points")[1].textContent = score1
}

function new2point2(){
    score1+=2
    document.querySelectorAll(".points")[1].textContent = score1
}

function new2point3(){
    score1+=3
    document.querySelectorAll(".points")[1].textContent = score1
}

function newGame(){
    score = 0
    score1 = 0
    document.querySelectorAll(".points")[0].textContent = score
    document.querySelectorAll(".points")[1].textContent = score1
    
}

let team1 = "Home"
let team2 = "Guest"

function gameOver(){
    document.getElementById("teamName1").textContent = team1
    document.getElementById("teamName2").textContent = team2
    document.getElementById("teamResult1").textContent = score
    document.getElementById("teamResult2").textContent = score1  
}
