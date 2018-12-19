import React, { Component } from 'react';
import { connect } from 'react-redux';

import Employee from './Employee';
import EditComponent from './EditComponent';

class EmployeeList extends Component {
  render() {
    return (
      <div className='employee_heading'>
        <h1>Employee List</h1>
        {this.props.employees.map(emp => {
          console.log('emp: ', emp);
          return (
            <div key={emp.id}>
              {emp.editing ? (
                <EditComponent emp={emp} key={emp.id} />
              ) : (
                <Employee key={emp.id} emp={emp} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state
  };
};

export default connect(mapStateToProps)(EmployeeList);
