import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { label: 'Mitarbeiter', href: '/dashboard?tab=mitarbeiter' },
    { label: 'Kunden', href: '/dashboard?tab=kunden' },
    { label: 'Kunden Leistungen', href: '/dashboard?tab=leistungen' },
    { label: 'Managed Services', href: '/dashboard?tab=managed' },
];

export function Sidebar() {
    return (
        <aside className="bg-gray-900 text-white w-60 h-screen flex flex-col items-center py-6">
            <Image src="/logo.svg" width={120} height={60} alt="Logo" className="mb-8" />
            <nav className="flex flex-col gap-4 w-full px-4">
                {navItems.map(item => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="py-2 px-4 rounded hover:bg-lime-600 transition-colors font-semibold"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}