import { ADD, DONE, EDIT, TODO_DELETE } from "./ActionsTypes";

export const add_todo = (newItem) => {
    return { type: ADD, payload: newItem };
};
export const todo_delete = (id) => {
    return { type: TODO_DELETE, payload: id };
};
export const done = (id) => {
    return { type: DONE, payload: id };
};
export const edit = (newItem,id) => {
    return { type: EDIT, payload: { id, newItem } };
};
