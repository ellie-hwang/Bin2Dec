import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Bin2Dec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binaryValue: null,
      decimalValue: null,
      invalidInput: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
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
            <Form onSubmit={this.handleSubmit}>
              <div className="row mb-3">
                <Form.Label htmlFor="binaryValue" className="col-4 col-form-label text-end">BINARY</Form.Label>
                <div className="col-8">
                  <Form.Control required type="number" value={this.binaryValue} placeholder="Enter value" id="binaryValue" onChange={this.handleChange} />
                  <p className={invalidInput}>Please enter a binary value (0's and 1's only)!</p>
                </div>
              </div>
              <div className="row mb-3">
                <Form.Label htmlFor="decimalValue" className="col-4 col-form-label text-end">DECIMAL</Form.Label>
                <div className="col-8">
                  <Form.Control readOnly type="number" value={this.decimalValue} id="decimalValue" />
                </div>
              </div>
              <div className="text-end">
                <Button type="submit">Convert</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Bin2Dec;
