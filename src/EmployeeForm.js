import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployeeForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const age = this.getAge.value;
    const salary = this.getSalary.value;
    const address = this.getAddress.value;
    const data = {
      id: new Date(),
      name,
      age,
      salary,
      address,
      editing: false
    };
    // console.log('data: ', data);
    this.props.dispatch({
      type: 'ADD_EMPLOYEE',
      data
    });
    this.getName.value = '';
    this.getAge.value = '';
    this.getSalary.value = '';
    this.getAddress.value = '';
  };

  render() {
    return (
      <div className='employee-container'>
        <h1 className='employee-heading'>Enter New Employee Details</h1>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            required
            type='text'
            placeholder='Name'
            ref={input => (this.getName = input)}
          />

          <input
            required
            type='number'
            placeholder='Age'
            ref={input => (this.getAge = input)}
          />

          <input
            required
            type='number'
            placeholder='Salary'
            ref={input => (this.getSalary = input)}
          />

          <input
            required
            type='text'
            placeholder='Address'
            ref={input => (this.getAddress = input)}
          />

          <button>Save</button>
        </form>
      </div>
    );
  }
}
export default connect()(EmployeeForm);
