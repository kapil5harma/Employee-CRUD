const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return state.concat([action.data]);
    case 'DELETE_EMPLOYEE':
      return state.filter(emp => emp.id !== action.id);
    case 'EDIT_EMPLOYEE':
      return state.map(emp => {
        console.log('emp: ', emp);
        return emp.id === action.id ? { ...emp, editing: !emp.editing } : emp;
      });
    case 'UPDATE_EMPLOYEE':
      return state.map(emp => {
        console.log('emp: ', emp);
        console.log('action: ', action);
        if (emp.id === action.id) {
          return {
            ...emp,
            address: action.data.address,
            age: action.data.age,
            name: action.data.name,
            salary: action.data.salary,
            editing: !emp.editing
          };
        } else return emp;
      });
    default:
      return state;
  }
};

export default employeeReducer;
