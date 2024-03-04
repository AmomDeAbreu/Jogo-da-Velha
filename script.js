const column = [...document.querySelectorAll(".coluna")];
const line = [...document.querySelectorAll(".linha")];

let matriz = new Array(3);
for(let i = 0; i < 3; i++){
    matriz[i] = new Array(3);
}

for(i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        matriz[i][j] = 0;
    }
}

column.map((el,i) =>{
    el.addEventListener("click", () =>{
        el.classList.add("clicado");
        el.innerHTML = "X";
        console.log(el)
        if(i == 0)
            matriz[0][0] = 1;
        else if(i == 1){
            matriz[0][1] = 1;
        } else if(i == 2){
            matriz[0][2] = 1;
        } else if(i == 3){
            matriz[1][0] = 1;
        } else if(i == 4){
            matriz[1][1] = 1;
        } else if(i == 5){
            matriz[1][2] = 1;
        } else if(i == 6){
            matriz[2][0] = 1;
        } else if(i == 7){
            matriz[2][1] = 1;
        } else if(i == 8){
            matriz[2][2] = 1;
        }
        console.log(matriz)
        if(matriz[0][0] == 1 && matriz[0][1] == 1 && matriz[0][2] == 1)
            console.log('óia só')
    })

})
