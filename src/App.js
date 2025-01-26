import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { Container, Typography } from '@mui/material';

function App() {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchTasksFromAPI();
    }, []);

    const fetchTasksFromAPI = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            const initialTasks = data.slice(0, 5).map(todo => ({
                id: String(todo.id),
                title: todo.title,
                description: '',
                status: todo.completed ? 'Completed' : 'Pending',
            }));
            setTasks(initialTasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const handleAddTask = async (newTask) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: newTask.title, completed: false, userId: 1 }),
            });
            const apiNewTask = await response.json();
            const transformedNewTask = { ...newTask, id: String(apiNewTask.id) };
            setTasks(prevTasks => [...prevTasks, transformedNewTask]);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleUpdateTaskStatus = async (taskId, newStatus) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: newStatus === 'Completed' }),
            });
            setTasks(prevTasks =>
                prevTasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task)
            );
        } catch (error) {
            console.error("Error updating task status:", error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, { method: 'DELETE' });
            if (response.ok) {
                setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
            } else {
                console.error("Error deleting task, status:", response.status);
            }
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const handleUpdateTask = (taskId, updatedTitle, updatedDescription) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, title: updatedTitle, description: updatedDescription } : task
            )
        );
    };


    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.index === destination.index) return;
        const reorderedTasks = reorder(tasks, source.index, destination.index);
        setTasks(reorderedTasks);
    };

    const filteredTasks = searchTerm
        ? tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : tasks;


    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" align="center" gutterBottom>
                    Task Management App
                </Typography>
                <AddTask onAddTask={handleAddTask} />
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search tasks by title"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <TaskList
                    tasks={filteredTasks}
                    onUpdateTaskStatus={handleUpdateTaskStatus}
                    onDeleteTask={handleDeleteTask}
                    onUpdateTask={handleUpdateTask}
                />
            </Container>
        </DragDropContext>
    );
}

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

export default App;