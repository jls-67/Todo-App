import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

interface iTask {
    tasks: any,
    filteredTask: String[],
    input: any,
}

const initialState: iTask = {
                                tasks: [],
                                filteredTask: [],
                                input: [],
                            };

export const taskSlice = createSlice({
	name: 'task',
	initialState: initialState,
	reducers: {
		setTasks: (state, action: PayloadAction<any>) => {
			state.tasks = action.payload;
		},
        setFilteredTask: (state, action: PayloadAction<any>) => {
			state.filteredTask = action.payload;
		},
        setInput: (state, action: PayloadAction<any>) => {
			state.input = action.payload;
		},
		addTask:  (state, action) => {
			const task = {
				id: nanoid(),
				task: action.payload,
				done: false,
				important: false,
			};
			let taskTemp = state.tasks;
			taskTemp.push(task);
			state.tasks= taskTemp;
		  },
	},
});


export const { setTasks, setFilteredTask, setInput, addTask } = taskSlice.actions;

export default taskSlice.reducer;