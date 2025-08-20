
import '../index.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-8 mt-16 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm md:text-base">
          © {new Date().getFullYear()} CapriconusGG. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 space-x-4 text-sm">
          <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-400 transition">Terms</a>
          <a href="#" className="hover:text-indigo-400 transition">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
