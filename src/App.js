import React from 'react'

class App extends React.Component {
  state = {
    display: 0,
    operand: null,
    temp1: null,
    equals: false
  }

  clear = () => {
    this.setState({
      display: 0,
      operand: null,
      temp1: null,
      equals: false
    })
  }

  operand = e => {
    if (this.state.equals === true) {
      this.setState({
        temp1: this.state.display,
        display: 0,
        operand: e.target.value,
        equals: false
      })
    }

    else if (this.state.equals === false) {
      if (parseInt(this.state.display) === 0) {
        this.setState({
          operand: e.target.value
        })
      }

      else {
        this.setState({
          temp1: this.state.display,
          display: 0,
          operand: e.target.value
        })
      }
    }
  }

  click = e => {
    if (parseInt(this.state.display) === 0) {
      this.setState({
        display: e.target.value
      })
    }

    else if (parseInt(this.state.display) === 0 && e.target.value === '.') {
      this.setState({
        display: this.state.display + e.target.value
      })
    }

    else if (e.target.value === '.') {
      let decimal = false

      for (let i of this.state.display) {
        if (i === '.') {
          decimal = true
        }
      }

      if (decimal === false) {
        this.setState({
          display: this.state.display + e.target.value
        })
      }

      else {
        console.log('decimal already present')
      }
    }

    else {
      this.setState({
        display: this.state.display + e.target.value
      })
    }
  }

  equals = () => {
    if (this.state.operand === '+') {
      this.setState({
        display: parseFloat(this.state.temp1) + parseFloat(this.state.display),
        equals: true
      })
    }

    if (this.state.operand === '-') {
      this.setState({
        display: parseFloat(this.state.temp1) - parseFloat(this.state.display),
        equals: true
      })
    }

    if (this.state.operand === '*') {
      this.setState({
        display: parseFloat(this.state.temp1) * parseFloat(this.state.display),
        equals: true
      })
    }

    if (this.state.operand === '/') {
      this.setState({
        display: Math.round((parseFloat(this.state.temp1) / parseFloat(this.state.display)) * 10000) / 10000,
        equals: true
      })
    }
  }

  render() {
    return (
      <div>
        <div id='display'>
          {this.state.display}
        </div>
        <button id='clear' onClick={this.clear}>CE</button>
        <button id='divide' onClick={this.operand} value='/'>/</button>
        <button id='multiply' onClick={this.operand} value='*'>*</button>
        <button id='subtract' onClick={this.operand} value='-'>-</button>
        <button id='add' onClick={this.operand} value='+'>+</button>
        <button id='equals' onClick={this.equals}>=</button>
        <button id='one' onClick={this.click} value={1}>1</button>
        <button id='two' onClick={this.click} value={2}>2</button>
        <button id='three' onClick={this.click} value={3}>3</button>
        <button id='four' onClick={this.click} value={4}>4</button>
        <button id='five' onClick={this.click} value={5}>5</button>
        <button id='six' onClick={this.click} value={6}>6</button>
        <button id='seven' onClick={this.click} value={7}>7</button>
        <button id='eight' onClick={this.click} value={8}>8</button>
        <button id='nine' onClick={this.click} value={9}>9</button>
        <button id='zero' onClick={this.click} value={0}>0</button>
        <button id='decimal' onClick={this.click} value='.'>.</button>
      </div>
    )
  }
}

export default App