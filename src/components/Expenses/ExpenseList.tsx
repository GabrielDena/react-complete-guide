import Card from '../UI/Card';
import ExpenseItem, { ExpenseItemType } from './ExpenseItem';

export default function ExpenseList({ expenses }: { expenses: ExpenseItemType[] }) {
    const listExpenses = expenses.map((expense) => {
        return <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />;
    });

    return <Card className='my-8 mx-auto flex w-192 max-w-95 flex-col gap-4 bg-zinc-800 p-4'>{listExpenses}</Card>;
}
