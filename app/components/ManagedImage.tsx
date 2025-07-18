import Image from 'next/image';

export function ManagedImage() {
    return (
        <div className="flex justify-center items-center h-full">
            <Image src="/dash.png" width={750} height={450} alt="Managed Services Grafik" />
        </div>
    );
}