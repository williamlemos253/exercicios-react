import React from 'react'
import  produtos from '../data/produtos'

export default props => {

    const listaprodutos = produtos.map(produto => {
        
        return (
            <li key={produto.id}>
            {produto.nome}  {produto.preco}
            </li>

        )

        })


    return(
        <ul>
            {listaprodutos}
        </ul>
    )
}