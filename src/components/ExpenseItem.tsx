export default function ExpenseItem({ date, title, amount }: { date: Date; title: string; amount: number }) {
    return (
        <div className='flex w-4/6 items-center justify-start rounded-xl bg-zinc-600 p-2 align-middle text-base shadow-lg'>
            <div className='w-1/6'>{date.toISOString().split('T')[0]}</div>
            <div className='flex w-full items-center justify-between align-middle font-bold text-white'>
                <h2>{title}</h2>
                <div className='rounded-xl border bg-purple-900 px-4 py-2'>R${amount}</div>
            </div>
        </div>
    );
}
