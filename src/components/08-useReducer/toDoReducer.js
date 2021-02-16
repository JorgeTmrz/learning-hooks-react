export const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];

        case "DELETE":
            return state.filter(toDo => toDo.id !== action.payload)

        case 'TOGGLE':
            return state.map(toDo => (
                toDo.id === action.payload ? {...toDo, done: !toDo.done} : toDo
            ))
    
        default:
            return state;
    }
}