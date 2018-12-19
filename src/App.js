import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <EmployeeForm />
        <EmployeeList />
      </div>
    );
  }
}
export default App;
