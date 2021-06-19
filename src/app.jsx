import React from 'react'
import Primeiro from './components/basicos/Primeiro'

import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

import ListaAlunos from './components/repeticao/ListaAlunos'

import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import "./app.css"

export default props => {
    return (
        <div id="app" className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

                <Card titulo="Repetição" color="blue">
                  <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="Componentes com Filhos" color="green">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"></FamiliaMembro>
                        <FamiliaMembro nome="José" ></FamiliaMembro>
                        <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo="Desafio Aleatório" color="green">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="Fragmento" color="whitesmoke">
                    <Fragmento></Fragmento>
                </Card>
                <Card titulo="Primeiro Exercício">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="Exercício Paramêtros">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Legal"
                        nota={4 + 4} />
                </Card>
            </div>
        </div>
    );
}