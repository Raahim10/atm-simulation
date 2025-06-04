import React, { useState, useEffect } from 'react';

function Dashboard({ user }) {
    const [amount, setAmount] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(user.balance || 0);

    const handleAction = async (type) => {
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        const res = await fetch(`/api/${type}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: user.id, amount: parsedAmount })
        });

        if (res.ok) {
            const updated = await res.json();
            setBalance(updated.balance);
            setAmount(""); // Clear input
            loadTransactions();
        } else {
            alert("Transaction failed.");
        }
    };

    const loadTransactions = async () => {
        const res = await fetch(`/api/transactions/${user.id}`);
        if (res.ok) {
            const data = await res.json();
            setTransactions(data);
        } else {
            console.error("Failed to load transactions.");
        }
    };

    useEffect(() => {
        loadTransactions();
    }, []);

    const quickAmounts = [500, 1000, 5000, 10000];

    return (
        <div>
            <h2>Welcome, {user.username}</h2>
            <p>Balance: Rs. {parseFloat(balance).toFixed(2)}</p>

            <div>
                <input
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    type="number"
                />
            </div>

            {/* Quick Amount Buttons */}
            <div style={{ margin: '10px 0' }}>
                {quickAmounts.map(qAmt => (
                    <button
                        key={qAmt}
                        style={{ margin: '5px' }}
                        onClick={() => setAmount(qAmt.toString())}
                    >
                        Rs. {qAmt}
                    </button>
                ))}
            </div>

            <button onClick={() => handleAction("deposit")}>Deposit</button>
            <button onClick={() => handleAction("withdraw")}>Withdraw</button>

            <h3>Transactions</h3>
            <ul>
                {transactions.map(tx => (
                    <li key={tx.id}>
                        {tx.type} of Rs. {tx.amount} on {new Date(tx.createdAt).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
