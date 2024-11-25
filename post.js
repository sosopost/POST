document.addEventListener("DOMContentLoaded", async() => {
    try {
        var response = await fetch("post.php");
        if (!response.ok) throw new Error("Erro na conexão com servidor.");

        var dados = await response.json();
        console.log("Dados recebidos:", dados);

        var lista = [{
                imagem: "pucpr.jpeg"
            },
            {
                imagem: "ufpr.png"
            },
            { 
                imagem: "ufsc.jfif"
            }];

        for (var i = 0; i < dados.length; i++) {
            var post = dados[i];
            var card = `<div class="card-post">
                <div class="card-usuario">
                    ${post.nome}
                </div>
                <div class="card-titulo">
                    ${post.titulo}
                </div>
                <div class="card-imagem">
                    <img src=${lista[i].imagem} />
                </div>
                <div class="card-curtida">
                    <div class="card-icone-curtida">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="card-numero-curtida">
                        ${post.total_curtidas}
                    </div>
                </div>
            </div>`;
            document.getElementById("posts").innerHTML += card;
        }

    } catch (error) {
        console.error("Erro:", error.message);
    }
});
