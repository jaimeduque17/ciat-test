import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUserAction } from '../actions/userActions';
import { useHistory } from 'react-router-dom';

const EditUser = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // New state of the user
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        username: '',
        role: '',
        userState: ''
    })

    // User to edit
    const useredit = useSelector(state => state.users.editedUser);

    // Update state
    useEffect(() => {
        setUser(useredit);
    }, [useredit]);

    // Read the data form
    const onChangeForm = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const { name, lastName, email, username, role, userState } = user;

    const submitEditUser = (e) => {
        e.preventDefault();

        dispatch(editUserAction(user));
        history.push('/');
    }

    return (
        <div className="row justify-content-center my-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit User
                        </h2>
                        <form
                            onSubmit={submitEditUser}
                        >
                            <div className="form-body">
                                <div className="form-group">
                                    <label>First name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={name}
                                        onChange={onChangeForm}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        value={lastName}
                                        onChange={onChangeForm}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={onChangeForm}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={username}
                                        onChange={onChangeForm}
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
                                            onChange={onChangeForm}
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
                                            onChange={onChangeForm}
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
                                            onChange={onChangeForm}
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
                                                onChange={onChangeForm}
                                            />
                                            <label className="container-margin">Yes</label>
                                        </div>
                                        <div className="custom-radio">
                                            <input
                                                type="radio"
                                                name="userState"
                                                value="no"
                                                checked={userState === 'no'}
                                                onChange={onChangeForm}
                                            />
                                            <label className="container-margin">No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUser;