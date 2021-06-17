import React from 'react'
import Primeiro from './components/basicos/Primeiro'

import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default props => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo="Desafio Aleatório">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="Fragmento">
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
    );
}