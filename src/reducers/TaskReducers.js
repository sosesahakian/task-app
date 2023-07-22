
//The reducer is checking on the type of action from our TaskActions.
//Based on the type add or remove, it either gets a new task
// or it filters out a specific task.
const TaskReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { tasks: action.payload};

        case "REMOVE_TASK":
            return { tasks: action.payload };
        
        default:
            return state;
    }
}


export default TaskReducer;