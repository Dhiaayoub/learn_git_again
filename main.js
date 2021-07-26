

// var prix = document.getElementsById('score');
// var somme = 0 ;
// var num = document.getElementsById('nombre');
// var i =0 ;
// function Add(x){
//     i++ ;
//     var y = document.getElementsById(x);
//     somme += Number(y,value);
//     num.innerHTML = Number(i);
//     prix.innerHTML = somme ;
// }
            
var score = 0;
function bananeClick(signe){
  
score=score+(Number(signe));
document.getElementById("score").innerHTML = score;
}