import {createSlice} from '@reduxjs/toolkit'

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        wordsSize: 15,
        wordsColor: '#fff',
        numbersSize: 15,
        numbersColor: [0,0,100],
        isLeft: false,
        isVertical: false
    },
    reducers: {
        changeWordsSize: (state,action)=>({
            ...state,
            wordsSize: action.payload.wordsSize
        }),
        changeWordsColor: (state,action)=>({
            ...state,
            wordsColor: action.payload.wordsColor
        }),
        changeNumbersSize: (state,action)=>({
            ...state,
            numbersSize: action.payload.numbersSize
        }),
        changeNumbersColor: (state,action)=>({
            ...state,
            numbersColor: action.payload.numbersColor
        }),
        changeIsLeft: (state,action)=>({
            ...state,
            isLeft: action.payload.isLeft
        }),
        changeIsVertical: (state,action)=>({
            ...state,
            isVertical: action.payload.isVertical
        })
    }
})

export const {
    changeWordsSize,
    changeWordsColor,
    changeNumbersSize,
    changeNumbersColor,
    changeIsLeft,
    changeIsVertical
} = statsSlice.actions;

export default statsSlice.reducer;