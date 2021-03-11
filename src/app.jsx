import React from 'react'
import './App.css'

import Mega from './components/mega/mega'
import Counter from './components/counter/Counter'
import Input from './components/formulary/Input'
import IndirectFather from './components/communication/IndirectFather'
import DirectFather from './components/communication/DirectFather'
import UserInfo from './components/conditional/UserInfo'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import TableProduct from './components/repetition/TableProduct'
import ListStudents from './components/repetition/ListStudents'
import Family from './components/basic/Family'
import FamilyMember from './components/basic/FamilyMember'
import Card from './components/layout/Card'
import Random from './components/basic/Random'
import Fragment from './components/basic/Fragment'
import WithParameter from './components/basic/WithParameter'
import First from './components/basic/First'

export default () => (
    <div className="App">
        <h1>React Fundamentals</h1>
        <div className="Cards">
            <Card title="#13 - Mega" color="#B9006E">
                <Mega qtd={6} />
            </Card>

            <Card title="#12 - Counter" color="#424242">
                <Counter initialNumber={33} />
            </Card>

            <Card title="#11 - Controlled Component (Input)" color="#E45F56">
                <Input />
            </Card>

            <Card title="#10 - Indirect Communication" color="#8BAD39">
                <IndirectFather />
            </Card>

            <Card title="#09 - Direct Communication" color="#59323C">
                <DirectFather />
            </Card>

            <Card title="#08 - Conditional Rendering" color="#982395">
                <EvenOrOdd number={33} />
                <UserInfo user={{ name: 'Alberto Parente' }} />
                <UserInfo />
            </Card>

            <Card title="#07 - Repetition Challenge" color="#3A9AD9">
                <TableProduct />
            </Card>

            <Card title="#06 - Repetition" color="#FF4C65">
                <ListStudents />
            </Card>

            <Card title="#05 - Component with children" color="#00C8F8">
                <Family surname="Parente">
                    <FamilyMember name="Alberto" />
                    <FamilyMember name="Juliana" />
                    <FamilyMember name="Julia" />
                </Family>
            </Card>

            <Card title="#04 - Random Challenge" color="#FA6900">
                <Random min={1} max={60} />
            </Card>

            <Card title="#03 - Fragment" color="#E94C6F">
                <Fragment />
            </Card>

            <Card title="#02 - With Parameter" color="#E8871A">
                <WithParameter
                    title="Student Situation"
                    student="Alberto Parente"
                    note={9.9} />
            </Card>

            <Card title="#01 - First Component" color="#588C73">
                <First />
            </Card>
        </div>
    </div>
)
