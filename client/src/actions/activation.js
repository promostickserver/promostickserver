// import { FETCH_ALL_MONITORS, FETCH_ALL_STRIKES, START_LOADING, END_LOADING, EDIT_MONITOR, EDIT_STRIKES, EDIT_STRIKE } from '../constants/actionTypes'
import * as api from '../api'

export const addUser = (userData) => async (dispatch) => {
    try {
        // dispatch({ type: START_LOADING })
        const { data } = await api.addUser(userData);
        console.log(data)
        // dispatch({ type: FETCH_ALL_MONITORS, payload: data });
        // dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}