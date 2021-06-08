var tableau = [];
var i = 0;

document.getElementById("envoyer-1").addEventListener("click", function(){
    var taille = document.getElementById("taille").value;
    document.getElementById("envoyer-2").addEventListener("click", function(){
        if(i < taille){
            var valeur = document.getElementById("tab").value;
            tableau.push(valeur);
            i++;
        }else{
            document.getElementById("envoyer-2").value="Generate" ; 
            document.getElementById("envoyer-2").addEventListener("mouseover", function(){
                document.getElementById("moyenne").textContent=moyenne(tableau);
                document.getElementById("variance").textContent=variance(tableau);
                document.getElementById("ecart-type").textContent=ecarType(tableau);
            })
        }
    })
})

document.getElementById("reset-1").addEventListener("click", function(){
    document.location.reload(true);
})

document.getElementById("reset-2").addEventListener("click", function(){
    document.location.reload(true);
})


function moyenne(tableau){
    var sum = 0;
    for(var i = 0; i<tableau.length; i++){
        sum+= parseInt(tableau[i]);
    }
    var avg = sum/tableau.length;
    return avg;
}

function variance(tableau){
    var moy = moyenne(tableau);
    var varia = 0;
    for(var i = 0; i<tableau.length; i++){
        varia+= (parseInt(tableau[i]) - moy)*(parseInt(tableau[i]) - moy);
    }
    
    return varia/tableau.length;
    
}

function ecarType(tableau){
    return Math.sqrt( variance(tableau)) ;
}










