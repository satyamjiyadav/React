import React from 'react'
import {createStore} from 'redux';


const ADD_TASK = "task/add";
const DELETE_TASK = "task/add";
const initialState = {
    task : [],
}

// Redux store where redux keeps all it's data
// getState() retrieve the current state of the redux store



const taskReducer = (state = initialState, action) => {
    switch(action){
        case ADD_TASK :
            return {
                ...state, 
                task: [...state.task , action.payload],
                
            };
            case DELETE_TASK :
                const updatedTask = state.task.filter((currTask, index) =>{
                    return index != action.payload;
                })
                return {
                    ...state, 
                    task: updatedTask,
                    
                };
        default:
            break;
    }
}

const store = createStore(taskReducer);
console.log(store);
function ToDoList() {
  return (
    <div>
      
    </div>
  )
}


export default ToDoList
