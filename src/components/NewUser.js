import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions from Redux
import { createNewUserAction } from '../actions/userActions';
import { showAlert, hideAlert } from '../actions/alertActions';

const NewUser = ({ history }) => {

    // Component state
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const [userState, setUserState] = useState('');

    const dispatch = useDispatch();

    // Introduce to the store
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);
    const alert = useSelector((state) => state.alert.alert);

    // Call the user action
    const addUser = (user) => dispatch(createNewUserAction(user))

    // When the user press submit
    const submitNewUser = e => {
        e.preventDefault();

        // Validate user
        if (name.trim() === '' || lastName.trim() === '' || email.trim() === '' || username.trim() === '') {

            const alert = {
                msg: 'There was an error',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(showAlert(alert))

            return;
        }

        // Check if there not an error
        dispatch(hideAlert());

        // Create the new user
        addUser({
            name,
            lastName,
            email,
            username,
            role,
            userState
        });

        // Redirect
        history.push('/');
    }

    return (
        <div className="row justify-content-center my-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add New User
                        </h2>
                        {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
                        <form
                            onSubmit={submitNewUser}
                        >
                            <div className="form-body">
                                <div className="form-group">
                                    <label>First name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="i.e. Jaime"
                                        name="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="i.e. Duque"
                                        name="lastName"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="i.e. jaimeduque17@gmail.com"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="i.e. jaimeduque17"
                                        name="username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>User role(s):</label>
                                    <div className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="container-margin"
                                            name="role"
                                            value="administrator"
                                            checked={role === 'administrator'}
                                            onChange={e => setRole(e.target.value)}
                                        />
                                        <label>Administrator</label>
                                    </div>
                                    <div className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="container-margin"
                                            name="role"
                                            value="member"
                                            checked={role === 'member'}
                                            onChange={e => setRole(e.target.value)}
                                        />
                                        <label>Member</label>
                                    </div>
                                    <div className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="container-margin"
                                            name="role"
                                            value="contributor"
                                            checked={role === 'contributor'}
                                            onChange={e => setRole(e.target.value)}
                                        />
                                        <label>Contributor</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>User active:</label>
                                    <div className="container-radio">
                                        <div className="custom-radio">
                                            <input
                                                type="radio"
                                                name="userState"
                                                value="yes"
                                                checked={userState === 'yes'}
                                                onChange={e => setUserState(e.target.value)}
                                            />
                                            <label className="container-margin">Yes</label>
                                        </div>
                                        <div className="custom-radio">
                                            <input
                                                type="radio"
                                                name="userState"
                                                value="no"
                                                checked={userState === 'no'}
                                                onChange={e => setUserState(e.target.value)}
                                            />
                                            <label className="container-margin">No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Add
                            </button>
                        </form>
                        {loading ? <p>Loading...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">There was an error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewUser;