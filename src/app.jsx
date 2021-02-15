import React from 'react'
import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'

export default function App(props) {
    return (
        <div id="app">
            <First></First>
            <WithParameter 
                title="Situação do Aluno" 
                student="Alberto Parente" 
                note={9.9}/>
            <Fragment/>
        </div>
    )
}