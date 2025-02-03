function pesquisar() {
    // Obtém o elemento HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML ="<p>Nada foi encontrado. Você não buscou pelo nome ou tag do jogo</p>"
        return

        campoPesquisa = campoPesquisa.toLowerCase();
    }

    // Variável para armazenar a string HTML que contém os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre a lista de dados.
    for (let dado of dados) { 
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()
        // se título includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada item de resultado.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
            `;
        };
    };

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
        return
    }

    // Define o conteúdo da seção de resultados com o HTML gerado.
    section.innerHTML = resultados
};