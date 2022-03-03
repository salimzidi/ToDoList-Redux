import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { todo_delete, done } from "../Redux/Actions";
import Edit from "./Edit";
const TasksToDo = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div
            style={{
                justifyContent: "space-around",
                display: "flex",
                margin: "5%",
            }}
        >
            {todo.text}
            <Edit task={todo} />
            <Button onClick={() => dispatch(done(todo.id))}>
                {todo.done ? "UnDone" : "Done"}
            </Button>
            <Button onClick={() => dispatch(todo_delete(todo.id))}>
                Delete
            </Button>
        </div>
    );
};

export default TasksToDo;
