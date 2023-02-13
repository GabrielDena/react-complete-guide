import { useState } from 'react';
import ExpenseList from './components/Expenses/ExpenseList';

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
        <div className='flex h-screen flex-col justify-center align-middle'>
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default App;
