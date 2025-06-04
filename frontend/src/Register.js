import React, { useState } from 'react';

function Register({ setUser, setShowRegister }) {
    const [username, setUsername] = useState("");
    const [pin, setPin] = useState("");

    const handleRegister = async () => {
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, pin })
        });
        if (res.ok) {
            const user = await res.json();
            setUser(user);
        } else {
            alert("Registration failed");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input placeholder="PIN" type="password" onChange={e => setPin(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
            <p>Already have an account? <button onClick={() => setShowRegister(false)}>Login</button></p>
        </div>
    );
}

export default Register;