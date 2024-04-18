import { AiOutlineFileText } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa";

export function Header() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold hidden lg:block">QR Code Generate</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/EdilandoSaturnino/qrcode-generate"
              target="_blank"
              className="flex items-center gap-3 p-3 text-sky-300 ring-1 ring-sky-300 hover:opacity-80 active:ring cursor-pointer"
            >
              <span className="inline">Docs</span>
              <AiOutlineFileText size={24} className="block" />
            </a>
          </li>
          <li>
            <a
              href="https://www.buymeacoffee.com/edilandosaturnino"
              target="_blank"
              className="flex items-center gap-3 p-3 text-purple-400 ring-1 ring-purple-400 hover:opacity-80 active:ring cursor-pointer"
            >
              <span className="inline">Buy me a Coffee!</span>
              <FaCoffee size={24} className="block" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
