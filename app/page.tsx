// C'est votre page d'accueil

import Tag from "@/components/Tag/Tag";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
];

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]">
      <div className="max-w-200 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 leading-[1.2]">
          Studio<span className="text-[#ffd700] block">Loïs</span>
        </h1>
        <p className="text-2xl font-medium mb-6 opacity-90">
          Développeur Web Full-Stack
        </p>
        <p className="text-lg mb-10 opacity-85 leading-[1.8]">
          Je crée des applications web modernes, performantes et accessibles
          avec React, Next.js et Node.js.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg no-underline font-semibold text-base transition-all duration-300 inline-block bg-white text-[#364AB0] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg no-underline font-semibold text-base transition-all duration-300 inline-block bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#364AB0] hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
      <ol className="list-decimal list-inside font-(family-name:--font-geist-sans)">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
