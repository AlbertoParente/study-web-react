import React, { Component } from 'react'
import './Counter.css'
import Display from './Display'
import Buttons from './Buttons'
import StepForm from './StepForm'

class Counter extends Component {

    state = {
        number: this.props.initialNumber || 0,
        step: this.props.stepInitial || 3
    }

    /*
    constructor(props) {
        super(props)

        this.inc = this.inc.bind(this)
    }
    */
    /*
    inc() {
        this.setState({
            number: this.state.number + 1,
        })
    }
    */

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (newStep) => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number} />
                <StepForm step={this.state.step} setStep={this.setStep} />
                <Buttons setIncrement={this.inc} setDecrement={this.dec} />
                {/* 
                    or 
                <button onClick={_ => this.inc()}>++</button>
                */}
            </div>
        )
    }
}

export default Counter
