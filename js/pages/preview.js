'use strict'


import { getAluno, getAlunos, getCursos, getAlunoCurso, getAlunoStatus } from "../methods.js"


const carregarCurso = async function () {
    try {
        let result = document.getElementById('result')
        result.replaceChildren()

        let listaCurso = await getCursos()
        criarPreview(listaCurso)
    } catch (erro) {
        alert("ERRO: AO CARREGAR DADOS!!")
    }
}

const criarPreview = async function (dados) {
 
    let result = document.getElementById("result")
    result.replaceChildren()

    // Aqui irei criar a div principal aonde vai ficar armazenado todos os dados da tela principal que vai aparecer sempre primeiro
    let div_principal = document.createElement("div")
    div_principal.className = "caixa-principal"

    // Aqui irei criar a div aonde irei centralizar o texto principal, juntamente com uma imagem dos aparelhos
    let div_centralizar_itens = document.createElement("div")
    div_centralizar_itens.className = "centralizar"

    let span_texto_personalizado = document.createElement("span")
    span_texto_personalizado.className = "texto-personalizado"
    span_texto_personalizado.textContent = 'curso'

    let span_texto_principal = document.createElement("span")
    span_texto_principal.textContent = `Escolha um ${span_texto_personalizado} para gerenciar`

    let img_aparelhos = document.createElement("img")
    img_aparelhos.src = "./img/devices.png"
    img_aparelhos.alt = "imagem dos aparelhos"

    div_centralizar_itens.append(span_texto_principal, img_aparelhos)

    // Aqui irei criar a div para a imagem da estudante
    let div_estudante = document.createElement("div")
    div_estudante.className = "estudante"

    let img_estudante = document.createElement("img")
    img_estudante.src = "./img/studant.png"
    img_estudante.alt = "imagem de uma estudante"

    div_estudante.append(img_estudante)

    // Aqui irei criar as DIVs que vão armazenar os cursos
    let div_caixa_botao = document.createElement("div")
    div_caixa_botao.className = "caixa-btn"

    // Aqui irei criar os botões com os dados que estão sendo enviados pela API

    
    dados.forEach(itemCurso => {
    let div_cursos = document.createElement("div")
    div_cursos.className = "botao-curso"

        let span_curso = document.createElement("span")
        span_curso.textContent = itemCurso.sigla

        div_cursos.append(span_curso)

        div_caixa_botao.append(div_cursos)
    })


    div_principal.append(div_centralizar_itens, div_estudante, div_caixa_botao)
    result.append(div_principal)

}

carregarCurso()

