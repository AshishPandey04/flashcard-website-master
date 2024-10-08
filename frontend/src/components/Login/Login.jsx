import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'admin@flipit.com' && password === '222324') {
            onLogin();
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="login-body">
            <div className="login-container">
                <h2>Admin Login</h2>
                <input
                    type="email"
                    placeholder="admin@flipit.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="222324"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
