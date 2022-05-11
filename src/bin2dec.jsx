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
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <Form>
            <Form.Label htmlFor="binaryValue" className="mb-3">Binary</Form.Label>
            <Form.Control required type="number" placeholder="Enter binary value" id="binaryValue" />
            <Button type="submit">Convert</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Bin2Dec;
