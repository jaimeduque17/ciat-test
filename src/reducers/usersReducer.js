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
    USER_EDITED_SUCCESS,
    USER_EDITED_ERROR
} from '../types';

// Each reducer have your own state
const initialState = {
    users: [],
    error: null,
    loading: false,
    deletedUser: null,
    editedUser: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
        case START_DOWNLOAD_USERS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload]
            }
        case ADD_USER_ERROR:
        case DOWNLOAD_USERS_ERROR:
        case USER_DELETED_ERROR:
        case USER_EDITED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload
            }
        case GET_USER_DELETED:
            return {
                ...state,
                deletedUser: action.payload
            }
        case USER_DELETED_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== state.deletedUser),
                deletedUser: null
            }
        case GET_USER_EDIT:
            return {
                ...state,
                editedUser: action.payload
            }
        case USER_EDITED_SUCCESS:
            return {
                ...state,
                editedUser: null,
                users: state.users.map(
                    user => user.id === action.payload.id
                        ? user = action.payload
                        : user
                )
            }
        default:
            return state;
    }
}