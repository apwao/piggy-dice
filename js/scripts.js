// Business logic
 function Player(name){
    this.name = name;
}
Player.prototype.view_player = function(){
    this.name
}

function Roll(rollValue){
    this.rollValue = rollValue;
    this.rollNumbers =[];
    }
Roll.prototype.get_roll = function(){
    this.rollValue = Math.floor(Math.random() * 6) + 1;
    }
Roll.prototype.collect_rolls = function(){
    this.rollNumbers.push(rollValue)
}
Roll.prototype.total_score= function(){
    var total = 0;
    rollNumbers.each(function(score){
        total += score
    })
}
Roll.prototype.hold = function(){
    if (this.rollValue > 1){
        alert("your turn is over, pass to the next player")
    }
}
 var total1=0;
 var total2=0;  

//User Logic
//Display roll value on the dice for player1
$(document).ready(function(){
    $("#player1 #roll1").click(function(){
        //Displays roll value on roll board
       var rollPlayer1 = $("#scoreboard1 h1").text(Math.floor(Math.random() * 6) + 1)
        //Retrieves the value on the dice
        var rollValue1 = parseInt($("#scoreboard1 h1").text())
            if (rollPlayer1 === 1){
                $("#displayTotal1 #holdScore1").text("0")   
            }
            else{
            total1 += rollValue1;
            $("#displayTotal1 #holdScore1").text(total1)}
    })
    
})
//Display roll value on dice for player2
$(document).ready(function(){
    $("#player2 #roll2").click(function(){
        var rollPlayer2 = $("#scoreboard2 h1").text(Math.floor(Math.random() * 6) + 1)
        var rollValue2 = parseInt($("#scoreboard2 h1").text())
        total2 = total2+=rollValue2;
        $("#displayTotal2 #holdScore2").text(total2)
        if (total2 === 100){
            $("#displayTotal2 #holdScore2").text("You are the winner!")
        }
    
    })
})
 // Implement hold functionality for player1
    $("#player1 #hold1").click(function(){
        if (total2 === 100){
         alert("Your turn is over! pass to the next player")}
})

