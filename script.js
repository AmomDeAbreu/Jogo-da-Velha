const elementos = [...document.querySelectorAll(".linha")];
const res = document.querySelector("#res");



function verficador(matrix,index_line, index_colum, win){
    matrix[index_line][index_colum] = 1;
    console.log(matrix)
    if( matrix[index_line][0] == matrix[index_line][1] && matrix[index_line][0] == matrix[index_line][2]){
        res.innerHTML = win + "é o vencedor!";
    }  
    if (matrix[0][index_colum] == matrix[1][index_colum] && matrix[0][index_colum] == matrix[2][index_colum]){
        res.innerHTML = win + "é o vencedor!";
    } 
    if((matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2] || matrix[0][2] == matrix[1][1] && matrix[2][0] == matrix[1][1]) && matrix[1][1] == 1){
        res.innerHTML = win + " é o vencedor!";

    }
}


let time = 0;
let matriz_x = new Array(3);
let matriz_o = new Array(3);
for(let i = 0; i < 3; i++){
    matriz_x[i] = new Array(3);
    matriz_o[i] = new Array(3);
}
for(i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        matriz_x[i][j] = 3;
        matriz_o[i][j] = 3;
    }
}
elementos.map((el, i_l) => {
    console.log()
    const colunas_separadas = [...el.children]
    colunas_separadas.map((e, i_c) => {
        e.addEventListener("click", () => {
            console.log(el);
            e.classList.add("clicado");
            if(time == 0){
                e.innerHTML = "X";
                time = 1
                verficador(matriz_x, i_l, i_c, "X");
            } else {
                e.innerHTML = "O";
                time = 0;
    
                verficador(matriz_o, i_l, i_c, "O");
            }
        })


    })
})

