'use strict'

const URL = "https://lion-school-phbo.onrender.com/"



export async function getCursos(){
    let response = await fetch (`${URL}cursos`)
    let data = await response.json()
    return data

}

export async function getAlunos(){
    let response = await fetch (`${URL}alunos`)
    let data = await response.json()
    return data

}

export async function getAluno(id){
    let response = await fetch (`${URL}alunos/${id}`)
    let data = await response.json()
    return data

}


export async function getAlunoCurso(id){
    let response = await fetch (`${URL}alunos?curso_id=${id}`)
    let data = await response.json()
    return data

}

export async function getAlunoStatus(status){
    let response = await fetch (`${URL}alunos?status=${status}`)
    let data = await response.json()
    return data

}

