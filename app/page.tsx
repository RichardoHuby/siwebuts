// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from 'app/components/Footer';

export default function Home() {
  const products = [
    { name: "Epen Cupen", price: "$9.99", img: "/epen.jpg", link: "/shop/product1" },
    { name: "Doa Cari Jodoh", price: "$14.99", img: "/1.png", link: "/shop/product2" },
    { name: "Classic Comedy DVD", price: "$12.99", img: "/2.png", link: "/shop/product3" },
    { name: "Mr. Bean Holiday", price: "$19.99", img: "/3.png", link: "/shop/product4" },
  ];

  const heroImages = ["/1.png", "/2.png", "/3.png", "/4.png"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Ganti gambar setiap 4 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Section 1: Hero */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImages[currentImage]})`, transition: 'background-image 1s ease-in-out' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10 z-10" />
        <div className="relative z-20 p-10 ml-10 max-w-xl">
        <h1 className="text-5xl font-extrabold text-white mb-5 whitespace-nowrap">
         Welcome to CND Store!
        </h1>
          <h3 className="text-2xl text-gray-200">Where Classic Comedy Never Gets Old!!</h3>

            {/* Tombol Shopping Now */}
            <a
  href="/shop"
  className="inline-block outline outline-yellow-500 text-gray-50 font-semibold py-3 px-6 mt-10 rounded-lg shadow hover:bg-yellow-400 transition duration-300"
>
  🎬 Shopping Now
</a>

        </div>
      </section>

      {/* Section 2: Best Sellers */}
      <section className="py-10 px-6 sm:px-12 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">🔥 Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
              <Image
                className="w-full h-60 object-cover"
                src={product.img}
                alt={product.name}
                width={400}
                height={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
                <Link href={product.link}>
                  <p className="mt-4 inline-block text-blue-500 hover:underline text-sm">View Details</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Why Shop With Us */}
      <section className="py-20 px-6 sm:px-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">🎯 Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Curated Classics</h3>
            <p className="text-sm text-gray-600">Only the best comedy shows and films from every era.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">High Quality CDs & DVDs</h3>
            <p className="text-sm text-gray-600">Enjoy clean, remastered versions of your favorite funny content.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Fast & Reliable Delivery</h3>
            <p className="text-sm text-gray-600">Your laugh therapy delivered quickly and safely to your door.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
