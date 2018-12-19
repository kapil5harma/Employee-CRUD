import React, { Component } from 'react';
import { connect } from 'react-redux';

class Employee extends Component {
  render() {
    return (
      <div className='employee'>
        <div className='employee_details'>
          <p>Name: {this.props.emp.name}</p>
          <p>Age: {this.props.emp.age}</p>
          <p>Salary: {this.props.emp.salary}</p>
          <p>Address: {this.props.emp.address}</p>
        </div>
        <div className='control-buttons'>
          <button
            onClick={() =>
              this.props.dispatch({
                type: 'EDIT_EMPLOYEE',
                id: this.props.emp.id
              })
            }
          >
            Edit
          </button>

          <button
            style={{ color: 'red' }}
            onClick={() =>
              this.props.dispatch({
                type: 'DELETE_EMPLOYEE',
                id: this.props.emp.id
              })
            }
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default connect()(Employee);
