import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const navItems = [
    { label: 'Mitarbeiter', href: '/dashboard?tab=mitarbeiter', tab: 'mitarbeiter' },
    { label: 'Kunden', href: '/dashboard?tab=kunden', tab: 'kunden' },
    { label: 'Kunden Leistungen', href: '/dashboard?tab=leistungen', tab: 'leistungen' },
    { label: 'Managed Services', href: '/dashboard?tab=managed', tab: 'managed' },
];

export function Sidebar() {
    const searchParams = useSearchParams();
    const currentTab = searchParams.get('tab'); // <-- nicht mehr mit Default!

    return (
        <aside className="fixed top-0 left-0 h-screen w-60 bg-gray-900 text-white flex flex-col items-center py-6 z-50">
            <Link href="/dashboard" className="mb-8">
                <Image src="/logo.svg" width={120} height={60} alt="Logo" />
            </Link>
            <nav className="flex flex-col gap-4 w-full px-4">
                {navItems.map(item => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={
                            `py-2 px-4 rounded font-semibold transition-colors ` +
                            (
                                // Nur Highlight, wenn ein Tab gesetzt ist und dieser aktiv ist
                                currentTab === item.tab
                                    ? 'bg-lime-600 text-white'
                                    : 'hover:bg-lime-600 hover:text-white'
                            )
                        }
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}