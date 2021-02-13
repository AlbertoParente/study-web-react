import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'

ReactDOM.render(
    <div id="app">
        <First></First>
        <WithParameter 
        title="Situação do Aluno" 
        student="Alberto Parente" 
        note={9.9}/>
    </div>,
    document.getElementById('root')
)
