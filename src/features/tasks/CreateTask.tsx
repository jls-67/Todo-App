import React, { useState } from "react";
import { Typography, ThemeProvider, Divider } from "@mui/material";
import { theme, StyledButtonAdd, StyledInput } from "../../styles";
import { useDispatch } from "react-redux";




export const CreateTask = ({ setTasks, addTask, input, setInput, handleAddTask }: any) => {

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(setInput(e.target.value));
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(handleAddTask(input));
    dispatch(setInput(""));
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2" component="h2" align="center">
        My Tasks
      </Typography>
      <Divider
        variant="inset"
        sx={{
          borderBottomWidth: 3,
          mb: 2,
          bgcolor: "#fff",
          ml: "35%",
          mr: "35%",
        }}
      />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <StyledInput
          size="small"
          id="outlined-basic"
          variant="outlined"
          placeholder="What do you have planned?"
          value={input}
          onChange={handleChange}
          fullWidth
          sx={{
            color: "#fff",
            width: "80%",
          }}
        />
        <StyledButtonAdd size="small" fullWidth variant="text" type="submit">
          ADD TASK
        </StyledButtonAdd>
      </form>
    </ThemeProvider>
  );
};
