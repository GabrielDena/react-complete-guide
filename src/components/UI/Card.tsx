import { ReactNode } from 'react';

export default function Card({ children, className }: { children: ReactNode; className: string }) {
    return <div className={`rounded-xl shadow-md ${className}`}>{children}</div>;
}
