import ExpenseDate from './ExpenseDate';

export type ExpenseItemType = {
    date: Date;
    title: string;
    amount: string;
};

export default function ExpenseItem({ date, title, amount }: ExpenseItemType) {
    return (
        <div className='mx-4 flex items-center justify-between rounded-xl bg-zinc-600 p-2 align-middle text-base shadow-lg'>
            <ExpenseDate date={date} />
            <div className='flex grow items-center justify-start gap-4 text-2xl font-bold text-white'>
                <h2 className='ml-4 grow'>{title}</h2>
                <div className='rounded-xl border bg-purple-900 px-2 py-6'>R${amount}</div>
            </div>
        </div>
    );
}
