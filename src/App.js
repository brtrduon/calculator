import React from 'react'

class App extends React.Component {
  state = {
    display: 0,
    operand: null,
    temp1: null,
    temp2: null,
    equals: false
  }

  clear = () => {
    this.setState({
      display: 0,
      operand: null,
      temp1: null,
      temp2: null,
      equals: false
    })
  }

  operand = e => {
    if (this.state.operand === null) {
      if (e.target.value === '+') {
        this.setState({
          temp1: this.state.display,
          operand: e.target.value,
          equals: true
        })
      }

      else if (e.target.value === '-') {
        this.setState({
          temp1: this.state.display,
          operand: e.target.value,
          equals: true
        })
      }

      else if (e.target.value === '*') {
        this.setState({
          temp1: this.state.display,
          operand: e.target.value,
          equals: true
        })
      }

      else if (e.target.value === '/') {
        this.setState({
          temp1: this.state.display,
          operand: e.target.value,
          equals: true
        })
      }
    }

    else {
      if (this.state.operand === '+') {
        this.setState({
          display: parseFloat(this.state.temp1) + parseFloat(this.state.display),
          equals: true,
          operand: e.target.value
        })
      }

      else if (this.state.operand === '-') {
        this.setState({
          display: parseFloat(this.state.temp1) - parseFloat(this.state.display),
          equals: true,
          operand: e.target.value
        })
      }

      else if (this.state.operand === '*') {
        this.setState({
          display: parseFloat(this.state.temp1) * parseFloat(this.state.display),
          equals: true,
          operand: e.target.value
        })
      }

      else if (this.state.operand === '/') {
        this.setState({
          display: Math.round((parseFloat(this.state.temp1) / parseFloat(this.state.display)) * 10000) / 10000,
          equals: true,
          operand: e.target.value
        })
      }
    }
  }

  click = e => {
    if (this.state.operand === null) {
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

    else if (this.state.equals ===  true) {
      if (this.state.equals === true) {
        this.setState({
          temp1: this.state.display,
          display: e.target.value,
          equals: false
        })
      }

       else {
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
    }
  }

  equals = () => {
    if (this.state.operand === '+') {
      this.setState({
        display: parseFloat(this.state.temp1) + parseFloat(this.state.display),
        equals: true,
        operand: null
      })
    }

    if (this.state.operand === '-') {
      this.setState({
        display: parseFloat(this.state.temp1) - parseFloat(this.state.display),
        equals: true,
        operand: null
      })
    }

    if (this.state.operand === '*') {
      this.setState({
        display: parseFloat(this.state.temp1) * parseFloat(this.state.display),
        equals: true,
        operand: null
      })
    }

    if (this.state.operand === '/') {
      this.setState({
        display: Math.round((parseFloat(this.state.temp1) / parseFloat(this.state.display)) * 10000) / 10000,
        equals: true,
        operand: null
      })
    }

    if (this.state.operand === null) {
      this.setState({
        equals: true
      })
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2'>
            <div className='input-group mb-2'>
              <div id='display' className='form-control form-control-sm'>
                {this.state.display}
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <button id='seven' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={7}>7</button>
            <button id='eight' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={8}>8</button>
            <button id='nine' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={9}>9</button>
            <button id='multiply' type='button' className='btn btn-lg btn-outline-secondary' onClick={this.operand} value='*'>*</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <button id='four' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={4}>4</button>
            <button id='five' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={5}>5</button>
            <button id='six' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={6}>6</button>
            <button id='subtract' type='button' className='btn btn-lg btn-outline-secondary' onClick={this.operand} value='-'>-</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <button id='one' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={1}>1</button>
            <button id='two' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={2}>2</button>
            <button id='three' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={3}>3</button>
            <button id='add' type='button' className='btn btn-lg btn-outline-secondary' onClick={this.operand} value='+'>+</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <button id='zero' type='button' className='btn btn-lg btn-outline-info' onClick={this.click} value={0}>0</button>
            <button id='decimal' type='button' className='btn btn-lg btn-outline-secondary' onClick={this.click} value='.'>.</button>
            <button id='divide' type='button' className='btn btn-lg btn-outline-secondary' onClick={this.operand} value='/'>/</button>
            <button id='equals' type='button' className='btn btn-lg btn-outline-success' onClick={this.equals}>=</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <button id='clear' type='button' className='btn btn-outline-danger' onClick={this.clear}>CE</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App