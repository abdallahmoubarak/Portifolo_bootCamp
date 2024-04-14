import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row items-end justify-between p-10">
          <div className="font-bold text-amber-400">
            <a href="#home"> HusseinMbarak </a>
          </div>
          <nav className="flex flex-row items-end justify-between gap-10">
            <a href="#aboutus" className="hover:text-amber-400">
              AboutUs
            </a>
            <a href="#projects" className="hover:text-amber-400">
              Projects
            </a>
            <a href="#Contact" className="hover:text-amber-400">
              ContactUs
            </a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold text-gray-500">About Us</h1>
        </div>
        <div className="flex flex-row items-start justify-between px-20">
          <p className="font-extralight text-3xl text-gray-400 p-32">
            Hi,My name is Hussein Iam <br />{" "}
            <span className="text-amber-400 font-medium">
              Full Stack Web Developer
            </span>
          </p>
          <div className="flex flex-col items-end justify-end px-10 ">
            <Image
              src="/Profile.png"
              alt="Profile"
              width={400}
              height={400}
              className="bg-amber-400 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <h1 className="flex flex-row items-center justify-center text-7xl text-gray-500 font-bold">
          Projects
        </h1>
      </div>
      <div className=" h-32 grid grid-cols-4 place-items-center">
        <div className="flex flex-col items-center justify-center px-10">
          <a href="#">
            <Image src={"/Logo.ico"} alt="Logo" width={250} height={250} />
          </a>
        </div>
        <div>
          <a href="#">
            <Image src={"/Logo.svg"} alt="Logo" width={200} height={200} />
          </a>
        </div>
        <div>
          <a href="#">
            <Image src={"/Crunchiz.ico"} alt="Logo" width={200} height={200} />
          </a>
        </div>
        <div>
          <a href="#">
            <Image
              src={"/TaskMagnet.png"}
              alt="Logo"
              width={150}
              height={150}
            />
          </a>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <h1 className="flex flex-col items-center justify-center text-7xl text-gray-500 font-bold p-32">
          Contact us
        </h1>
        <div className="flex flex-col items-center justify-center p-10  gap-10 bg-amber-400 w-full">
          <p>Follow us on Social media for more info</p>
          <div className="flex flex-row items-center justify-center gap-10">
            <a
              href="https://www.instagram.com/hussein_mbarak000/"
              target="_blank"
            >
              <FaInstagram className="hover:text-red-500" size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/all-gamers-61804521a/"
              target="_blank"
            >
              <FaLinkedin className="hover:text-blue-600" size={40} />
            </a>
            <a href="https://github.com/AllGamers20" target="_blank">
              <FaGithub className="hover:text-gray-400" size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
