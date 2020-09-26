import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { deleteUserAction, getUserEdit } from '../actions/userActions';

const User = ({ user }) => {

    const { name, lastName, id } = user

    const dispatch = useDispatch();
    const history = useHistory();

    // Confirm if you want delete
    const confirmDeleteUser = (id) => {

        // Ask to the user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                // Pass to the action
                dispatch(deleteUserAction(id));
            }
        });
    }

    // Function to redirect
    const redirectEdition = (user) => {
        dispatch(getUserEdit(user))
        history.push(`/users/edit/${user.id}`)
    }

    return (
        <div className="container-user-info">
            <div className="font-weight-bold">{name} {lastName}</div>
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-warning mr-2"
                    onClick={() => redirectEdition(user)}
                >
                    &#9998; Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteUser(id)}
                >
                    &#10007;
                </button>
            </div>
        </div>
    );
}

export default User;