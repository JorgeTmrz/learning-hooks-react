// const initialState = [
//     {
//         id: 1,
//         todo: "Buy Milk",
//         done: false
//     }
// ];

// const toDoReducer = (state = initialState, action) => {
    
//     if (action?.type === "ADD"){
//         return [...state, action.payload]
//     }
    
//     return state;
// }

// let toDos = toDoReducer();

// const newTodo = {
//     id: 2,
//     todo: "Something else",
//     done: false
// }

// const addToDoAction = {
//     type: "ADD",
//     payload: newTodo
// }

// toDos = toDoReducer(toDos, addToDoAction);

