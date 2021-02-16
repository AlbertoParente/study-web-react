import React from 'react'
import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'

export default () => {
    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragment />
        <WithParameter
            title="Situação do Aluno"
            student="Alberto Parente"
            note={9.9} />
        <First></First>
    </div>
}