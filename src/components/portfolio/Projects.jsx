import { Section } from "lucide-react";
import React from "react";
import photo1 from "../../assets/images/projectimages/project1image.jpeg";
import photo2 from "../../assets/images/projectimages/project2image.jpeg";
import photo3 from "../../assets/images/projectimages/project3image.jpeg";
import { ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
          title: "E-Commerce Website",
          description: "Developed dynamic, responsive, and interactive React applications using modern frameworks and libraries. Integrated RESTful APIs and implemented state management using Redux and Context API.",
          techStack: ['React', 'Redux', 'RESTful APIs', 'Context API'],
          githubLink: "https://github.com",
          image: photo1
        },
        {
            title: "Mobile Applications",
            description: "Built cross-platform mobile apps using Kotlin with XML UI and React Native with sleek UI and optimized performance. Integrated APIs, implemented navigation, and managed state with Redux and Context API.",
            techStack: ['Kotlin','React Native', 'Redux', 'RESTful APIs', 'Context API','React Navigation'],
            githubLink: "https://github.com",
            image: photo1
          },
        {
          title: "Portfolio Website",
          description: "Designed and built user-friendly web interfaces using JavaScript and React. Improved website accessibility, ensuring compliance with WCAG standards.",
          techStack: ['JavaScript', 'React', 'Tailwind Css', 'Shadcn UI'],
          githubLink: "https://github.com",
          image: photo2
        },
        {
          title: "Job Portal",
          description: "Built and maintained scalable back-end systems using Node.js and Express. Designed and optimized database schemas in MongoDB and PostgreSQL to improve query performance.",
          techStack: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT', 'OAuth2'],
          githubLink: "https://github.com",
          image: photo3
        }
      ];
      return (
        <section id="projects" className="min-h-screen bg-gradient-to-br  from-purple-900 to-slate-900  py-32 px-4 sm:px-6 lg:px-8">
          <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-16 text-center'>
              Featured <span className='text-purple-400'>Projects</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {projects.map((project, index) => (
                <div key={index}
                  className='relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden'>
                  {/* Image Section */}
                  <div className='aspect-video relative overflow-hidden'>
                    <img src={project.image} alt={project.title} className='object-cover w-full h-full' />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                  </div>
                  <div className='p-8'>
                    <h3 className='text-2xl font-semibold text-white mb-3'>{project.title}</h3>
                    <p className='text-slate-300 mb-6'>{project.description}</p>
                    <div className='flex flex-wrap gap-3'>
                      {project.techStack.map((tech) => (
                        <span key={tech} className='px-4 py-2 bg-white/10 rounded-full text-sm text-white backdrop-blur-sm'>
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Your Project Link */}
                    <a href={project.githubLink}
                      target="_blank"
                      className='mt-6 inline-block px-4 py-2 bg-white text-purple-400 rounded-full transition-colors duration-300 hover:bg=purple-400 hover:text-black'>
                      View Project <ExternalLink className='w-4 h-4 inline' />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
}
export default Projects