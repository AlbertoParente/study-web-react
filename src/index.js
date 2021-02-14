import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'

ReactDOM.render(
    <div id="app">
        <First></First>
        <WithParameter 
        title="Situação do Aluno" 
        student="Alberto Parente" 
        note={9.9}/>
        <Fragment/>
    </div>,
    document.getElementById('root')
)
