// src/app/about/page.tsx
import Navbar from 'app/components/Navbar';
import Footer from 'app/components/Footer';
import { StarIcon } from '@heroicons/react/24/solid';

export default function About() {
  const reviews = [
    {
      name: "Indra Saputra",
      text: "CD lawaknya bener-bener nostalgia! Bisa ketawa ngakak bareng keluarga. Kualitas oke dan pengiriman cepat!",
    },
    {
      name: "Putri Amelia",
      text: "Sudah lama cari film ini, akhirnya ketemu di sini! Kemasannya juga unik banget, bener-bener kayak koleksi.",
    },
    {
      name: "Raka Wijaya",
      text: "Toko ini wajib dikunjungi buat penggemar komedi klasik. Gak nyangka dapet film jadul favorit saya!",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">About CND Store</h1>
          <p className="text-lg mb-6 text-gray-700 max-w-3xl mx-auto">
            CND Store adalah toko spesialis CD dan kaset film-film komedi klasik yang mengundang tawa dan nostalgia.
            Kami percaya bahwa tawa adalah obat terbaik, dan kami hadir untuk memastikan setiap pelanggan membawa pulang tawa dalam bentuk film berkualitas.
          </p>
          <p className="italic text-md text-gray-500">"Where Classic Comedy Never Gets Old!!"</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 mb-16">
          <div className="text-center">
            <img src="/do.jpeg" alt="Owner 1" className="w-48 h-48 rounded-full mx-auto mb-4" />
            <p className="font-semibold">Yohanes Richardo Huby</p>
          </div>
          <div className="text-center">
            <img src="/dan.jpeg" alt="Owner 2" className="w-48 h-48 rounded-full mx-auto mb-4" />
            <p className="font-semibold">Daniel Justin O. Sihombing</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">"{review.text}"</p>
                <p className="text-sm text-gray-600 text-right">- {review.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
    
  );
}
