import React, { Component } from 'react'
import './Counter.css'

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

    setStep = (e) => {
        this.setState({
            step: +e.target.value
        })
    }

    render() {
        return(
            <div className="Counter">
                <h2>Counter</h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor="stepInput">Step: </label>
                    <input 
                        id="stepInput" 
                        type="number" 
                        value={this.state.step} 
                        onChange={this.setStep} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                {/* 
                    or 
                <button onClick={_ => this.inc()}>++</button>
                */}
            </div>
        )
    }
} 

export default Counter