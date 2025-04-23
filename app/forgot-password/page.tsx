'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulasikan proses reset password
    toast.success('Email pemulihan password telah dikirim! Silakan cek inbox Anda.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster />
      <form onSubmit={handlePasswordReset} className="bg-white p-8 rounded shadow-md w-96 space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
        <p className="text-lg text-center mb-4">Masukkan email Anda untuk menerima instruksi pemulihan password.</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Reset Password
        </button>
        <div className="text-sm text-center mt-4">
          <p>Remembered your password?</p>
          <a href="/login" className="text-blue-600 hover:underline">Login here</a>
        </div>
      </form>
    </div>
  );
}
