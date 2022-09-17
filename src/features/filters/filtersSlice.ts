import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface iFilter {
    searchTerm: any,
	searchCategory: any
}

const initialState: iFilter =    {
                            searchTerm: '',
                            searchCategory: 'All'
                        }


export const filtersSlice = createSlice({
	name: 'filters',
	initialState: initialState,
	reducers: {
        setSearchTerm: (state, action: PayloadAction<any>) => {
			state.searchTerm = action.payload;
		},
        setSearchCategory: (state, action: PayloadAction<any>) => {
			state.searchCategory = action.payload;
		},
	},
});


export const { setSearchTerm, setSearchCategory } = filtersSlice.actions;

export default filtersSlice.reducer;