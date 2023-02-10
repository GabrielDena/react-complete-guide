export default function ExpenseItem() {
    const expenseDate = new Date();
    const expenseTitle = 'Airplane Tickets';
    const expenseAmount = 95000;

    return (
        <div className='flex w-4/6 items-center justify-start rounded-xl bg-zinc-600 p-2 align-middle text-base shadow-lg'>
            <div className='w-1/6'>{expenseDate.toISOString().split('T')[0]}</div>
            <div className='flex w-full items-center justify-between align-middle font-bold text-white'>
                <h2>{expenseTitle}</h2>
                <div className='rounded-xl border bg-purple-900 px-4 py-2'>R${expenseAmount}</div>
            </div>
        </div>
    );
}
