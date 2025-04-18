import React from "react";
import { Code, Cpu, Database, Globe } from 'lucide-react'
const Skills = () => {
  const skillsData = [
    {
      icon: Code,
      title: "Frontend",
      techStack: [
        "Kotlin",
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      icon: Database,
      title: "Backend",
      techStack: [
        "Node.js",
        "Express",
        "SQL",
        "PostgreSQL",
        "GraphQL",
        "REST APIs",
      ],
    },
    {
      icon: Globe,
      title: "Web3",
      techStack: [
        "Ethereum",
        "Solidity",
        "Web3.js",
        "Smart Contracts",
        "IPFS",
        "Hardhat",
      ],
    },
    {
      icon: Cpu,
      title: "DevOps",
      techStack: ["Docker", "Kubernetes", "CI/CD", "AWS", "Linux", "Terraform"],
    },
  ];
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Skills & <span className="text-purple-400">Expertise</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.map(({ icon: Icon, title, techStack }) => (
            <div
              key={title}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <Icon className="w-16 h-16 text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl text-white text-center font-medium">
                {title}
              </h3>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm text-white backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
