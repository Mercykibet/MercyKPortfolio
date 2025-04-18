import React from "react";

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-br  from-purple-900 to-slate-900  py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Work <span className="text-purple-400">Experience</span>
        </h2>
        <div className="space-y-12">
          {[
            {
              title: "Software Developer",
              date: "2024 - Present",
              company: "Eclectics International Ltd.",
              description:
                "Developed dynamic, responsive, and interactive Mobile applications using modern frameworks and libraries. Optimized application performance, reducing load times by 30%. Collaborated with designers to translate UI/UX designs into pixel-perfect components. Integrated RESTful APIs and implemented state management using Redux and Context API.",
            },
            {
              title: "React Developer",
              date: "2021 - 2024",
              company: "Innovative Solutions Pvt. Ltd.",
              description:
                "Developed dynamic, responsive, and interactive React applications using modern frameworks and libraries. Optimized application performance, reducing load times by 30%. Collaborated with designers to translate UI/UX designs into pixel-perfect components. Integrated RESTful APIs and implemented state management using Redux and Context API.",
            },
            {
              title: "Front-End Developer",
              date: "2022-present",
              company: "Creative Web Agency",
              description:
                "Designed and built user-friendly web interfaces using HTML, CSS, JavaScript, and React. Improved website accessibility, ensuring compliance with WCAG standards. Increased user engagement by 25% by implementing A/B-tested UI enhancements. Worked closely with backend teams to ensure seamless integration of APIs and web services.",
            },
            {
              title: "Back-End Developer",
              date: "2022 - 2023",
              company: "TechHub Software Ltd.",
              description:
                "Built and maintained scalable back-end systems using Node.js and Express. Designed and optimized database schemas in MongoDB and PostgreSQL to improve query performance. Implemented authentication and authorization systems using JWT and OAuth2. Enhanced server reliability, achieving 99.9% uptime by deploying CI/CD pipelines.",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-o top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-transparent"></div>
              <div className="pl-8">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-purple-500 -translate-x-2.5"></div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
                  <div className="flex flex-wrap gap-4 justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="text-purple-400">{item.date}</span>
                  </div>
                  <h4 className="text-xl text-purple-300 mb-4">
                    {item.company}
                  </h4>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
