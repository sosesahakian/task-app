import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { RemoveTaskAction } from '../actions/TaskActions';
import ReactModal from 'react-modal';
import { device } from '../sizes';

export default function TaskItem({task}) {
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch();
    const removeHandler = (task) => {
        dispatch(RemoveTaskAction(task));
    }

    const handleTaskClick = () => {
        setOpenModal(true);
    }

    

    return (
        <div>
            <TaskItemContainer 
                onClick={handleTaskClick}
                key={task.id} 
                initial={{ x: "150vw", transition: { type: "spring", duration: 1 } }}
                animate={{ x: 0, transition: { type: "spring", duration: 1 } }}
                whileHover={{cursor: "pointer", scale: 0.9,  transition: { type: "spring", duration: 0.1 },}} 
                exit={{ x: "-60vw", scale: [1, 0], transition: { duration: 0.5 }, backgroundColor: "rgba(255,0,0,1)", }}
        >
                <TaskTitle>{task.taskTitle}</TaskTitle>
                <DeleteButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={() => removeHandler(task)}>Delete</DeleteButton>
            </TaskItemContainer>
            <Modal>
                <ReactModal isOpen={openModal} style={{ display: "flex", content: {display:"flex", flexDirection:"column", justifyContent:"space-between", width: 300, height: 120, borderRadius:50}}}>
                    <Task>
                        <TaskTitle>{task.taskTitle}</TaskTitle>
                        <TaskDescription>{task.taskDescrip}</TaskDescription>
                    </Task>
                    <CloseButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={() => setOpenModal(false) }>Close</CloseButton>
                </ReactModal>
            </Modal>
            
        </div>
    )
}

const TaskTitle = styled.span`
    text-align: start;
    flex: 1;
    font-weight: 600;
    font-size:25px;
`
const TaskDescription = styled.span``

const Modal = styled.div`
display: flex;
justify-content: end;
align-items: end;
`

const Task = styled.div`
display: flex;
flex-direction: column;
padding: 10px 10px 10px 0;
`

const CloseButton = styled(motion.button)`
    padding: 12px;
    border-radius: 25px;
    font-size: 15px;
    margin-left: 20px;
    width: 70px;
    border: none;
    display: flex;
    align-self: flex-end;
`

const TaskItemContainer = styled(motion.div)`
    border-radius: 50px;
    margin: 10px 0;
    background-color: #5dadf8;
    padding: 10px 20px;
    display: flex;
    width: 450px;
    align-items: center;
    font-size: 15px;
    border: none;
    outline: none;

    @media ${device.mobileM} { 
    max-width: 200px;
    }

    @media ${device.tablet} { 
    max-width: 300px;
    }

    @media ${device.laptop} { 
    max-width: 400px;
    }

    @media ${device.tablet} { 
    max-width: 500px;
    }
`

const DeleteButton = styled(motion.button)`
    border-radius: 25px;
    border: none;
    padding: 10px;
    color: white;
    background-color: red;
` 