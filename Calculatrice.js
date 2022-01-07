function functionAdd(value){
    if(document.getElementById("operateur").innerHTML == false){
        document.getElementById("nombreX").innerHTML += value;}
    else{
        document.getElementById("nombreY").innerHTML += value;
    }
    document.getElementById("resultat").innerHTML = '';
}



function functionOperateur(value){
    document.getElementById("operateur").innerHTML = value;
    
}

function functionResult(){
    let x = document.getElementById("nombreX").innerHTML ;
    let y = document.getElementById("nombreY").innerHTML ;

    if (document.getElementById("operateur").innerHTML == '+'){
        document.getElementById("nombreX").innerHTML = null ;
        document.getElementById("nombreY").innerHTML = null ;
        document.getElementById("operateur").innerHTML = null ;
        document.getElementById("resultat").innerHTML = ((+x)+(+y));
    }
    if (document.getElementById("operateur").innerHTML == '-'){
        document.getElementById("nombreX").innerHTML = null ;
        document.getElementById("nombreY").innerHTML = null ;
        document.getElementById("operateur").innerHTML = null ;
        document.getElementById("resultat").innerHTML = ((+x)-(+y));
    }
    if (document.getElementById("operateur").innerHTML == '*'){
        document.getElementById("nombreX").innerHTML = null ;
        document.getElementById("nombreY").innerHTML = null ;
        document.getElementById("operateur").innerHTML = null ;
        document.getElementById("resultat").innerHTML = ((+x)*(+y));
    }
    if (document.getElementById("operateur").innerHTML == '/'){
        document.getElementById("nombreX").innerHTML = null ;
        document.getElementById("nombreY").innerHTML = null ;
        document.getElementById("operateur").innerHTML = null ;
        document.getElementById("resultat").innerHTML = ((+x)/(+y));
    }
}

function functionCE(){
    document.getElementById("nombreX").innerHTML = null ;
    document.getElementById("nombreY").innerHTML = null ;
    document.getElementById("operateur").innerHTML = null ;
    document.getElementById("resultat").innerHTML = null;

}

function functionC(){
    if (document.getElementById("nombreY").innerHTML != ''){
        document.getElementById("nombreY").innerHTML = '';
    }else if(document.getElementById("operateur").innerHTML != ''){
        document.getElementById("operateur").innerHTML = '';
    }else if (document.getElementById("nombreX").innerHTML != ''){
        document.getElementById("nombreX").innerHTML = '';
    }
    document.getElementById("resultat").innerHTML = '';
}
    
function functionDelete(){
    if (document.getElementById("nombreY").innerHTML != ''){
        document.getElementById("nombreY").innerHTML=document.getElementById("nombreY").innerHTML.slice(0,-1);
    }else if(document.getElementById("operateur").innerHTML != ''){
        document.getElementById("operateur").innerHTML=document.getElementById("operateur").innerHTML.slice(0,-1);
    }else if (document.getElementById("nombreX").innerHTML != ''){
        document.getElementById("nombreX").innerHTML = document.getElementById("nombreX").innerHTML.slice(0,-1);
    }
}

function functionNegativ(){
    if (document.getElementById("nombreY").innerHTML !=''){
        document.getElementById("nombreY").innerHTML = parseInt(document.getElementById("nombreY").innerHTML,10)* -1
    }else if (document.getElementById("nombreX").innerHTML != ''){
        document.getElementById("nombreX").innerHTML = parseInt(document.getElementById("nombreX").innerHTML,10)* -1
    }
}

function functionComa(){
    if (document.getElementById("nombreY").innerHTML !=''){
        document.getElementById("nombreY").innerHTML = parseInt(document.getElementById("nombreY").innerHTML,10)*1
    }else if (document.getElementById("nombreX").innerHTML != ''){
        document.getElementById("nombreX").innerHTML = parseInt(document.getElementById("nombreX").innerHTML,10)* -1
    }
}