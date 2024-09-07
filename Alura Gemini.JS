function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa =="") {
        section.innerHTML = "Informação não localizada"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()


        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descrição-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Clique e saiba mais</a>
            </div>`;
        }

    }

    if (!resultados){
        resultados = "<p></p>informação não localizada.</p>"
    }

    section.innerHTML = resultados

}

