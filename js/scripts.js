
var total1=0;
var total2=0;
var scores1=[]
var scores2 =[]
var getScore1 =scores1.forEach(function(score){
    total1 += score
})
//User Logic
//Display roll value on the dice for player1
$(document).ready(function(){
    $("#player1 #roll1").click(function(){
        //Displays roll value on roll board
        var rollPlayer1 =$("#scoreboard1 h1").text(Math.floor(Math.random() * 6) + 1)
        //Retrieves the value on the dice
        var rollValue1 = $("#scoreboard h1").text()
        scores1.push(rollValue1)
        $("#displayTotal1 #holdScore").text(total1)
        
    })
})
//Display roll value on dice for player2
$(document).ready(function(){
    $("#player2 #roll2").click(function(){
        //var roll = Math.floor(Math.random() * 6) + 1)
        var rollPlayer2=$("#scoreboard2 h1").text(Math.floor(Math.random() * 6) + 1)
        var rollValue2 = $("#scoreboard2 h1").text()
        scores2.push(rollPlayer2);
    
    })
})

// // Implement hold functionality for player1
//  $(document.ready(function(){
//     $("#player1 #hold1").click(function(){
//         var holdPlayer1=$("#displayTotal1 #holdScore").text(getScore1()) 
//     })
//$(document).ready(function(){
    $("#player1 #hold1").click(function(){
         $("#displayTotal1 #holdScore").text(total1)
})








// //         var holdPlayer1= $("#scoreboard1 h1").text()
// //          alert("yipee ki yaay");
// //      })
// //  })

// // //Implement hold value for player2






// $(document).ready(function(){
//     $("").click(function(){
//         scores1.each(function(){
//             var total = scores1[0]
//         })
//     })
// })

