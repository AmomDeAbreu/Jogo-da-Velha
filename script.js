const elementos = [...document.querySelectorAll(".linha")];


let matriz = new Array(3);
for(let i = 0; i < 3; i++){
    matriz[i] = new Array(3);
}

for(i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        matriz[i][j] = 0;
    }
}


function verficador(array,index){
        array.push(index);
    console.log(array)
    if(array[0] == array[1] && array[0] == array[2]){
        console.log("funcionaaaaaaa");
    } else if (array[0] == 0 && array[1] == 1 && array[2] == 2){
        console.log("funcionaaaaaa")
    }
}

let time = 0;
let array_colunas_clicadas_x = [];
let array_colunas_clicadas_o = []
elementos.map((el) => {
    let column1_count = 0;
    const colunas_separadas = [...el.children]
    colunas_separadas.map((e, i) => {
        e.addEventListener("click", () => {
            e.classList.add("clicado");
            if(time == 0){
                e.innerHTML = "X";
                time = 1
                verficador(array_colunas_clicadas_x, i);
            } else {
                e.innerHTML = "O";
                time = 0;
                verficador(array_colunas_clicadas_o, i);
            }
        })


    })
})

