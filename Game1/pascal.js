var bool = true;
var bool1 = true;


document.getElementById("valider").addEventListener("click", function(){
    if(bool == true){
        var taille = document.getElementById("infos").value;
        afficherTriangle(TrianglePascal(taille));
        bool=false; //Pour qu'on puisse afficher le triangle qu'une seule fois 
    }
});

document.getElementById("valider-1").addEventListener("click", function(){
    if(bool1 == true){
        var taille = document.getElementById("stern").value;
        afficherStern(Stern(taille));
        bool1 = false;
    }
});

document.getElementById("retry").addEventListener("click", function(){
    document.location.reload(true);
})

document.getElementById("retry-1").addEventListener("click", function(){
    document.location.reload(true);
})

function TrianglePascal(taille){
    var tab = new Array();
    for(var i =0; i<taille; i++){
        tab[i] = new Array();
        for(var j=0; j<i+1; j++){
            if(j == 0 || j == i){
               tab[i][j] = 1; 
            }else{
                tab[i][j] = tab[i-1][j]+tab[i-1][j-1];
            }
            
        }
    }
   
    return tab;
}

function afficherTriangle(tab){
    for(var i = 0; i<tab.length; i++){
        for(var j = 0; j<tab[i].length; j++){
            document.getElementById("res").innerHTML += tab[i][j] +" ";
        }
        document.getElementById("res").innerHTML += "<br>";
    }
}



function Stern(taille){
    var tab1 = TrianglePascal(taille+100);
    var tab2 = [];
    tab2.push(1);
    tab2.push(1);
    tab2.push(2);
    tab2.push(1);
    
    for(var i=4; i<taille; i++){
        var sum = 0;
        var newval = Math.trunc(i/2);
        for(var j=0; j<newval+1; j++){
            sum += tab1[i-j][j]%2;
        }
        tab2.push(sum);
    }
    return tab2;
}

function afficherStern(tab){
    for(var i=0; i<tab.length; i++){
        document.getElementById("stern-res").innerHTML += "s"+(i+1)+"= "+tab[i]+" ";
    }
}















