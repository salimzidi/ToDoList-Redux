import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add_todo } from "./../Redux/Actions";

const Add = () => {
    const dispatch = useDispatch();
    const [addtext, setText] = useState("");
    const handleAdd = () => {
        dispatch(
            add_todo({
                text: addtext,
                id: Math.random(),
                done: false,
            })
        );
    };
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <Button onClick={() => dispatch(handleAdd())}>Add</Button>
        </div>
    );
};

export default Add;
