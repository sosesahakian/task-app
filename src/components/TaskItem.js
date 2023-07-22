import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { RemoveTaskAction } from '../actions/TaskActions';

export default function TaskItem({task}) {

    const dispatch = useDispatch();
    const removeHandler = (task) => {
        dispatch(RemoveTaskAction(task));
    }


    return (
        <TaskItemContainer 
                key={task.id} 
                initial={{ x: "150vw", transition: { type: "spring", duration: 1 } }}
                animate={{ x: 0, transition: { type: "spring", duration: 1 } }}
                whileHover={{ scale: 0.9,  transition: { type: "spring", duration: 0.1 },}} 
                exit={{ x: "-60vw", scale: [1, 0], transition: { duration: 0.5 }, backgroundColor: "rgba(255,0,0,1)", }}
            >
        <TaskTitle>{task.task}</TaskTitle>
        <DeleteButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={() => removeHandler(task)}>Delete</DeleteButton>
        </TaskItemContainer>
    )
}

const TaskTitle = styled.span`
    text-align: start;
    flex: 1;
`

const TaskItemContainer = styled(motion.li)`
    border-radius: 50px;
    margin: 10px 0;
    background-color: #5dadf8;
    padding: 10px 20px;
    display: flex;
    width: 450px;
    align-items: center;
    font-size: 15px;
`

const DeleteButton = styled(motion.button)`
    border-radius: 25px;
    border: none;
    padding: 10px;
    color: white;
    background-color: red;
` 