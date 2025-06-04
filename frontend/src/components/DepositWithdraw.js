import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DepositWithdraw() {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('deposit');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const userId = localStorage.getItem('userId');
        axios.post(`http://localhost:8080/api/transactions/${type}`, {
            userId,
            amount
        }).then(() => navigate('/dashboard'));
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-xl font-bold mb-4">Deposit or Withdraw</h1>
            <select
                className="w-full border p-2 rounded mb-3"
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
            </select>
            <input
                type="number"
                className="w-full border p-2 rounded mb-3"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleSubmit} className="bg-green-600 text-white py-2 px-4 rounded">Submit</button>
        </div>
    );
}

export default DepositWithdraw;
