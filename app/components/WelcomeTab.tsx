'use client';

import Image from 'next/image';

type WelcomeTabProps = {
    username: string; // Übergebe den eingeloggten Username als Prop!
};

export default function WelcomeTab({ username }: WelcomeTabProps) {
    return (
        <section className="w-full h-full flex flex-col items-center justify-center py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Willkommen, {username}
            </h1>
            <div className="mb-8 text-lg text-gray-600">
                Schön, dass du wieder da bist!
            </div>
            <div className="flex justify-center items-center">
                <Image
                    src="/dash.png" // Passe ggf. den Pfad zum Logo an!
                    alt="Logo"
                    width={700}
                    height={450}
                    className="rounded-xl shadow-lg mx-auto"
                    priority
                />
            </div>
        </section>
    );
}