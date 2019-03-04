var scores =[]

var total = 0;
function getScore (){
	for (var value = 0; value > 1; scores.push(value)){

	//var value = scores.push(parseInt(prompt("Please enter a value")))
	//scores.push(value)
	scores.forEach(function(score){
        return(total += score);
    })
}