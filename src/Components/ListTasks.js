import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TasksToDo from "./TasksToDo";
import "./ListTasks.css"
const ListTasks = () => {
    const list = useSelector((state) => state.reducer.Task);
    const [status, setStatus] = useState("all");
    return (
        <div
            style={{
                justifyContent: "space-around",
                margin: "6%",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {" "}
                <Button onClick={() => setStatus("all")}>All</Button>
                <Button onClick={() => setStatus("done")}>Done</Button>
                <Button onClick={() => setStatus("undone")}>UnDone</Button>
            </div>

            {status === "all"
                ? list.map((el) => <TasksToDo todo={el} key={el.id} />)
                : status === "done"
                ? list
                      .filter((el) => el.done)
                      .map((el) => <TasksToDo todo={el} key={el.id} />)
                : list
                      .filter((el) => !el.done)
                      .map((el) => <TasksToDo todo={el} key={el.id} />)}
        </div>
    );
};

export default ListTasks;
