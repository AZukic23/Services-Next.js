import Image from 'next/image';

export function ManagedImage() {
    return (
        <div className="flex justify-center items-center h-full">
            <Image src="/managed.png" width={500} height={300} alt="Managed Services Grafik" />
        </div>
    );
}