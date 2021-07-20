//Redux reducer
//Actual logic to perform operations on redux store
const reducer = (
    state = { tasks: [ {name: "Pay bills",status:"progress"}, {name:"Ride bike",status:"progress"},
     {name:"Shopping",status:"completed"}, {name:"See the doctor",status:"completed"} ] },
    action
  ) => {
    let temp_tasks;
    switch (action.type) {
        
        case 'Add Item':
            temp_tasks = state.tasks;
            temp_tasks.push({name:action.task, status:"progress" });
            return { ...state, tasks: temp_tasks};

        case 'Remove Item':
            temp_tasks = state.tasks;
            let l = temp_tasks.length;
            let new_tasks = temp_tasks.slice(0,action.index).concat(temp_tasks.slice(action.index+1,l))
            return { ...state, tasks: new_tasks};

        case 'Update Status':
            temp_tasks = state.tasks;
            temp_tasks[action.index].status = action.status;
            return { ...state, tasks: temp_tasks};

        case 'Update Task':
            temp_tasks = state.tasks;
            temp_tasks[action.index].name = action.name;
            return { ...state, tasks: temp_tasks};
            
        default:
            return state;
    }
  };
  
  export default reducer;
  