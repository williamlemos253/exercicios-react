import React from 'react'
import alunos from '../data/alunos'

export default props => {

    const Alunos = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id})  {aluno.nome} -> {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {Alunos}
            </ul>
        </div>
    )
}