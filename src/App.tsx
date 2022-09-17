import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { CreateTask } from "./features/tasks/CreateTask";
import { Filter } from "./features/filters/Filter";
import { TasksList } from "./features/tasks/TasksList";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles";
import { RootState, store } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredTask, setInput, setTasks, addTask } from "./features/tasks/taskSlice";
import { setSearchTerm, setSearchCategory } from "./features/filters/filtersSlice";



export default function App() {

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filteredTask = useSelector((state: RootState) => state.tasks.filteredTask);
  const input = useSelector((state: RootState) => state.tasks.input);
  const searchTerm = useSelector((state: RootState) => state.filters.searchTerm);
  const searchCategory = useSelector((state: RootState) => state.filters.searchCategory);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim().length === 0) {
      return;
    }
    dispatch(addTask(input));
    dispatch(setInput(''));
  };

  const returnTaskCategory = () => {
    let filterTask = tasks;

    if (searchTerm) {
      filterTask = [];
      tasks.forEach((task: any) =>
        task.task
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
          ? filterTask.push(task)
          : null
      );
    } else {
      dispatch(setFilteredTask(tasks));
    }
    if (searchCategory === "Done") {
      let taskCategory: any = [];
      filterTask.filter((task: any) =>
        task.done ? taskCategory.push(task) : null
      );
      dispatch(setFilteredTask(taskCategory));
    } else if (searchCategory === "Important") {
      let taskCategory: any = [];
      filterTask.filter((task: any) =>
        task.important ? taskCategory.push(task) : null
      );
      dispatch(setFilteredTask(taskCategory));
    } else {
      dispatch(setFilteredTask(filterTask));
    }
  };

  useEffect(() => {
    returnTaskCategory();
  }, [searchCategory, searchTerm, tasks])

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="sm"
          sx={{
            background: "#58606d",
            minHeight: "100vh",
            paddingBottom: 6,
          }}
        >
          <CreateTask
            input={input}
            setInput={setInput}
            handleAddTask={handleAddTask}
            tasks={tasks}
          />
          <Filter
            setSearchTerm={setSearchTerm}
            setFilteredTask={setFilteredTask}
            returnTaskCategory={returnTaskCategory}
            setSearchCategory={setSearchCategory}
          />
          <TasksList
            tasks={tasks}
            setTasks={setTasks}
            filteredTask={filteredTask}
          />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
