import React, { useState } from "react";
import {
  Typography,
  TextField,
  ThemeProvider,
  ButtonGroup,
} from "@mui/material";
import { theme } from "../../styles";
import { StyledButton, StyledCard } from "../../styles";
import { useDispatch } from "react-redux";

export const TaskItem = ({
  id,
  task,
  done,
  important,
  tasks,
  setTasks,
}: any) => {
  const [taskEditing, setTaskEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const dispatch = useDispatch();

  const onImportantClick = () => {
    dispatch(setTasks(
      tasks.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            important: !item.important,
          };
        }
        return item;
      })
    ));
  };

  const onDoneClick = () => {
    dispatch(setTasks(
      tasks.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    ));
  };

  const onSaveClick = (id: number) => {
    const updatedTasks = [...tasks].map((el) => {
      if (el.id === id && editingText.trim().length !== 0) {
        el = editingText;
      }
      return el;
    });
    dispatch(setTasks(updatedTasks));
    setTaskEditing(null);
    setEditingText("");
  };

  const onDeleteClick = (id: any) => {
    const updatedTasks = [...tasks].filter((el) => el.id !== id);
    dispatch(setTasks(updatedTasks));
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledCard>
        {taskEditing === id ? (
          <TextField
            id="outlined-basic"
            value={editingText}
            size="small"
            variant="standard"
            fullWidth
            type="text"
            autoFocus
            onChange={(e) => setEditingText(e.target.value)}
            sx={{ color: "#fff" }}
          />
        ) : (
          <Typography
            variant="h4"
            sx={[
              { color: "#fff" },
              done && {
                color: "#0c620c",
              },
              important && { color: "#7039a3" },
            ]}
          >
            {task}
          </Typography>
        )}

        <ButtonGroup variant="text" size="small" color="secondary">
          {taskEditing === id ? (
            <StyledButton color="warning" onClick={() => onSaveClick(id)}>
              Save
            </StyledButton>
          ) : (
            <StyledButton color="primary" onClick={() => setTaskEditing(id)}>
              Edit
            </StyledButton>
          )}
          <StyledButton color="secondary" onClick={onImportantClick}>
            Important
          </StyledButton>
          <StyledButton color="success" onClick={onDoneClick}>
            Done
          </StyledButton>
          <StyledButton color="warning" onClick={() => onDeleteClick(id)}>
            Delete
          </StyledButton>
        </ButtonGroup>
      </StyledCard>
    </ThemeProvider>
  );
};
