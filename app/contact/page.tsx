// src/app/contact/page.tsx
import Navbar from 'app/components/Navbar';
import Footer from 'app/components/Footer';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-lg mb-8">Silakan hubungi kami melalui media sosial atau datang langsung ke toko kami. Kami siap melayani Anda!</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0981783402694!2d110.41355417455374!3d-7.779414177183496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f1fb2f2b45%3A0x20986e2fe9c79cdd!2sUniversitas%20Atma%20Jaya%20Yogyakarta%20-%20Kampus%203%20Gedung%20Bonaventura%20Babarsari!5e0!3m2!1sid!2sid!4v1745355408962!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="mb-5 mt-10">
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center space-x-4">
              <FaInstagram className="text-2xl text-pink-600" />
              <a href="https://www.instagram.com/toko_online" target="_blank" className="text-blue-600 hover:underline">
                Instagram: @cnd_store
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <FaWhatsapp className="text-2xl text-green-600" />
              <a href="https://wa.me/08123456789" target="_blank" className="text-green-600 hover:underline">
                WhatsApp: +1234567890
              </a>
            </li>
          </ul>
        </section>

      </div>
      <Footer/>
    </div>
    
  );
}
