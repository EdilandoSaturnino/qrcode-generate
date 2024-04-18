import { FiGithub } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="flex justify-between items-center bg-gray-800 p-4">
      <a
        href="https://github.com/edilandosaturnino"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <FiGithub className="mr-2" /> Github
      </a>
      <a
        className="flex items-center gap-3 p-3 hover:opacity-80"
        target="_blank"
        href="https://instagram.com/edilandosaturnino"
      >
        @<span className="inline">EdilandoSaturnino</span>
      </a>
    </footer>
  );
}
