import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from './User'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../actions/userActions';

const Users = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        // Consult API
        const loadUsers = () => dispatch(getUsersAction());
        loadUsers();
        // eslint-disable-next-line
    }, []);

    // Get the state
    const users = useSelector(state => state.users.users);
    const error = useSelector(state => state.users.error);
    const loading = useSelector(state => state.users.loading);

    return (
        <>
            <h2 className="my-5">Users List</h2>
            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">There was an error</p> : null}
            {loading ? <p className="text-center">Loading...</p> : null}
            <div>
                {users.length === 0
                    ? 'No Users'
                    : (users.map(user => (<User key={user.id} user={user} />)))}
            </div>
        </>
    );
}

export default Users;