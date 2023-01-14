function update(selects, btn1, btn2, txt){
    switch(selects){
        case "2":
            txt.textContent = "Alguien comienza a moverse";
            btn1.textContent = "Correr";
            btn2.textContent = "Quedarse quieto";
            break;

        case "22":
        case "2121":
        case "2111":
        case "21122":
        case "112":
            location.href = "../scenes/gameover.html";
            break;

        case "21":
            txt.textContent = "Arriba o abajo";
            btn1.textContent = "Arriba";
            btn2.textContent = "Afuera";
            break;

        case "211":
        case "212":
            txt.textContent = "Alguien grita";
            btn1.textContent = "Volver";
            btn2.textContent = "Continuar";
            break;

        case "2122":
        case "12":
        case "211211":
            location.href = "../scenes/arrs.html";
            break;

        case "2112":
            txt.textContent = "Alguien sube";
            btn1.textContent = "Esconderte";
            btn2.textContent = "Encararlo";
            break;

        case "21121":
            txt.textContent = "Donde?";
            btn1.textContent = "Debajo de la cama";
            btn2.textContent = "Atras de la puerta";
            break;

        case "211212":
        case "111":
            location.href = "../scenes/won.html";
            break;
        
        case "1":
            txt.textContent = "Todos entran en panico y van a lugares distintos";
            btn1.textContent = "Subir";
            btn2.textContent = "Salir";
            break;

        case "11":
            txt.textContent = "Encuentras a alguien desmayado en el camino";
            btn1.textContent = "Habitacion Izquierda";
            btn2.textContent = "Habitacion Derecha";
            break;

        


    }
}


var selects = "";



document.addEventListener('DOMContentLoaded', function(){   

    const txt = document.getElementById("historia");

    const btn1 = document.getElementById("option1");
    const btn2 = document.getElementById("option2");

    btn1.onclick = function (){
        selects += "1";
        update(selects, btn1, btn2, txt);
    }

    btn2.onclick = function (){
        selects += "2";
        update(selects, btn1, btn2, txt);
    }

})

