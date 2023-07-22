import styled from 'styled-components';
import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
}

  return (
    <MainPage>
      <AppHeader>
        <Title>Task Manager Web App</Title>
        <AddTaskButton onClick={openModal}>Add Task</AddTaskButton>
        <AddTaskModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <TaskList />
      </AppHeader>
    </MainPage>
  );
}

export default App;


const MainPage = styled.div`
  text-align: center;
`
const Title = styled.h2`
  display: flex;
  size: 40px;
`
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AddTaskButton = styled(motion.button)`
  padding: 20px;
  border-radius: 50px;
  border: none;
`