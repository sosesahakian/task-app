import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { useDispatch } from 'react-redux';
import { AddTaskAction } from '../actions/TaskActions';
import styled from 'styled-components'
import {motion} from 'framer-motion'

export default function AddTaskModal({setIsOpen, modalIsOpen}) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescrip, setTaskDescrip] = useState("");

    const dispatch = useDispatch();

    function closeModal() {
        setIsOpen(false);
    }

    const randomId = function(length = 6) {
        return Math.random().toString(36).substring(2, length+2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddTaskAction(randomId, taskTitle, taskDescrip));
        setTaskTitle("")
        setTaskDescrip("")
    };

    ReactModal.setAppElement('#root');

    return (
        <ModalContainer>
            <ReactModal
                style={{ content: {width: 300, height: 120, borderRadius:50}}}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <TaskForm onSubmit={handleSubmit}>
                    <TaskTitle
                        value={taskTitle}
                        placeholder='Enter the title of the task'  
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                    <TaskDescription
                        value={taskDescrip}
                        placeholder='Enter the description of the task'  
                        onChange={(e) => setTaskDescrip(e.target.value)}
                    />
                    <ButtonsContainer>
                        <SubmitButton type='submit' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}}  >Add</SubmitButton>
                        <CloseButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={() => setIsOpen(false) }>Close</CloseButton>
                    </ButtonsContainer>
                
                </TaskForm>
            </ReactModal>
        </ModalContainer>
    
    )
}

const TaskTitle = styled.input`
    width: 200px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    font-size: 15px;
    outline: none;
`

const TaskDescription = styled.input`
    width: 300px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    font-size: 15px;
    outline: none;
`

const TaskForm = styled.form`
display: flex;
flex-direction: column;

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
    justify-content: end;
    align-items: end;
`

const ModalContainer = styled.div``