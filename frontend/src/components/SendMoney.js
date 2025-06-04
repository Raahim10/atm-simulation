import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SendMoney() {
    const [users, setUsers] = useState([]);
    const [recipientId, setRecipientId] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
            .then(res => setUsers(res.data));
    }, []);

    const handleSend = () => {
        const senderId = localStorage.getItem('userId');
        axios.post(`http://localhost:8080/api/transactions/send`, {
            senderId,
            recipientId,
            amount,
            description
        }).then(() => navigate('/dashboard'));
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-xl font-bold mb-4">Send Money</h1>
            <select
                className="w-full border p-2 rounded mb-3"
                onChange={(e) => setRecipientId(e.target.value)}
                value={recipientId}
            >
                <option value="">Select recipient</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.username}</option>
                ))}
            </select>
            <input
                type="number"
                className="w-full border p-2 rounded mb-3"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="text"
                className="w-full border p-2 rounded mb-3"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleSend} className="bg-blue-600 text-white py-2 px-4 rounded">Send</button>
        </div>
    );
}

export default SendMoney;