import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Title from "../atom/Title";

export default function Footer() {
  return (
    <div className="container mx-auto md:w-full sm:w-[640px]">
      <Title text=" Contact us" />
      <div className="flex flex-col items-center justify-center p-10  gap-10 bg-amber-400 ">
        <p>Follow us on Social media for more info</p>
        <footer className="flex flex-row items-center justify-center gap-10 w-full">
          <a
            href="https://www.instagram.com/hussein_mbarak000/"
            target="_blank">
            <FaInstagram className="hover:text-red-500" size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/all-gamers-61804521a/"
            target="_blank">
            <FaLinkedin className="hover:text-blue-600" size={40} />
          </a>
          <a href="https://github.com/AllGamers20" target="_blank">
            <FaGithub className="hover:text-gray-400" size={40} />
          </a>
        </footer>
      </div>
    </div>
  );
}
