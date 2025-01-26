import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, TextField, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskItem({ task, index, onUpdateTaskStatus, onDeleteTask, onUpdateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDescription, setEditDescription] = useState(task.description);

    const handleStatusToggle = () => {
        const newStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
        onUpdateTaskStatus(task.id, newStatus);
    };

    const handleDeleteClick = () => {
        onDeleteTask(task.id);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        onUpdateTask(task.id, editTitle, editDescription);
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditTitle(task.title);
        setEditDescription(task.description);
    };

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <ListItem
                    divider
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    secondaryAction={
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={handleDeleteClick}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    }
                >
                    {isEditing ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <TextField
                                fullWidth
                                margin="dense"
                                label="Title"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                margin="dense"
                                multiline
                                rows={2}
                                label="Description"
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                                <Button onClick={handleSaveEdit} color="primary" size="small">Save</Button>
                                <Button onClick={handleCancelEdit} size="small">Cancel</Button>
                            </Box>
                        </Box>
                    ) : (
                        <ListItemText
                            primaryTypographyProps={{ style: { textDecoration: task.status === 'Completed' ? 'line-through' : 'none' } }}
                            primary={task.title}
                            secondary={task.description}
                        />
                    )}
                    <Checkbox
                        edge="start"
                        checked={task.status === 'Completed'}
                        tabIndex={-1}
                        disableRipple
                        onChange={handleStatusToggle}
                        inputProps={{ 'aria-labelledby': `checkbox-list-label-${task.id}` }}
                    />
                    {!isEditing && (
                        <Button onClick={handleEditClick} size="small" sx={{ marginLeft: 2 }}>Edit</Button>
                    )}
                </ListItem>
            )}
        </Draggable>
    );
}

export default TaskItem;