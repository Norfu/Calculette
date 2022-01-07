function functionAdd(value) {
    if (document.getElementById("operateur").innerHTML == false) {
        if(document.getElementById("nombreX").innerHTML.length < 8){
        document.getElementById("nombreX").innerHTML += value;
        }
    }
    else {
        if(document.getElementById("nombreY").innerHTML.length < 8){
        document.getElementById("nombreY").innerHTML += value;
        }
    }
    
}



function functionOperateur(value) {
    document.getElementById("operateur").innerHTML = value;

}

function functionResult() {
    let x = document.getElementById("nombreX").innerHTML;
    let y = document.getElementById("nombreY").innerHTML;

    if (document.getElementById("operateur").innerHTML == '+') {
        
        document.getElementById("nombreX").innerHTML = ((+x) + (+y));
    }
    if (document.getElementById("operateur").innerHTML == '-') {
        document.getElementById("nombreX").innerHTML = ((+x) - (+y));
    }
    if (document.getElementById("operateur").innerHTML == '*') {
        document.getElementById("nombreX").innerHTML = ((+x) * (+y));
    }
    if (document.getElementById("operateur").innerHTML == '/') {
        document.getElementById("nombreX").innerHTML = ((+x) / (+y));
    }
    document.getElementById("nombreY").innerHTML = '';
    document.getElementById("operateur").innerHTML ='';
    
}

function functionCE() {
    document.getElementById("nombreX").innerHTML = '';
    document.getElementById("nombreY").innerHTML = '';
    document.getElementById("operateur").innerHTML = '';
    

}

function functionC() {
    if (document.getElementById("nombreY").innerHTML != '') {
        document.getElementById("nombreY").innerHTML = '';
    } else if (document.getElementById("operateur").innerHTML != '') {
        document.getElementById("operateur").innerHTML = '';
    } else if (document.getElementById("nombreX").innerHTML != '') {
        document.getElementById("nombreX").innerHTML = '';
    }
    document.getElementById("resultat").innerHTML = '';
}

function functionDelete() {
    if (document.getElementById("nombreY").innerHTML != '') {
        document.getElementById("nombreY").innerHTML = document.getElementById("nombreY").innerHTML.slice(0, -1);
    } else if (document.getElementById("operateur").innerHTML != '') {
        document.getElementById("operateur").innerHTML = document.getElementById("operateur").innerHTML.slice(0, -1);
    } else if (document.getElementById("nombreX").innerHTML != '') {
        document.getElementById("nombreX").innerHTML = document.getElementById("nombreX").innerHTML.slice(0, -1);
    }
}

function functionNegativ() {
    if (document.getElementById("nombreY").innerHTML != '') {
        document.getElementById("nombreY").innerHTML = parseInt(document.getElementById("nombreY").innerHTML, 10) * -1
    } else if (document.getElementById("nombreX").innerHTML != '') {
        document.getElementById("nombreX").innerHTML = parseInt(document.getElementById("nombreX").innerHTML, 10) * -1
    }
}

function functionComa() {
    
    var virgule = false;
    
    if (document.getElementById("operateur").innerHTML == ''){
        for (i=0;i<document.getElementById("nombreX").innerHTML.length;i++){
            if (document.getElementById("nombreX").innerHTML[i] == '.'){
                virgule=true;
            }
        }
        if (virgule==false) {
            document.getElementById("nombreX").innerHTML += '.';
        }
    }else{
        for (i=0;i<document.getElementById("nombreY").innerHTML.length;i++){
            if (document.getElementById("nombreY").innerHTML[i] == '.'){
                virgule=true;
            }
        }
        if (virgule==false) {
            document.getElementById("nombreY").innerHTML += '.';
        }
    }
    
}