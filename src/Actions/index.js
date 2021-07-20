export const addItem = (item) => {
    return {
      type: 'Add Item',
      task: item,
      
    };
};

export const removeItem = (index) => {
    return {
        type: 'Remove Item',
        index: index,
    };
};
  
export const updateStatus = (index, status) => {
    return {
        type: 'Update Status',
        index: index,
        status: status
    };
};

export const updateTask = (index, new_name) => {
    return {
        type: 'Update Task',
        index: index,
        name: new_name
    };
};