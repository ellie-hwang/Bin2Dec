import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Bin2Dec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binaryValue: null,
      decimalValue: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    if (event.target.getAttribute('id') === 'binaryValue') {
      this.setState({
        binaryValue: event.target.value
      })
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6">
            <Form>
              <div className="row mb-3">
                <Form.Label htmlFor="binaryValue" className="col-4 col-form-label text-end">BINARY</Form.Label>
                <div className="col-8">
                  <Form.Control required type="number" value={this.binaryValue} placeholder="Enter value" id="binaryValue" onChange={this.handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <Form.Label htmlFor="decimalValue" className="col-4 col-form-label">DECIMAL</Form.Label>
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
