import React from "react";
import { TaskItem } from "./TaskItem";
import { Divider, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../../styles";

export const TasksList = ({ tasks, setTasks, filteredTask }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" align="center">
        Tasks
      </Typography>
      <Divider
        variant="inset"
        sx={{
          borderBottomWidth: 2,
          mb: 2,
          bgcolor: "#fff",
          ml: "39%",
          mr: "39%",
        }}
      />
      {filteredTask.map((item: any, index: any) => (
        <TaskItem key={index} {...item} tasks={tasks} setTasks={setTasks} />
      ))}
    </ThemeProvider>
  );
};