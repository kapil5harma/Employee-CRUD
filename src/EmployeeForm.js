import React, { Component } from 'react';

class EmployeeForm extends Component {
  render() {
    return (
      <div>
        <h1>Enter New Employee Details</h1>
        <form>
          <input required type='text' placeholder='Name' />
          <br />
          <input required type='number' placeholder='Age' />
          <br />
          <input required type='number' placeholder='Salary' />
          <br />
          <input required type='text' placeholder='Address' />
          <br />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
export default EmployeeForm;
