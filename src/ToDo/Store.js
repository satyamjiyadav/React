import { createStore } from 'redux'

const ADD_TODO='ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const UPDATE_TODO = 'UPDATE_TODO';

const initialState = {
    todo:[]
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todo:[...state.todo, action.payload], 
            }
        case REMOVE_TODO:
            const update= state.todo.filter((curTodo, index) =>{
                return index !== action.payload;
            })
            return {
                ...state,
                todo:update,
            }
        case UPDATE_TODO:
            const todoAfterUpdate = state.todo.map((currTaks, index) => 

                index === action.payload.index ? action.payload.newToDo : currTaks
            );

            return{
                ...state,
                todo: todoAfterUpdate,
            }
        default:
            return state;
    }

}

export const Store =createStore(reducer);

export const addtodo = (data)=>{
    return {type: ADD_TODO, payload: data}
}

export const removetodo =(id)=>{
    return {type: REMOVE_TODO, payload: id}
}


export const updatetodo = (index, newToDo) => {
    return {type: UPDATE_TODO, payload:{index, newToDo}};
}