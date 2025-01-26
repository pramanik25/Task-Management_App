import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { Droppable } from 'react-beautiful-dnd';
import { List, Box, Typography, ButtonGroup, Button } from '@mui/material';

function TaskList({ tasks, onUpdateTaskStatus, onDeleteTask, onUpdateTask }) {
    const [filterStatus, setFilterStatus] = useState('All');

    const handleFilterChange = (status) => {
        setFilterStatus(status);
    };

    const filteredTasks = tasks.filter(task => {
        if (filterStatus === 'All') return true;
        return task.status === filterStatus;
    });

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Task List
            </Typography>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ marginBottom: 2 }}>
                <Button onClick={() => handleFilterChange('All')} variant={filterStatus === 'All' ? 'contained' : 'outlined'}>All</Button>
                <Button onClick={() => handleFilterChange('Pending')} variant={filterStatus === 'Pending' ? 'contained' : 'outlined'}>Pending</Button>
                <Button onClick={() => handleFilterChange('Completed')} variant={filterStatus === 'Completed' ? 'contained' : 'outlined'}>Completed</Button>
            </ButtonGroup>


            {filteredTasks.length === 0 ? (
                <Typography variant="subtitle1" color="textSecondary">No tasks yet.</Typography>
            ) : (
                <Droppable droppableId="tasks-droppable">
                    {(provided) => (
                        <List
                            sx={{ bgcolor: 'background.paper', padding: 0 }}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {filteredTasks.map((task, index) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    index={index}
                                    onUpdateTaskStatus={onUpdateTaskStatus}
                                    onDeleteTask={onDeleteTask}
                                    onUpdateTask={onUpdateTask}
                                />
                            ))}
                            {provided.placeholder}
                        </List>
                    )}
                </Droppable>
            )}
        </Box>
    );
}

export default TaskList;