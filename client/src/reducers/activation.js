// import { FETCH_ALL_MONITORS, FETCH_ALL_STRIKES, EDIT_MONITOR, EDIT_STRIKE, EDIT_STRIKES, START_LOADING, END_LOADING } from '../constants/actionTypes'

const initialState = {monitors: [], strikes: [], isLoading: true}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FETCH_ALL_MONITORS:
        //     const monitors = action.payload;
        //     return { ...state, monitors: monitors }
        // case FETCH_ALL_STRIKES:
        //     const strikes = action.payload;
        //     return { ...state, strikes: strikes }
        // case EDIT_MONITOR:
        //     const newMonitor = action.payload;
        //     const newStateMonitors = state.monitors.map(monitor => {
        //         return monitor._id === newMonitor._id ? newMonitor : monitor;
        //     })
        //     return { ...state, monitors: [...newStateMonitors] }
        // case EDIT_STRIKES:
        //     return { ...state, strikes: [...action.payload.strikes] }
        // case EDIT_STRIKE:
        //     const newStrike = action.payload;
        //     const newStateStrikes = state.strikes.map(strike => {
        //         return strike._id === newStrike._id ? newStrike : strike;
        //     })
        //     return { ...state, strikes: [...newStateStrikes] }
        // case START_LOADING:
        //     return { ...state, isLoading: true };
        // case END_LOADING:
        //     return { ...state, isLoading: false };
        default:
            return state
    }
}

export default authReducer