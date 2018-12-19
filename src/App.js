import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='navbar'>
          <h2 className='center '>Employee CRUD</h2>
        </div>
        <EmployeeForm />
        <EmployeeList />
      </div>
    );
  }
}
export default App;
