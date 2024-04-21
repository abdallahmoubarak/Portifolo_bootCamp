import Image from "next/image";
import Title from "@/components/atom/Title";

export default function HeroSection() {
  return (
    <div className="p-4">
      <Title text={"About Us"} />
      <div className="flex flex-wrap items-center justify-evenly gap-4 bg-yellow-100 rounded-lg py-8 px-4">
        <p className="font-extralight text-2xl sm:text-5xl text-gray-400">
          <h2>Hi,My name is Hussein Iam </h2>
          <h2 className="text-amber-400 font-medium">
            Full Stack Web Developer
          </h2>
        </p>
        <div className="w-80 bg-amber-400 rounded-full p-1">
          <Image
            src="/Profile.png"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-full object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
