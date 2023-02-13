export default function ExpenseDate({ date }: { date: Date }) {
    const monthLocale = date.toLocaleString('pt-BR', { month: 'long' });
    const month = monthLocale[0].toUpperCase() + monthLocale.substring(1);
    const day = date.toLocaleString('pt-BR', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className='flex h-24 w-24 flex-col items-center justify-center rounded-xl border bg-zinc-800 text-xs text-white'>
            <div className='font-bold'>{month}</div>
            <div>{year}</div>
            <div className='mt-1 text-2xl font-bold'>{day}</div>
        </div>
    );
}
