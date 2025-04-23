import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Hak Cipta */}
        <div className="text-center md:text-left">
          © 2025 CND Store. All rights reserved.
        </div>

        {/* Sosial Media */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
