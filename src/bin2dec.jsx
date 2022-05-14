import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Bin2Dec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binaryValue: '',
      decimalValue: '',
      invalidInput: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('i ran');
    if (this.state.invalidInput === false) {
      console.log('I also ran');
      let binaryValue = this.state.binaryValue;
      console.log(typeof binaryValue);
      let decimalValue = 0;
      let array = binaryValue.split('').reverse();
      console.log(array);
      array = array.map(x => Number(x));

      for (let i = 0; i < array.length; i++) {
        decimalValue += (Math.pow(2, i) * array[i]);
      }
      this.setState({
        decimalValue: decimalValue
      })
    }
  }

  validateInput(binaryValue) {
    let array = binaryValue.toString().split('');
    if (array.every(x => (x === '0' || x === '1'))) {
      this.setState({
        invalidInput: false
      })
    } else {
      this.setState({
        invalidInput: true
      })
    }

  }

  handleChange(event) {
    if (event.target.getAttribute('id') === 'binaryValue') {
      this.setState({
        binaryValue: event.target.value
      }, this.validateInput(event.target.value))
    }
  }

  render() {
    const invalidInput = this.state.invalidInput ? '' : 'display-none';
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6">
            <Form id="bin-to-dec" onSubmit={this.handleSubmit}>
              <div className="row mb-3">
                <Form.Label htmlFor="binaryValue" className="col-4 col-form-label text-end">BINARY</Form.Label>
                <div className="col-8">
                  <Form.Control required type="number" value={this.state.binaryValue} placeholder="Enter value" id="binaryValue" onChange={this.handleChange} />
                  <p className={`m-0 ${invalidInput}`}>Please enter 0's and 1's only!</p>
                </div>
              </div>
              <div className="row mb-3">
                <Form.Label htmlFor="decimalValue" className="col-4 col-form-label text-end">DECIMAL</Form.Label>
                <div className="col-8">
                  <Form.Control readOnly type="number" value={this.state.decimalValue} id="decimalValue" />
                </div>
              </div>
              <div className="text-end">
                <button className="submit-btn" type="submit">Convert</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Bin2Dec;
