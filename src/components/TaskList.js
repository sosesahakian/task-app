import styled from 'styled-components'
import { AnimatePresence} from 'framer-motion'
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';


export default function TaskList() {
  const Task = useSelector(state => state.Task);
  const { tasks } = Task;
  

  return (
    <TaskContainer>
      <AnimatePresence>
      {tasks && tasks.map((task) => (
        <div>
        <TaskItem
            task={task}
            key={task.id} 
            initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
            animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
            whileHover={{ scale: 0.9,  transition: { type: "spring", duration: 0.1 },}} 
            exit={{ x: "-60vw", scale: [1, 0], transition: { duration: 0.5 }, backgroundColor: "rgba(255,0,0,1)", }}
        />
        </div>
        
      ))}
      </AnimatePresence>
    </TaskContainer>
  )
}


const TaskContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`