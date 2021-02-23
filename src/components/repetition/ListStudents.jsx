import React from 'react'
import students from '../../data/students'

export default props => {
    const studentLi = students.map((student) => {
        return (
            <li key={student.id}>
                {student.id}) {student.name} -> {student.note}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {studentLi}
            </ul>
        </div>
    )
}
