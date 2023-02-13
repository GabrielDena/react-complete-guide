import { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
    const [count, setCount] = useState(0);
    const expenses = [
        {
            date: new Date(),
            title: (Math.random() + 1).toString(36),
            amount: (Math.floor(Math.random() * 5000) + 1).toFixed(2).replace('.', ','),
        },
        {
            date: new Date(),
            title: (Math.random() + 1).toString(36),
            amount: (Math.floor(Math.random() * 5000) + 1).toFixed(2).replace('.', ','),
        },
    ];

    return (
        <div className='flex h-screen flex-col justify-center bg-zinc-800 align-middle'>
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
        </div>
    );
}

export default App;
