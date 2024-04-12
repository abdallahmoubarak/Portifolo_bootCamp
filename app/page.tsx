import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row items-end justify-between p-10">
          <div className="font-bold text-amber-400">
            <a href="#home"> HusseinMbarak </a>
          </div>
          <nav className="flex flex-row items-end justify-between gap-10">
            <a
              href="#aboutus"
              className="hover:text-amber-400 hover:font-extralight"
            >
              AboutUs
            </a>
            <a
              href="#projects"
              className="hover:text-amber-400 hover:font-extralight"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="hover:text-amber-400 hover:font-extralight"
            >
              ContactUs
            </a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-7xl font-bold text-gray-500 px-80 font-nunito">AboutUs</h1>
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
            className="bg-amber-400 rounded-full "
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default page;
