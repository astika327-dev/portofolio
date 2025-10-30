import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Astika</h3>
            <p className="text-gray-400">Digital Craftsman</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Putu Astika. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ by{" "}
            <Link href="https://bali-webdevelover.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Bali WebDevelover
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
