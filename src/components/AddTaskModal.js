import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { useDispatch } from 'react-redux';
import { AddTaskAction } from '../actions/TaskActions';
import styled from 'styled-components'
import {motion} from 'framer-motion'

function AddTaskModal({setIsOpen, modalIsOpen}) {
    const [task, setTask] = useState("");

    const dispatch = useDispatch();

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddTaskAction(task));
        setTask("")
    };

    ReactModal.setAppElement('#root');

    return (
        <ModalContainer>
            <ReactModal
                style={{ content: {width: 400, height: 100, borderRadius:50}}}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <TaskForm onSubmit={handleSubmit}>
                    <InputTextField
                        value={task}
                        placeholder='Enter a Task'  
                        onChange={(e) => setTask(e.target.value)}/>
                    <ButtonsContainer>
                        <SubmitButton type='submit' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}}  >Add</SubmitButton>
                        <CloseButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={() => setIsOpen(false) }>Close</CloseButton>
                    </ButtonsContainer>
                
                </TaskForm>
            </ReactModal>
        </ModalContainer>
    
    )
}

export default AddTaskModal

const InputTextField = styled.input`
    width: 350px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    font-size: 20px;
    outline: none;
`

const TaskForm = styled.form`

`
const SubmitButton = styled(motion.button)`
    padding: 12px;
    border-radius: 25px;
    font-size: 15px;
    margin-left: 20px;
    width: 70px;
    border: none
`

const CloseButton = styled(motion.button)`
    padding: 12px;
    border-radius: 25px;
    font-size: 15px;
    margin-left: 20px;
    width: 70px;
    border: none;

`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const ModalContainer = styled.div`
display: flex;
justify-self: flex-end;
align-self: flex-end;
`