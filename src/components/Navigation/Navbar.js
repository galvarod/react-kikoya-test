import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {login} from '../../Api/UserService';
import {getRoleGrants} from '../../Api/PermissionService';

const LoginForm = ({handleShowLogin, handleSetMenu}) =>{

    const [user, setUser] = useState('GUEST');
    const [password, setPassword] = useState('123456');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
        console.log(password);

        let currentUser = login(user, password);
        let grants = {};
        console.log(currentUser)
        if(currentUser){
            handleShowLogin(false);
            grants = getRoleGrants(currentUser.role)
            handleSetMenu(grants.modules);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder='UserName' value={user} onChange={e => { setUser(e.target.value) }}></input>
            <input placeholder='Password' value={password} onChange={e => { setPassword(e.target.value) }}></input>
            <button type='submit'>Log in!</button>
        </form>
    )
}

LoginForm.propTypes = {
    handleShowLogin:PropTypes.func,
    handleSetMenu:PropTypes.func
};

const NavBar = () => {

    const [showLogin, setShowLogin] = useState(true);
    const [menu, setMenu] = useState([]);

    const logOut = e =>{
        setShowLogin(true)
        setMenu([]);
    }

    return (
            <div className="topnav">
                {menu.map(item => <a href="#" key={item.id}>{item.option}</a>)}
                {showLogin && 
                    <LoginForm 
                    handleSetMenu={setMenu} 
                    handleShowLogin={setShowLogin} />}
                {!showLogin && <button onClick={logOut}>Logout</button>}
            </div>
    );
}

export default NavBar;