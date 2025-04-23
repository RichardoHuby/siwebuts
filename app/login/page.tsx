'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import ikon mata

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State untuk toggle password

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin123' && password === '12345') {
      toast.success('Login sukses sebagai Admin!');
      Cookies.set('role', 'admin'); // Simpan role di cookie
      router.push('/dashboard'); // Redirect ke halaman dashboard admin
    } else if (username === 'user123' && password === '12345') {
      toast.success('Login sukses sebagai User!');
      Cookies.set('role', 'user'); // Simpan role di cookie
      router.push('/'); // Redirect ke halaman Home
    } else {
      toast.error('Username atau password salah!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster />
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96 space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'} // Menampilkan password jika showPassword true
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPassword(prev => !prev)} // Toggle password visibility
          >
            {showPassword ? <FaEye className="text-gray-600" /> : <FaEyeSlash className="text-gray-600" />}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <div className="text-sm text-center">
          <a href="/register" className="text-blue-600 hover:underline mr-2">Register</a> | 
          <a href="/forgot-password" className="text-blue-600 hover:underline ml-2">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}
