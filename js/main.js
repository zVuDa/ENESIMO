 "use strict"
 const hide = document.querySelector(".hide");

//BTN NEXT 50%
 document.querySelector("#next1").onclick = e => {
     e.preventDefault();
     let indice = 0;
     let hijos = e.target.parentElement.parentElement.children;
     for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
         if (hijos[i].classList.contains('hide') !== true) {
             hijos[i].classList.add('hide');
             indice = i;
             if (indice === 8) {
                 indice = 0;
             }

         }
     }
     for (let i = indice; i < indice + 3; i++) {
         hijos[i].classList.remove('hide');

     }
 }
 //BTN NEXT 40%
 document.querySelector("#next2").onclick = e => {
    e.preventDefault();
    let indice = 0;
    let hijos = e.target.parentElement.parentElement.children;
    for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
        if (hijos[i].classList.contains('hide') !== true) {
            hijos[i].classList.add('hide');
            indice = i;
            if (indice === 8) {
                indice = 0;
            }

        }
    }
    for (let i = indice; i < indice + 3; i++) {
        hijos[i].classList.remove('hide');

    }
}
 //BTN NEXT 30%
 document.querySelector("#next3").onclick = e => {
    e.preventDefault();
    let indice = 0;
    let hijos = e.target.parentElement.parentElement.children;
    for (let i = 0, tam = hijos.length; i < tam - 2; i++) {
        if (hijos[i].classList.contains('hide') !== true) {
            hijos[i].classList.add('hide');
            indice = i;
            if (indice === 8) {
                indice = 0;
            }

        }
    }
    for (let i = indice; i < indice + 3; i++) {
        hijos[i].classList.remove('hide');

    }
}
 //BTN PREV 50%
 document.querySelector("#prev1").onclick = e => {
    e.preventDefault();
    let indice = 8;
    let hijos = e.target.parentElement.parentElement.children;
    console.log(hijos[8])
    for (let i = 8, tam = hijos.length; i < tam; i--) {
        if (hijos[i].classList.contains('dfgd') == true) {
            hijos[i].classList.remove('hide');
            indice = i;
            console.log([i])
        if(hijos[i].classList.contains(`ljkñ`) == true){hijos[i].classList.add('hide')}
            if (indice === 0) {
                indice = 8;
            }

        }
    }
    for (let i = indice; i > indice + 3; i--) {
       if (hijos[i].classList.contains('hide') !== true){hijos[i].classList.add('hide');};

    }
}
    