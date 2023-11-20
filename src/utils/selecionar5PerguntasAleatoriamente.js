export function selecionar5PerguntasAleatoriamente() {
    let perguntas = []

    while (perguntas.length < 5) {
        const indicePerguntaAdicionar = Math.floor(Math.random() * 10)

        if (!perguntas.some(pergunta => indicePerguntaAdicionar === pergunta)) {
            perguntas = [...perguntas, indicePerguntaAdicionar]
        }
    }

    return perguntas
}