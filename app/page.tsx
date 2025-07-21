'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    async function handleLogin(e: { preventDefault: () => void; }) {
        e.preventDefault();

        const result = await signIn('credentials', {
            username: user,
            password: pass,
            redirect: false,
        });

        if (result?.ok) {
            router.push('/dashboard');
        } else {
            setError(result?.error || 'Login fehlgeschlagen!');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <form className="bg-white p-8 rounded shadow-md w-80" onSubmit={handleLogin}>
                <h1 className="text-2xl mb-6 font-bold text-center text-gray-800">Admin Login</h1>
                {error && (
                    <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
                )}
                <label className="block mb-2 text-gray-900">
                    <span className="text-gray-800">Benutzername</span>
                    <input
                        type="text"
                        placeholder="Username"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        className="border p-2 w-full mt-1 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-700"
                        autoFocus
                    />
                </label>
                <label className="block mb-4 text-gray-900">
                    <span className="text-gray-800">Passwort</span>
                    <input
                        type="password"
                        placeholder="Passwort"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                        className="border p-2 w-full mt-1 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-700"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-lime-600 text-white px-4 py-2 rounded w-full font-bold hover:bg-lime-700 transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
}