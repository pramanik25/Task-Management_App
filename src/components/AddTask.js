import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

function AddTask({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            alert('Task title cannot be empty.');
            return;
        }
        onAddTask({ title, description, status: 'Pending' });
        setTitle('');
        setDescription('');
    };

    return (
        <Paper elevation={2} sx={{ padding: 3, marginBottom: 2 }}>
            <Typography variant="h5" gutterBottom>
                Add New Task
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="taskTitle"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    id="taskDescription"
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Add Task
                </Button>
            </form>
        </Paper>
    );
}

export default AddTask;