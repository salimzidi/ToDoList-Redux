import { ADD, TODO_DELETE, DONE, EDIT } from "./../ActionsTypes";
const initialState = {
    Task: [
        { text: "Learn React", id: Math.random(), done: false },
        { text: "Learn Redux", id: Math.random(), done: false },
        { text: "Learn API", id: Math.random(), done: false },
    ],
};
export const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD:
            return { ...state, Task: [...state.Task, payload] };
        case TODO_DELETE:
            return {
                ...state,
                Task: state.Task.filter((el) => el.id !== payload),
            };
        case DONE:
            return {
                ...state,
                Task: state.Task.map((el) =>
                    el.id == payload ? { ...el, done: !el.done } : el
                ),
            };
        case EDIT:
            return {
                ...state,
                Task: state.Task.map((el) =>
                    el.id == payload.id ? { ...el, text: payload.newItem } : el
                ),
            };

        default:
            return state;
    }
};
