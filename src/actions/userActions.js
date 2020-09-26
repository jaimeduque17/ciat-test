import Swal from 'sweetalert2';
import {
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    START_DOWNLOAD_USERS,
    DOWNLOAD_USERS_SUCCESS,
    DOWNLOAD_USERS_ERROR,
    GET_USER_DELETED,
    USER_DELETED_SUCCESS,
    USER_DELETED_ERROR,
    GET_USER_EDIT,
    START_EDITION_USER,
    USER_EDITED_SUCCESS,
    USER_EDITED_ERROR
} from '../types';
import clientAxios from '../config/axios'

// Create new users
export function createNewUserAction(user) {
    return async (dispatch) => {
        dispatch(addUser());
        try {
            // Insert en the API
            await clientAxios.post('/users', user)

            // Update the state
            dispatch(addUserSuccess(user));

            // Alert
            Swal.fire(
                'Good!',
                'The user is added successfully',
                'success'
            );

        } catch (error) {
            console.log(error);
            dispatch(addUserError(true));

            // Error alert
            Swal.fire({
                icon: 'error',
                title: 'There was an error',
                text: 'There was an error, try again!'
            })
        }
    }
}

const addUser = () => ({
    type: ADD_USER,
    payload: true
});

// If the user is saved in the DB
const addUserSuccess = (user) => ({
    type: ADD_USER_SUCCESS,
    payload: user
});

// If there was an error
const addUserError = (state) => ({
    type: ADD_USER_ERROR,
    payload: state
});

// Function to download the users of the DB
export function getUsersAction() {
    return async (dispatch) => {
        dispatch(downloadUsers());

        try {
            const response = await clientAxios.get('/users');
            dispatch(downloadUsersSuccess(response.data));
        } catch (error) {
            dispatch(downloadUsersError());
            console.log(error)
        }
    }
}

const downloadUsers = () => ({
    type: START_DOWNLOAD_USERS,
    payload: true
});

const downloadUsersSuccess = (users) => ({
    type: DOWNLOAD_USERS_SUCCESS,
    payload: users
});

const downloadUsersError = () => ({
    type: DOWNLOAD_USERS_ERROR,
    payload: true
});

// Select and delete the user
export function deleteUserAction(id) {
    return async (dispatch) => {
        dispatch(getUserDelete(id));
        try {
            await clientAxios.delete(`/users/${id}`);
            dispatch(deleteUserSuccess());
            // Show alert
            Swal.fire(
                'Deleted!',
                'The user has been deleted.',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(deleteUserError());
        }
    }
}

const getUserDelete = (id) => ({
    type: GET_USER_DELETED,
    payload: id
});

const deleteUserSuccess = () => ({
    type: USER_DELETED_SUCCESS
});

const deleteUserError = () => ({
    type: USER_DELETED_ERROR,
    payload: true
});

// Add user in edition
export function getUserEdit(user) {
    return (dispatch) => {
        dispatch(getUserAction(user))
    }
}

const getUserAction = (user) => ({
    type: GET_USER_EDIT,
    payload: user
});

// Edit a registry in the API and the state
export function editUserAction(user) {
    return async (dispatch) => {
        dispatch(editUser(user))
        try {
            await clientAxios.put(`/users/${user.id}`, user);
            dispatch(editUserSuccess(user));
        } catch (error) {
            console.log(error)
            dispatch(editUserError());
        }
    }
}

const editUser = () => ({
    type: START_EDITION_USER
});

const editUserSuccess = (user) => ({
    type: USER_EDITED_SUCCESS,
    payload: user
})

const editUserError = () => ({
    type: USER_EDITED_ERROR,
    payload: true
})
