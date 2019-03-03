//
$(document).ready(function(){
    $("#player1 #roll1").click(function(){
        //var roll = Math.floor(Math.random() * 6) + 1)
        var roll=$("#scoreboard1 h1").text(Math.floor(Math.random() * 6) + 1)
        scores1.push(roll);
    })
})
$(document).ready(function(){
    $("#player2 #roll2").click(function(){
        //var roll = Math.floor(Math.random() * 6) + 1)
        var roll=$("#scoreboard2 h1").text(Math.floor(Math.random() * 6) + 1)
        scores1.push(roll);
    })
})






$(document).ready(function(){
    $("").click(function(){
        scores1.each(function(){
            var total = scores1[0]
        })
    })
})

