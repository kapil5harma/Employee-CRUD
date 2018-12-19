import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const age = this.getAge.value;
    const salary = this.getSalary.value;
    const address = this.getAddress.value;
    const data = {
      name,
      age,
      salary,
      address
    };
    // console.log('data: ', data);
    this.props.dispatch({
      type: 'UPDATE_EMPLOYEE',
      id: this.props.emp.id,
      data
    });
  };

  render() {
    return (
      <div className='employee'>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            required
            type='text'
            defaultValue={this.props.emp.name}
            placeholder='Name'
            ref={input => (this.getName = input)}
          />

          <input
            required
            type='number'
            defaultValue={this.props.emp.age}
            placeholder='Age'
            ref={input => (this.getAge = input)}
          />

          <input
            required
            type='number'
            defaultValue={this.props.emp.salary}
            placeholder='Salary'
            ref={input => (this.getSalary = input)}
          />

          <input
            required
            type='text'
            defaultValue={this.props.emp.address}
            placeholder='Address'
            ref={input => (this.getAddress = input)}
          />

          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
