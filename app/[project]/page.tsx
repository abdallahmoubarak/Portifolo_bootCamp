import { projects } from "@/public/data/project";
import Image from "next/image";
import Link from "next/link";

export default function Project({
  params: { project },
}: {
  params: { project: string };
}) {
  const projectItem = projects?.filter(
    (item) => item.name === decodeURI(project),
  )[0];
  return (
    <div className="flex flex-col gap-4 items-center">
      <Link href="/">back</Link>
      <h1 className="text-4xl text-center">{decodeURI(project)}</h1>
      <Image src={projectItem?.logoSrc} alt="Logo" width={150} height={150} />
      <p>{projectItem?.description}</p>
    </div>
  );
}
