import React from 'react'
import './App.css'
import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import Random from './components/basic/Random'
import Card from './components/layout/Card'

export default () => {
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card title='#04 - Random Challenge'>
                <Random min={1} max={60} />
            </Card>

            <Card title='#03 - Fragment'>
                <Fragment />
            </Card>

            <Card title='#02 - With Parameter'>
                <WithParameter
                    title="Situação do Aluno"
                    student="Alberto Parente"
                    note={9.9} />
            </Card>

            <Card title='#01 - With Parameter'>
                <First></First>
            </Card>
        </div>
    </div>
}