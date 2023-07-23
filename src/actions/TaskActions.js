
//When addTaskoAction is called, it takes the global state and finds the specific task in the global state, 
//and if it doesn't find it then it's gonna call the reducer with the dispatch function, where it passes the id of the task,the task and with the redux state of the tasks, to the payload.
export const AddTaskAction = ( taskTitle, taskDescrip) => (dispatch, getState) => {
    const {
        Task: { tasks},
    } = getState();
    
    const hasTask = tasks.find(i => i.id === taskTitle);

    if (!hasTask && taskTitle!== '') {
        dispatch({
            type: 'ADD_TASK', 
            payload: [{id:taskTitle.id, taskTitle:taskTitle, taskDescrip:taskDescrip},  ...tasks],
        });
    }
}

export const RemoveTaskAction = (task) => (dispatch, getState) => {
    const {
        Task: { tasks },
    } = getState();

    dispatch({
        type: 'REMOVE_TASK',
        payload:tasks.filter(t=>t.id !==task.id),

    })
}