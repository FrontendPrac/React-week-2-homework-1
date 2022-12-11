// action value
const ADD_TODO = "ADD_TODO";

// action creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload,
    };
};

// initial state
const initialState = {
    todos: [
        {
            id: 1,
            content: "react를 배워봅시다.",
        },
        {
            id: 2,
            content: "redux를 배워봅시다.",
        },
    ],
};

// reducer
const todos = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
};

export default todos;
