import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

// Show alert
export function showAlert(alert) {
    return (dispatch) => {
        dispatch(createAlertError(alert))
    }
}

const createAlertError = (alert) => ({
    type: SHOW_ALERT,
    payload: alert
});

// Hide alert
export function hideAlert() {
    return (dispatch) => {
        dispatch(hideAlertError())
    }
}

const hideAlertError = () => ({
    type: HIDE_ALERT
});