"use client";
import Image from "next/image";
import Title from "../atom/Title";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/public/data/project";

export default function Projects() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <Title text="Projects" />
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-amber-300 py-2 px-4 rounded-lg"
      />
      <div className="flex flex-wrap justify-center gap-2 ">
        {projects
          ?.filter((project) =>
            project.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((project, i) => (
            <Link href={`/${project.name}`}>
              <div
                key={i}
                className="flex flex-col items-center rounded-lg justify-between p-4 border border-amber-400">
                <Image
                  src={project.logoSrc}
                  alt="Logo"
                  width={150}
                  height={150}
                />
                <div>{project.name}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
