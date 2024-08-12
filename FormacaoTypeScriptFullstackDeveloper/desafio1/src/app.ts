const nomes: Array<String> = ["Eduardo", "Carol", "Juan", "Alícia", "Valmir", "Fátima", "Cida", "Daniel", "Sônia", "Anselmo"]

for(let i = 0; i < nomes.length; i++) {
    if(i === 2 || i === 6 || i === 8) {
        console.log(nomes[i])
    }
}