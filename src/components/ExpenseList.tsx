import ExpenseItem, { ExpenseItemType } from './ExpenseItem';

export default function ExpenseList({ expenses }: { expenses: ExpenseItemType[] }) {
    const listExpenses = expenses.map((expense) => {
        return <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />;
    });

    return (
        <div className='my-8 mx-auto flex w-192 max-w-95 flex-col gap-2 rounded-xl bg-zinc-900 p-4 shadow-sm'>
            {listExpenses}
        </div>
    );
}
