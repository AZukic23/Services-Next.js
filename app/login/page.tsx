'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        // Dummy-Prüfung, ersetzen mit echter Auth!
        if (user === 'admin' && pass === '12345678') {
            router.push('/dashboard');
        } else {
            alert('Login fehlgeschlagen!');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white p-8 rounded shadow-md w-80" onSubmit={handleLogin}>
    <h1 className="text-2xl mb-6 font-bold text-center">Admin Login</h1>
    <input
    type="text"
    placeholder="Username"
    value={user}
    onChange={e => setUser(e.target.value)}
    className="border p-2 w-full mb-4 rounded"
    />
    <input
        type="password"
    placeholder="Passwort"
    value={pass}
    onChange={e => setPass(e.target.value)}
    className="border p-2 w-full mb-4 rounded"
    />
    <button
        type="submit"
    className="bg-lime-600 text-white px-4 py-2 rounded w-full font-bold hover:bg-lime-700"
        >
        Login
        </button>
        </form>
        </div>
);
}