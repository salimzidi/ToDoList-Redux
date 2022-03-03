import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../Redux/Actions";

const Edit = ({ task }) => {
    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //edit
    const dispatch = useDispatch();
    const [modifier, setModifier] = useState(task.text);
    const handleEdit = () => {
        dispatch(edit(modifier, task.id));
        handleClose();
    };
    return (
        <div>
            {" "}
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* edit men 3ana */}
                    <input
                        type="text"
                        onChange={(e) => setModifier(e.target.value)}
                        value={modifier}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* badlt handleclose b handleEdit */}
                    <Button variant="primary" onClick={()=>handleEdit()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Edit;
