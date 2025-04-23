import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-blue-500 text-white">
    <Link href="/" className="text-2xl font-bold">Comedy Shop</Link>
    <div>
      <Link href="/" className="mx-4">Home</Link>
      <Link href="/shop" className="mx-4">Shop</Link>
      <Link href="/about" className="mx-4">About</Link>
      <Link href="/contact" className="mx-4">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
