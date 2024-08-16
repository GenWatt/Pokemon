import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PostState {
    id: number
    title: string
    body: string
    userId: number
}

const initialState: PostState[] = [
    // dummy data
    {
        id: 1,
        title: 'title',
        body: 'body',
        userId: 1,
    },
    {
        id: 2,
        title: 'title2',
        body: 'body2',
        userId: 2,
    },
    {
        id: 3,
        title: 'title3',
        body: 'body3',
        userId: 3,
    },
    {
        id: 4,
        title: 'title4',
        body: 'body4',
        userId: 4,
    },
    {
        id: 5,
        title: 'title5',
        body: 'body5',
        userId: 5,
    },
    {
        id: 6,
        title: 'title6',
        body: 'body6',
        userId: 6,
    },
    {
        id: 7,
        title: 'title7',
        body: 'body7',
        userId: 7,
    },
    {
        id: 8,
        title: 'title8',
        body: 'body8',
        userId: 8,
    },
    {
        id: 9,
        title: 'title9',
        body: 'body9',
        userId: 9,
    },
    {
        id: 10,
        title: 'title10',
        body: 'body10',
        userId: 10,
    },
    {
        id: 11,
        title: 'title11',
        body: 'body11',
        userId: 11,
    },
    {
        id: 12,
        title: 'title12',
        body: 'body12',
        userId: 12,
    },
    {
        id: 13,
        title: 'title13',
        body: 'body13',
        userId: 13,
    },
    {
        id: 14,
        title: 'title14',
        body: 'body14',
        userId: 14,
    },
    {
        id: 15,
        title: 'title15',
        body: 'body15',
        userId: 15,
    },
    {
        id: 16,
        title: 'title16',
        body: 'body16',
        userId: 16,
    },
    {
        id: 17,
        title: 'title17',
        body: 'body17',
        userId: 17,
    },
    {
        id: 18,
        title: 'title18',
        body: 'body18',
        userId: 18,
    }
]

export const counterSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer